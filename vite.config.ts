import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import tailwindcss from '@tailwindcss/postcss';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'], // make sure this matches your React entry file
            ssr: 'resources/js/ssr.tsx',     // if you're doing SSR with React (optional)
            refresh: true,
        }),
        react(), // 👈 this replaces the vue() plugin
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
    build: {
        outDir: 'public/build',
        emptyOutDir: true,
        manifest: 'manifest.json',
    },
});
