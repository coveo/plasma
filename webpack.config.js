'use strict';

const path = require('path');
const tslintConfig = require(path.join(__dirname, '/tslint'));
const autoprefixer = require('autoprefixer');

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
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.png$/, loader: 'file-loader?mimetype=image/png'},
      {test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
    ],
    preLoaders: [
      {test: /\.ts(x?)$/i, loader: 'tslint'}
    ]
  },
  postcss: [
    autoprefixer({
      browsers: [
        'last 3 Chrome versions',
        'last 3 Firefox versions',
        'Explorer >= 11',
        'last 2 Edge versions',
        'last 3 Opera versions',
        'Safari >= 8'
      ]
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.json']
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
