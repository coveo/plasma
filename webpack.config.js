const path = require('path');
const tslintConfig = require(__dirname + '/tslint');

const isJenkins = !!process.env.JENKINS_HOME;

module.exports = {
  entry: __dirname + '/src/Index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-vapor.js',
    library: 'ReactVapor',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'}
    ],
    preLoaders: [
      {test: /\.ts(x?)$/i, loader: 'tslint'}
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  tslint: {
    configuration: tslintConfig,
    emitErrors: true,
    failOnHint: isJenkins,
    formattersDirectory: path.resolve(__dirname, 'node_modules/tslint-loader/formatters/')
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  }
};
