const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isJenkins = !!process.env.JENKINS_HOME;
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
        filename: '[name].[chunkhash].js',
        chunkFilename: 'assets/[name].[chunkhash].js',
    },
    devtool: isJenkins ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@demo-styling': path.resolve(__dirname, 'src/demo-styling'),
            '@routes': path.resolve(__dirname, 'src/plasma/routes'),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.slim.min.js'),
                path.resolve(__dirname, '..', 'react-vapor', 'node_modules', 'chosen-js', 'chosen.jquery.min.js'),
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Vapor Design System',
            favicon: 'src/favicon.ico',
            chunks: ['main'],
            template: 'src/index.html',
        }),
        new HtmlWebpackTagsPlugin({tags: ['jquery.slim.min.js', 'chosen.jquery.min.js'], append: true}),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca/),
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
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
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
        static: {
            directory: path.join(__dirname, 'src'),
        },
        client: {
            progress: true,
        },
        host: 'local-ip',
        compress: true,
        hot: true,
        open: true,
        allowedHosts: 'all',
    },
};
