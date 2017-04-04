const path = require('path');
const webpack = require('webpack');

const tslintConfig = require('./tslint');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
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
            configuration: tslintConfig,
            emitErrors: true,
            failOnHint: false,
            formattersDirectory: path.resolve(__dirname, 'node_modules/tslint-loader/formatters/'),
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFileName: 'tsconfig.test.json',
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        enforce: 'post',
        test: /src\/(?:(?!Examples)(?!spec)(?!tests)(?!Utils).)*\..+$/i,
        exclude: /(node_modules)/,
        loader: 'istanbul-instrumenter-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
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
