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
        server: {
            deps: {
                // Inline the Monaco packages so Vitest transforms them with consistent ESM/CJS interop.
                // Without this, `@monaco-editor/react`'s default import of `@monaco-editor/loader` resolves
                // to a wrapped module and `loader.init` is undefined at runtime.
                inline: [/@monaco-editor\//],
            },
        },
        alias: [
            {
                find: /^monaco-editor$/,
                replacement: 'monaco-editor/esm/vs/editor/editor.main.js',
            },
        ],
    },
});
