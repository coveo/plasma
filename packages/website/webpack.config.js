const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const isJenkins = !!process.env.JENKINS_HOME;

const reactDomAlias = isJenkins ? {} : {'react-dom': '@hot-loader/react-dom'};

/**
 * Config file for the documentation project
 */
const config = {
    entry: {
        loading: './src/styles/loading-screen.css',
        main: './src/Index.tsx',
    },
    mode: isJenkins ? 'production' : 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: 'assets/[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devtool: isJenkins ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'wasm'],
        alias: {
            '@coveord/plasma-react$': path.resolve(__dirname, '../react/dist/cjs/Entry.js'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            ...reactDomAlias,
        },
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.slim.min.js'),
                path.resolve(__dirname, '..', 'react', 'node_modules', 'chosen-js', 'chosen.jquery.min.js'),
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Plasma Design System',
            favicon: 'src/favicon.ico',
            chunks: ['loading', 'main'],
            template: 'src/index.html',
        }),
        new HtmlWebpackTagsPlugin({tags: ['jquery.slim.min.js', 'chosen.jquery.min.js'], append: true}),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca/),
        new MonacoWebpackPlugin({
            languages: ['javascript', 'typescript'],
        }),
    ],
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'swc-loader',
                options: {
                    jsc: {
                        target: 'es5',
                        loose: false,
                        externalHelpers: true,
                        keepClassNames: false,
                        parser: {
                            syntax: 'typescript',
                            dynamicImport: true,
                        },
                    },
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
                type: 'asset',
            },
            {
                test: /\.wasm$/,
                type: 'javascript/auto',
                loader: 'file-loader',
            },
        ],
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        chunkIds: 'deterministic',
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {name: 'Runtime'},
        minimize: !!isJenkins,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: !!isJenkins,
                },
            }),
        ],
    },
    devServer: {
        allowedHosts: 'all',
        compress: true,
        hot: true,
        open: true,
        client: {
            progress: false,
            overlay: {errors: true, warnings: false},
        },
    },
};

if (process.env.MEASURE) {
    const smp = new SpeedMeasurePlugin();

    module.exports = smp.wrap({
        ...config,
        plugins: config.plugins.concat(new BundleAnalyzerPlugin()),
    });
} else {
    module.exports = config;
}
