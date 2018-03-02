const prodConfig = require('./webpack.config.prod');

prodConfig.output.filename = 'react-vapor.min.js';
prodConfig.optimization = {};
prodConfig.optimization.minimize = true;

module.exports = prodConfig;
