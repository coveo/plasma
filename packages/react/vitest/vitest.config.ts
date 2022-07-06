import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';
import path from 'path';

export default defineConfig({
    alias: {
        '@test-utils': path.resolve(__dirname, './utils.tsx'),
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [
            path.resolve(__dirname, './setupFiles/load-jquery.ts'),
            path.resolve(__dirname, './setupFiles/load-testing-library.ts'),
            path.resolve(__dirname, './setupFiles/configure-enzyme.ts'),
            path.resolve(__dirname, './setupFiles/initialize-dom.ts'),
        ],
        restoreMocks: true,
    },
    plugins: [react()],
});
