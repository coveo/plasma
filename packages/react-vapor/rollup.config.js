import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import path from 'path';
import externalGlobals from 'rollup-plugin-external-globals';
import postcss from 'rollup-plugin-postcss';
import scssVariable from 'rollup-plugin-sass-variables';
import {terser} from 'rollup-plugin-terser';

const isJenkins = !!process.env.JENKINS_HOME;

const globals = {
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
};

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
            globals,
        },
        isJenkins && {
            file: 'dist/bundles/react-vapor.min.js',
            format: 'umd',
            sourcemap: true,
            name: 'ReactVapor',
            globals,
            plugins: [terser()],
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
        externalGlobals(globals),
        alias({entries: [{find: 'indexof', replacement: 'component-indexof'}]}),
        inject({
            jQuery: 'jquery', // chosen-js expects jQuery to be available as a global
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        postcss({
            extract: false,
            modules: {localIdentName: '[name]-[local]-[hash:base64]'},
            namedExports: true,
            use: ['sass'],
        }),
        scssVariable(),
        nodeResolve({
            browser: true,
        }),
        commonjs(),
    ],
};

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
