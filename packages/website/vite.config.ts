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
    optimizeDeps: {
        exclude: ['@coveo/atomic-react'],
    },
    resolve: {
        alias: [
            {find: /@examples\/(.*)/, replacement: path.resolve(__dirname, 'src/examples/$1')},
            {find: '@demo', replacement: path.resolve(__dirname, 'src/building-blocs/Demo.tsx')},
            // {find: '@coveord/plasma-react-icons', replacement: path.resolve(__dirname, './node_modules/@coveord/plasma-react-icons/dist/esm/src/index.js')},
        ],
    },
});
