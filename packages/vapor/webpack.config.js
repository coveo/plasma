const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        VaporSVG: './index.js',
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'js/[name].js',
        library: 'VaporSVG',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    plugins: [
        new webpack.DefinePlugin({
            WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/CoveoStyleGuide.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./css/admin/main.css the publicPath will be ../../
                                // while for ./css/main.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'v2-postcss',
                            plugins: () => [
                                require('autoprefixer')(),
                                require('cssnano')({zindex: false, preset: ['default', {mergeLonghand: false}]}),
                            ],
                        },
                    },
                    {loader: 'resolve-url-loader'},
                    {loader: 'sass-loader', options: {sourceMap: true, sourceMapContents: false}},
                ],
            },
            {
                test: /\.(ttf|eot|woff|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
};
