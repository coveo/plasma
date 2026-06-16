import {resolve} from 'path';
import {defineConfig} from 'vitest/config';
import plasmaIconsMockPlugin from '@coveord/plasma-react-icons/vite-plugin';

export default defineConfig({
    plugins: [plasmaIconsMockPlugin()],
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
        include: [`**/*.spec.{ts,tsx}`],
        exclude: ['dist', 'node_modules'],
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
