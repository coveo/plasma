import {resolve} from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@test-utils',
                replacement: resolve(import.meta.dirname, './src/__tests__/Utils.tsx'),
            },
        ],
    },
    test: {
        dir: './src',
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
