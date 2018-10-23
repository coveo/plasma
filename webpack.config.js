const webpack = require('webpack');
const path = require('path');
const isTravis = !!process.env.TRAVIS;

/**
 * Config file for the documentation project
 */
module.exports = {
    entry: './docs/Index.tsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/docs/assets'),
        publicPath: '/assets/',
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
        }),
    ],
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
                        emitErrors: isTravis,
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
                use: [{loader: 'awesome-typescript-loader'}],
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true,
                    cacheDirectory: '.awcache',
                    compiler: 'ttypescript',
                },
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
            {
                test: /\.scss$/,
                exclude: path.join(__dirname, 'src/components'),
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
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
                test: /\.png$/,
                loader: 'file-loader?mimetype=image/png',
            },
            {
                test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },

            // Provide jQuery=require('jquery') to use the same jquery instance.
            // See http://reactkungfu.com/2015/10/integrating-jquery-chosen-with-webpack-using-imports-loader/ for more infos.
            {
                test: require.resolve('chosen-js'),
                loader: 'imports-loader?jQuery=jquery',
            },
        ],
    },
    devServer: {
        contentBase: './docs',
        host: '0.0.0.0',
        disableHostCheck: true,
    },
};
