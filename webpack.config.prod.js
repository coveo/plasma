const path = require('path');
const webpack = require('webpack');
const isTravis = process.env.TRAVIS;

/**
 * Config file for the packaged library
 */
const config = {
    entry: './Index.ts',
    mode: 'production',
    optimization: {minimize: false},
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'react-vapor.js',
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
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
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
                test: /\.css$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                        },
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
    ],
    externals: {
        jquery: {root: '$', commonjs2: 'jquery', commonjs: 'jquery', amd: 'jquery'},
        react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
        'react-dom': {root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom', amd: 'react-dom'},
        'react-redux': {root: 'ReactRedux', commonjs2: 'react-redux', commonjs: 'react-redux', amd: 'react-redux'},
        redux: {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'},
        underscore: {root: '_', commonjs2: 'underscore', commonjs: 'underscore', amd: 'underscore'},
    },
};

module.exports = config;
