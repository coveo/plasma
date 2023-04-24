import {resolve} from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@test-utils',
                replacement: resolve(__dirname, './src/__tests__/Utils.tsx'),
            },
        ],
    },
    test: {
        exclude: [
            '**/*.vizreg.spec.tsx',
            '**/playwright-report/**',
            '**/playwright/**',
            '**/test-results/**',
            '**/__snapshots__/**',
            '**/node_modules/**',
            '**/dist/**',
            '**/cypress/**',
            '**/.{idea,git,cache,output,temp}/**',
            '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        ],
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/VitestSetup.ts',
        alias: [
            {
                find: /^monaco-editor$/,
                replacement: 'monaco-editor/esm/vs/editor/editor.main.js',
            },
        ],
    },
});
