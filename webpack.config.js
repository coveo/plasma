const path = require('path');
const webpack = require('webpack');
const isTravis = process.env.TRAVIS;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const externals = require('./webpack.externals');

const isDocs = !!process.env.DOCS;
let contextDependentConfig;
if (isDocs) {
    contextDependentConfig = {
        mode: 'development',
        entry: './docs/Index.tsx',
        output: {
            path: path.join(__dirname, '/docs/assets'),
            publicPath: '/assets/',
            filename: 'bundle.js',
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './docs',
        },
        plugins: [
            new webpack.DefinePlugin({
                WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
            }),
        ],
    };
} else {
    contextDependentConfig = {
        entry: './Index.ts',
        mode: 'production',
        optimization: {minimize: false},
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'react-vapor.js',
            library: ['ReactVapor'],
            libraryTarget: 'umd',
        },
        plugins: [
            new webpack.DefinePlugin({
                WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            // new BundleAnalyzerPlugin(), // Uncomment to analyze the bundle
        ],
    };
}

const config = {
    ...contextDependentConfig,
    externals,
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
                use: [
                    {
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
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
            {
                test: /\.png$/,
                loader: 'file-loader?mimetype=image/png',
            },
            {
                test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
};

module.exports = config;
