'use strict';

const path = require('path');
const tslintConfig = require(path.join(__dirname, '/tslint'));
const webpack = require('webpack');

/***
 * Config file for the documentation project
 */
module.exports = {
  entry: './docs/Index.tsx',
  output: {
    path: path.join(__dirname, '/docs/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.png$/, loader: 'file-loader?mimetype=image/png'},
      {test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
      // provide jQuery=require('jquery') to use the same jquery instance
      // See http://reactkungfu.com/2015/10/integrating-jquery-chosen-with-webpack-using-imports-loader/ for more infos
      {test: require.resolve('chosen-js'), loader: 'imports-loader?jQuery=jquery'},
      {test: require.resolve('bootstrap/js/tooltip.js'), loader: 'imports-loader?jQuery=jquery'}
    ],
    preLoaders: [
      {test: /\.ts(x?)$/i, loader: 'tslint'}
    ]
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
