<?php

use Illuminate\Database\Migrations\Migration;

// This table has been superseded by the covers table, which now holds
// relationship_type_id directly. This migration is intentionally a no-op.
return new class extends Migration
{
    public function up(): void {}
    public function down(): void {}
};
