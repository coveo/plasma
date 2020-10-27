import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import scssVariable from 'rollup-plugin-sass-variables';
import typescript from 'rollup-plugin-typescript2';
import keysTransformer from 'ts-transformer-keys/transformer';

const isJenkins = !!process.env.JENKINS_HOME;

// necessary, otherwise tries to parse `new undefined()`
const globals = {
    'coveo-styleguide': 'VaporSVG',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'server',
    'react-redux': 'reactRedux',
    'underscore.string': 's',
    codemirror: 'CodeMirror',
    d3: 'd3',
    domain: 'domain$1',
    jquery: 'jQuery',
    react: 'React',
    redux: 'Redux',
    underscore: '_',
};

export default {
    input: 'src/Entry.ts',
    output: {
        file: isJenkins ? 'dist/react-vapor.min.js' : 'dist/react-vapor.js',
        format: 'umd',
        name: 'ReactVapor',
        sourcemap: true,
        globals,
    },
    external: Object.keys(globals),
    onwarn,
    plugins: [
        resolve({browser: true}),
        commonjs({
            namedExports: {
                'hogan.js': ['Template', 'compile'],
                'react-modal': ['setAppElement'],
                'react-dnd': ['DragDropContext', 'DropTarget', 'DragSource'],
            },
        }),
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
