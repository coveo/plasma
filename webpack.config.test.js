const path = require('path');
const webpack = require('webpack');
const isTravis = process.env.TRAVIS;

module.exports = {
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
                        configFile: './node_modules/tsjs/tslint.json',
                        tsConfigFile: './tsconfig.test.json',
                        emitErrors: true,
                        failOnHint: isTravis,
                    },
                },
            },
            {
                test: /\.ts(x?)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.test.json',
                        compiler: 'ttypescript',
                    },
                },
            },
            {
                enforce: 'post',
                test: /src\/(?:(?!Examples)(?!spec)(?!tests)(?!Utils).)*\.(?!css).+$/i,
                exclude: /(node_modules)/,
                loader: 'istanbul-instrumenter-loader',
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
