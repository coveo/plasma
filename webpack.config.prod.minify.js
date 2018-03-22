const prodConfig = require('./webpack.config.prod');

prodConfig.output.filename = 'react-vapor.min.js';
prodConfig.optimization = {minimize: true};

module.exports = prodConfig;
