const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const isTravis = !!process.env.TRAVIS;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * Config file for the documentation project
 */
module.exports = {
    entry: {
        main: './src/Index.tsx',
    },
    mode: isTravis ? 'production' : 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        chunkFilename: 'assets/[name].bundle.js',
    },
    devtool: isTravis ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vapor Design System',
            favicon: 'src/favicon.ico',
            chunks: ['main'],
            template: 'src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca/),
        new ForkTsCheckerWebpackPlugin({
            tslint: '../../tslint.json',
            tslintAutoFix: true,
        }),
    ],
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            projectReferences: true,
                            transpileOnly: true,
                            experimentalWatchApi: true,
                            getCustomTransformers: (program) => ({
                                before: [keysTransformer(program)],
                            }),
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|svg|png|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        host: '0.0.0.0',
        useLocalIp: true,
        disableHostCheck: true,
        compress: true,
        hot: true,
        progress: false,
        open: true,
    },
};
