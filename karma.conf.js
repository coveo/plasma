'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.test.js');

module.exports = config => {
  config.set({
    frameworks: ['jasmine', 'source-map-support'],

    files: ['./karma.entry.ts'],

    preprocessors: {
      './karma.entry.ts': ['webpack']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha', 'coverage'],

    mochaReporter: {
      ignoreSkipped: true
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'json', subdir: '.', file: 'coverage.json'},
        {type: 'text-summary'}
      ]
    },

    port: 9876,
    colors: true,

    browsers: ['PhantomJS'],

    autoWatch: true,
    singleRun: true,

    browserNoActivityTimeout: 10000
  });
};
