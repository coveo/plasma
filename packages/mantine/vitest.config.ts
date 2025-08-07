import {resolve} from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        mainFields: ['main', 'module'], // this is needed for Vitest to be able to load the monaco-editor package correctly
        alias: [
            {
                find: '@test-utils',
                replacement: resolve(import.meta.dirname, './src/__tests__/Utils.tsx'),
            },
        ],
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/VitestSetup.ts',
    },
});
