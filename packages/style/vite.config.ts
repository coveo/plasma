import {resolve} from 'path';
import {defineConfig} from 'vite';

import packageJSON from './package.json';
export default defineConfig({
    publicDir: 'resources',
    build: {
        lib: {
            entry: resolve(__dirname, 'index.js'),
            name: 'PlasmaStyle',
            fileName: 'PlasmaStyle',
        },
        rollupOptions: {
            external: ['jquery', 'underscore', 'underscore.string'],
            output: {
                globals: {
                    jquery: '$',
                    underscore: '_',
                    'underscore.string': 's',
                },
            },
        },
    },
    resolve: {
        alias: [
            // remove ~ from imports in scss
            {find: /^~(.+)/, replacement: '$1'},
        ],
    },
    define: {
        WEBPACK_DEFINED_VERSION: JSON.stringify(packageJSON.version),
    },
});
