const prodConfig = require('./webpack.config.prod');

prodConfig.output.filename = '[name].min.js';
prodConfig.optimization = {minimize: true};

module.exports = prodConfig;
