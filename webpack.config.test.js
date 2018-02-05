const path = require('path');
const webpack = require('webpack');

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
            configFile: './node_modules/tsjs/tslint.json',
            tsConfigFile: './tsconfig.json',
            emitErrors: true,
            failOnHint: false,
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.test.json',
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
