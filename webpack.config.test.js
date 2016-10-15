'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json']
  },
  ts: {
    configFileName: 'tsconfig.test.json'
  },
  module: {
    preLoaders: [{
      test: /\.ts(x?)$/,
      loader: 'tslint'
    }],
    loaders: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader'
    }, {
      test: /\.json$/,
      loader: 'json'
    }],
    postLoaders: [{
      test: /src\/(?:(?!Test).)*\..+$/i,
      exclude: /(node_modules)/,
      loader: 'istanbul-instrumenter'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
