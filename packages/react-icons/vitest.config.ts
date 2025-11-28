import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./__tests__/Setup.ts'],
        globals: true,
    },
});
