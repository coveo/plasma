import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import {defineConfig} from 'vite';
import basePath from './build/getBasePath';
import demoSnippets from './build/vite-plugin-demo-snippets';

// https://vitejs.dev/config/
export default defineConfig({
    base: basePath,
    plugins: [react(), demoSnippets()],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: [
            {find: /@examples\/(.*)/, replacement: path.resolve(import.meta.dirname, 'src/examples/$1')},
            {find: '@demo', replacement: path.resolve(import.meta.dirname, 'src/building-blocs/Demo.tsx')},
            {find: '@tabler/icons-react', replacement: '@tabler/icons-react/dist/esm/icons/index.mjs'},
        ],
    },
});
