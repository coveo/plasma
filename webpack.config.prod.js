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
      {test: /\.ts(x?)$/, loader: 'ts-loader', exclude: ['**/*Examples*', '**/*spec.*']}
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
    'jquery': {root: '$', commonjs2: 'jquery', commonjs: 'jquery', amd: 'jquery'},
    'react': {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
    'react-dom': {root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom', amd: 'react-dom'},
    'react-redux': {root: 'ReactRedux', commonjs2: 'react-redux', commonjs: 'react-redux', amd: 'react-redux'},
    'redux': {root: 'Redux', commonjs2: 'redux', commonjs: 'redux', amd: 'redux'},
    'underscore': {root: '_', commonjs2: 'underscore', commonjs: 'underscore', amd: 'underscore'}
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
