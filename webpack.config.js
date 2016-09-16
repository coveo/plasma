const path = require('path');
const tslintConfig = require(__dirname + '/tslint');

module.exports = {
  entry: './docs/Index.tsx',
  output: {
    filename: './docs/bundle.js',
  },
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]}
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
