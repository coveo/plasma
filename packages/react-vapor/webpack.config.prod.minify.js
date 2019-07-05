const prodConfig = require('./webpack.config.prod');

prodConfig.output.filename = '[name].min.js';
prodConfig.mode = 'production';
prodConfig.devtool = false;

module.exports = prodConfig;
