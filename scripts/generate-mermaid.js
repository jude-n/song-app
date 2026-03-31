#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simple, clean generator: scan Laravel migration files and emit a Mermaid ER diagram
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MIGRATIONS_DIR = path.resolve(__dirname, '..', 'database', 'migrations');
const OUT_DIR = path.resolve(__dirname, '..', 'docs');
const OUT_FILE = path.join(OUT_DIR, 'schema.mmd');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function listMigrations() {
  try {
    return fs.readdirSync(MIGRATIONS_DIR).filter(f => f.endsWith('.php')).map(f => path.join(MIGRATIONS_DIR, f));
  } catch (err) {
    console.error('Unable to read migrations directory:', err.message);
    return [];
  }
}

function parseCreateBlocks(content) {
  const rex = /Schema::create\s*\(\s*['\"]([\w_]+)['\"]\s*,\s*function\s*\([^)]*\)\s*\{([\s\S]*?)\}\s*\)\s*;/g;
  const blocks = [];
  for (const m of content.matchAll(rex)) blocks.push({ table: m[1], body: m[2] });
  return blocks;
}

function extractColumns(body) {
  const cols = [];
  if (/\$table->id\s*\(\s*\)/.test(body)) cols.push({ name: 'id', type: 'bigint' });

  const colRex = /\$table->([a-zA-Z0-9_]+)\s*\(\s*['\"]([a-zA-Z0-9_]+)['\"](?:\s*,\s*([^)]+))?\)\s*(?:->[^;]*)?;/g;
  for (const m of body.matchAll(colRex)) {
    const meth = m[1];
    const name = m[2];
    let type = meth;
    switch (meth) {
      case 'string': type = 'varchar'; break;
      case 'text': type = 'text'; break;
      case 'integer': type = 'int'; break;
      case 'bigInteger': type = 'bigint'; break;
      case 'foreignId': type = 'bigint FK'; break;
      case 'date': type = 'date'; break;
      case 'boolean': type = 'boolean'; break;
      case 'float': type = 'float'; break;
      case 'json': type = 'json'; break;
      case 'timestamp': type = 'timestamp'; break;
      case 'timestamps': type = 'timestamp'; break;
      case 'longText': type = 'longtext'; break;
      default: type = meth;
    }
    cols.push({ name, type });
  }

  const fkRex = /\$table->foreignId\s*\(\s*['\"]([a-zA-Z0-9_]+)['\"]\)\s*->constrained\s*\(\s*['\"]?([a-zA-Z0-9_]+)['\"]?/g;
  for (const m of body.matchAll(fkRex)) cols.push({ name: m[1], type: `bigint FK->${m[2] || 'unknown'}` });

  return cols;
}

function parseMigration(file) {
  const content = fs.readFileSync(file, 'utf8');
  const blocks = parseCreateBlocks(content);
  const tables = blocks.map(b => ({ name: b.table, columns: extractColumns(b.body) }));

  // activitylog special-case
  if (/activitylog/.test(content) && /nullableMorphs|properties|log_name/.test(content)) {
    const cols = [];
    if (/bigIncrements\(\'id\'\)|bigIncrements\(\"id\"\)/.test(content)) cols.push({ name: 'id', type: 'bigint' });
    if (/string\(\'log_name\'\)|string\(\"log_name\"\)/.test(content)) cols.push({ name: 'log_name', type: 'varchar' });
    if (/text\(\'description\'\)|text\(\"description\"\)/.test(content)) cols.push({ name: 'description', type: 'text' });
    if (/nullableMorphs\(\'subject\'\)|nullableMorphs\(\"subject\"\)/.test(content)) cols.push({ name: 'subject_id', type: 'bigint|null' });
    if (/nullableMorphs\(\'causer\'\)|nullableMorphs\(\"causer\"\)/.test(content)) cols.push({ name: 'causer_id', type: 'bigint|null' });
    if (/json\(\'properties\'\)|json\(\"properties\"\)/.test(content)) cols.push({ name: 'properties', type: 'json' });
    if (/string\(\'event\'\)|string\(\"event\"\)/.test(content)) cols.push({ name: 'event', type: 'varchar|null' });
    tables.push({ name: 'activity_log', columns: cols });
  }

  return tables;
}

function merge(list) {
  const map = new Map();
  for (const t of list.flat()) {
    if (!map.has(t.name)) map.set(t.name, { name: t.name, columns: [] });
    const entry = map.get(t.name);
    for (const c of t.columns) if (!entry.columns.find(x => x.name === c.name)) entry.columns.push(c);
  }
  return Array.from(map.values());
}

function render(tables) {
  const lines = ['```mermaid', 'erDiagram'];
  for (const t of tables) {
    lines.push(`    ${t.name.toUpperCase()} {`);
    for (const c of t.columns) lines.push(`        ${c.type} ${c.name}`);
    lines.push('    }', '');
  }
  lines.push('    %% Relationships (heuristic FK detection)');
  for (const t of tables) for (const c of t.columns) {
    const m = String(c.type).match(/->([a-zA-Z0-9_]+)/);
    if (m) lines.push(`    ${t.name.toUpperCase()} }o--|| ${m[1].toUpperCase()} : "fk_${c.name}"`);
  }
  lines.push('```');
  return lines.join('\n');
}

function main() {
  const files = listMigrations();
  const parsed = files.map(f => parseMigration(f));
  const merged = merge(parsed);
  const mermaid = render(merged);
  fs.writeFileSync(OUT_FILE, mermaid, 'utf8');
  console.log('Wrote', OUT_FILE);
}

main();
