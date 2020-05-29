import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import scssVariable from 'rollup-plugin-sass-variables';
import typescript from 'rollup-plugin-typescript2';
import keysTransformer from 'ts-transformer-keys/transformer';

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
    ],
    plugins: [
        inject({
            jQuery: 'jquery', // chosen-js expects jQuery to be available as a global
        }),
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
                'react-dnd': ['DragDropContext', 'DropTarget', 'DragSource'],
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
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig.build.json',
        tsconfigOverride: {
            compilerOptions: {
                declaration: true,
                declarationDir: 'dist/definitions',
            },
        },
    });
}

function replacePlugin() {
    return replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.REACT_VAPOR_VERSION': JSON.stringify(require('./package.json').version),
    });
}
