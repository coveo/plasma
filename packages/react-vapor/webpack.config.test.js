const path = require('path');
const webpack = require('webpack');
const isTravis = process.env.TRAVIS;
const skipCoverageProcessing = process.env.npm_lifecycle_script.indexOf('--browsers Chrome') !== -1;

module.exports = function(options) {
    const config = {
        mode: 'development',
        entry: './karma.entry.ts',
        devtool: 'inline-source-map',
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
                            configFile: '../../tslint.json',
                            tsConfigFile: './tsconfig.test.json',
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
                    include: [path.resolve(__dirname, 'node_modules/unidiff/hunk.js')],
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                configFile: 'tsconfig.test.json',
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.test.json',
                        compiler: 'ttypescript',
                    },
                },
                {
                    test: /\.css$/,
                    exclude: path.join(__dirname, 'src/components'),
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
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
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
                'process.env.NODE_ENV': JSON.stringify('test'),
            }),
            new webpack.ProvidePlugin({
                React: 'react',
                $: 'jquery',
                jQuery: 'jquery', // Required for chosen-js, otherwise, it won't work.
            }),
        ],
        externals: {
            cheerio: 'window',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
        },
    };

    if (!skipCoverageProcessing) {
        config.module.rules.push({
            enforce: 'post',
            test: /src\/(?:(?!Examples)(?!spec)(?!tests)(?!Utils).)*\.(?!scss).+$/i,
            exclude: /(node_modules)/,
            loader: 'istanbul-instrumenter-loader',
        });
    }

    return config;
};
