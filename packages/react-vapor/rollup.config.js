import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import path from 'path';
import externalGlobals from 'rollup-plugin-external-globals';
import postcss from 'rollup-plugin-postcss';
import scssVariable from 'rollup-plugin-sass-variables';
import {terser} from 'rollup-plugin-terser';

const isJenkins = !!process.env.JENKINS_HOME;

export default {
    input: 'dist/Entry.js',
    output: [
        {
            file: 'dist/bundles/react-vapor.esm.js',
            format: 'es',
            sourcemap: true,
        },
        {
            file: 'dist/bundles/react-vapor.js',
            format: 'umd',
            sourcemap: true,
            name: 'ReactVapor',
            globals: {
                codemirror: 'CodeMirror',
                d3: 'd3',
                jquery: '$',
                react: 'React',
                'react-dom': 'ReactDOM',
                'react-redux': 'ReactRedux',
                redux: 'Redux',
                underscore: '_',
                'coveo-styleguide': 'VaporSVG',
                'underscore.string': 's',
                'react-dom/server': 'ReactDOMServer',
            },
            plugins: [
                externalGlobals({
                    codemirror: 'CodeMirror',
                    d3: 'd3',
                    jquery: '$',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-redux': 'ReactRedux',
                    redux: 'Redux',
                    underscore: '_',
                    'coveo-styleguide': 'VaporSVG',
                    'underscore.string': 's',
                    'react-dom/server': 'ReactDOMServer',
                }),
            ],
        },
        isJenkins && {
            file: 'dist/bundles/react-vapor.min.js',
            format: 'umd',
            sourcemap: true,
            name: 'ReactVapor',
            globals: {
                codemirror: 'CodeMirror',
                d3: 'd3',
                jquery: '$',
                react: 'React',
                'react-dom': 'ReactDOM',
                'react-redux': 'ReactRedux',
                redux: 'Redux',
                underscore: '_',
                'coveo-styleguide': 'VaporSVG',
                'underscore.string': 's',
                'react-dom/server': 'ReactDOMServer',
            },
            plugins: [
                terser(),
                externalGlobals({
                    codemirror: 'CodeMirror',
                    d3: 'd3',
                    jquery: '$',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-redux': 'ReactRedux',
                    redux: 'Redux',
                    underscore: '_',
                    'coveo-styleguide': 'VaporSVG',
                    'underscore.string': 's',
                    'react-dom/server': 'ReactDOMServer',
                }),
            ],
        },
    ].filter(Boolean),
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
    onwarn,
    plugins: [
        alias({entries: [{find: 'indexof', replacement: 'component-indexof'}]}),
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
        resolve({
            browser: true,
        }),
        commonjs({
            namedExports: {
                'hogan.js': ['Template', 'compile'],
                'react-modal': ['setAppElement'],
                'react-dnd': ['DragDropContext', 'DropTarget', 'DragSource'],
                'diff/dist/diff.js': ['diffChars', 'diffWordsWithSpace'],
            },
        }),
    ],
};

function replacePlugin() {
    return replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
    });
}

function onwarn(warning, rollupWarn) {
    const ignoredWarnings = [
        {
            ignoredCode: 'CIRCULAR_DEPENDENCY',
            ignoredPath: 'node_modules',
        },
    ];

    // only show warning when code and path don't match
    // anything in above list of ignored warnings
    if (
        !ignoredWarnings.some(
            ({ignoredCode, ignoredPath}) =>
                warning.code === ignoredCode && warning.importer.includes(path.normalize(ignoredPath))
        )
    ) {
        rollupWarn(warning);
    }
}
