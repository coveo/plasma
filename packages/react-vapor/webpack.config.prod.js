const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isTravis = process.env.TRAVIS;

/**
 * Config file for the packaged library
 */
const config = {
    entry: {
        'react-vapor': ['./src/Entry.ts'],
        'react-vapor.dependencies': [
            'jquery',
            'underscore',
            'underscore.string',
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'codemirror',
            'd3',
        ],
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        library: ['ReactVapor'],
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts(x?)$/i,
                exclude: [/node_modules/],
                use: {
                    loader: 'tslint-loader',
                    options: {
                        configFile: '../../tslint.json',
                        tsConfigFile: './tsconfig.build.json',
                        emitErrors: true,
                        failOnHint: isTravis,
                    },
                },
            },
            {
                /**
                 *  Transform IE11 non-supported code to ES5 via webpack/typescript
                 *  Target only problematic files to prevent compilation from hanging
                 */
                include: [
                    path.resolve(__dirname, 'node_modules/unidiff/hunk.js'),
                    path.resolve(__dirname, 'node_modules/query-string/index.js'),
                    path.resolve(__dirname, 'node_modules/strict-uri-encode/index.js'),
                    path.resolve(__dirname, 'node_modules/split-on-first/index.js'),
                ],
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    compiler: 'ttypescript',
                    configFileName: 'tsconfig.build.json',
                },
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src/components'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            scss: true,
                            namedExport: true,
                            localIdentName: '[name]-[local]-[hash:base64]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            // Provide jQuery=require('jquery') to use the same jquery instance.
            // See http://reactkungfu.com/2015/10/integrating-jquery-chosen-with-webpack-using-imports-loader/ for more infos.
            {
                test: require.resolve('chosen-js'),
                loader: 'imports-loader?jQuery=jquery',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        // new BundleAnalyzerPlugin(),
    ],
    externals: {
        codemirror: {root: 'CodeMirror', commonjs2: 'codemirror', commonjs: 'codemirror', amd: 'codemirror'},
        d3: {root: 'd3', commonjs2: 'd3', commonjs: 'd3', amd: 'd3'},
        jquery: {root: '$', commonjs2: 'jquery', commonjs: 'jquery', amd: 'jquery'},
        react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
        'react-dom': {root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom', amd: 'react-dom'},
        'react-redux': {root: 'ReactRedux', commonjs2: 'react-redux', commonjs: 'react-redux', amd: 'react-redux'},
        redux: {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'},
        underscore: {root: '_', commonjs2: 'underscore', commonjs: 'underscore', amd: 'underscore'},
        'coveo-styleguide': {
            root: 'VaporSVG',
            commonjs2: 'coveo-styleguide',
            commonjs: 'coveo-styleguide',
            amd: 'coveo-styleguide',
        },
        'underscore.string': {
            root: 's',
            commonjs2: 'underscore.string',
            commonjs: 'underscore.string',
            amd: 'underscore.string',
        },
    },
};

module.exports = config;
