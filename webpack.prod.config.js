'use strict';

const path = require('path');
const webpack = require('webpack');

const tslintConfig = require(__dirname + '/tslint');
const isJenkins = !!process.env.JENKINS_HOME;
var TARGET = process.env.TARGET || null;

let config = {
  entry: './src/Index.ts',
  output: {
    publicPath: 'dist/',
    filename: 'dist/react-vapor.js',
    library: 'ReactVapor',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'}
    ],
    preLoaders: [
      {test: /\.ts(x?)$/, loader: 'tslint'}
    ]
  },
  tslint: {
    configuration: tslintConfig,
    emitErrors: true,
    failOnHint: isJenkins,
    formattersDirectory: path.resolve(__dirname, 'node_modules/tslint-loader/formatters/')
  },
  plugins: [],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'tether': 'Tether'
  }
};

if (TARGET === 'minify') {
  config.output.filename = 'dist/react-vapor.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactDOM', 'Tether']
    }
  }));
}

module.exports = config;
