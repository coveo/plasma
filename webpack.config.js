'use strict';

const path = require('path');
const tslintConfig = require(__dirname + '/tslint');

/***
 * Config file for the documentation project
 */
module.exports = {
  entry: './docs/Index.tsx',
  output: {
    path: __dirname + '/docs/assets',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      {test: /\.scss$/, loaders: ['style', 'sass']},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.png$/, loader: 'file-loader?mimetype=image/png'},
      {test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
    ],
    preLoaders: [
      {test: /\.ts(x?)$/i, loader: 'tslint'}
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  tslint: {
    configuration: tslintConfig,
    emitErrors: true,
    failOnHint: false,
    formattersDirectory: path.resolve(__dirname, 'node_modules/tslint-loader/formatters/')
  },
  devServer: {
    contentBase: './docs'
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  }
};
