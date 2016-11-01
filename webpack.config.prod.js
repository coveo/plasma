'use strict';

const path = require('path');
const webpack = require('webpack');

const tslintConfig = require(path.join(__dirname, '/tslint'));
const isJenkins = !!process.env.JENKINS_HOME;

const TARGET = process.env.TARGET || null;

/***
 * Config file for the packaged library
 */
let config = {
  entry: './src/Index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'react-vapor.js',
    library: ['ReactVapor'],
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json']
  },
  module: {
    preLoaders: [
      {test: /\.ts(x?)$/, loader: 'tslint'}
    ],
    loaders: [
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.ts(x?)$/, loader: 'ts-loader'}
    ]
  },
  tslint: {
    configuration: tslintConfig,
    emitErrors: true,
    failOnHint: isJenkins,
    formattersDirectory: path.resolve(__dirname, 'node_modules/tslint-loader/formatters/')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  externals: {
    'jquery': '$',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'redux': 'Redux',
    'underscore': '_'
  }
};

if (TARGET === 'minify') {
  config.output.filename = 'react-vapor.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['$', 'React', 'ReactDOM', 'ReactRedux', 'Redux', '_']
    }
  }));
}

module.exports = config;
