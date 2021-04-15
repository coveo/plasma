const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isJenkins = !!process.env.JENKINS_HOME;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        alias: {
            'react-vapor': path.resolve(__dirname, '../react-vapor/src/Entry.ts'),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.slim.min.js'),
                path.resolve(
                    __dirname,
                    'node_modules',
                    'react-vapor',
                    'node_modules',
                    'chosen-js',
                    'chosen.jquery.min.js'
                ),
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Vapor Design System',
            favicon: 'src/favicon.ico',
            chunks: ['main'],
            template: 'src/index.html',
        }),
        new HtmlWebpackTagsPlugin({tags: ['jquery.slim.min.js', 'chosen.jquery.min.js'], append: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca/),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configOverwrite: {
                    include: ['src', './types/**/*.d.ts', './node_modules/@types/**/*.d.ts'],
                },
            },
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
                            transpileOnly: true,
                            projectReferences: true,
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
