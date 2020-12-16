const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const isJenkins = !!process.env.JENKINS_HOME;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * Config file for the documentation project
 */
module.exports = {
    entry: {
        main: './src/Index.tsx',
    },
    mode: isJenkins ? 'production' : 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[hash].js',
        chunkFilename: 'assets/[name].[hash].js',
    },
    devtool: isJenkins ? 'source-map' : 'eval-source-map',
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
            eslint: {
                files: './src/**/*.{ts,tsx}',
                options: {
                    fix: true,
                },
            },
        }),
    ],
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
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
