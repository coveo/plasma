import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import keysTransformer from 'ts-transformer-keys/transformer';
import scssVariable from 'rollup-plugin-sass-variables';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/Entry.ts',
    output: {
        file: 'dist/react-vapor.esm.js',
        format: 'es',
    },
    external: [
        'codemirror',
        'd3',
        'jquery',
        'react',
        'react-dom',
        'react-dom/server',
        'react-redux',
        'redux',
        'underscore',
        'coveo-styleguide',
        'underscore.string',
        'react-dnd',
    ],
    plugins: [
        replacePlugin(),
        postcss({
            extract: false,
            modules: {localIdentName: '[name]-[local]-[hash:base64]'},
            namedExports: true,
            use: ['sass'],
        }),
        scssVariable(),
        resolve(),
        commonjs({
            namedExports: {
                'hogan.js': ['Template', 'compile'],
                'react-modal': ['setAppElement'],
            },
        }),
        tsPlugin(),
    ],
};

function tsPlugin() {
    return typescript({
        transformers: [
            (service) => ({
                before: [keysTransformer(service.getProgram())],
                after: [],
            }),
        ],
    });
}

function replacePlugin() {
    return replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.REACT_VAPOR_VERSION': JSON.stringify(require('./package.json').version),
    });
}
