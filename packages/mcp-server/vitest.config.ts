import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        dir: './src',
        include: ['**/*.spec.ts'],
        exclude: ['dist', 'node_modules'],
        clearMocks: false,
        globals: true,
        environment: 'node',
    },
});
