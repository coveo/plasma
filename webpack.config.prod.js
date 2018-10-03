const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isTravis = process.env.TRAVIS;

/**
 * Config file for the packaged library
 */
const config = {
    entry: {
        'react-vapor': ['./Index.ts'],
        'react-vapor.dependencies': ['jquery', 'underscore', 'react', 'react-dom', 'react-redux', 'redux', 'codemirror'],
    },
    mode: 'production',
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
                        configFile: './node_modules/tsjs/tslint.json',
                        tsConfigFile: './tsconfig.json',
                        emitErrors: true,
                        failOnHint: isTravis,
                    },
                },
            },
            {
                /**
                 *  Transform let and const to var in js files below to make them ES5 compatible
                 *  Target only problematic files to prevent compilation from hanging
                 */
                include: [
                    path.resolve(__dirname, 'node_modules/unidiff/hunk.js'),
                ],
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    compiler: 'ttypescript',
                },
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src/components'),
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
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
        jquery: {root: '$', commonjs2: 'jquery', commonjs: 'jquery', amd: 'jquery'},
        react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
        'react-dom': {root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom', amd: 'react-dom'},
        'react-redux': {root: 'ReactRedux', commonjs2: 'react-redux', commonjs: 'react-redux', amd: 'react-redux'},
        redux: {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'},
        underscore: {root: '_', commonjs2: 'underscore', commonjs: 'underscore', amd: 'underscore'},
    },
};

module.exports = config;
