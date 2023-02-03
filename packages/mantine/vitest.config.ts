import path from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@test-utils',
                replacement: path.resolve(__dirname, './src/__tests__/Utils.tsx'),
            },
        ],
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/VitestSetup.ts',
        alias: [
            {
                find: /^monaco-editor$/,
                replacement: '/node_modules/monaco-editor/esm/vs/editor/editor.api',
            },
        ],
    },
});
