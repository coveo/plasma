const withImages = require('next-images');
const basePath = require('./build/getBasePath');
const {patchWebpackConfig} = require('next-global-css');

const withTM = require('next-transpile-modules')(['@coveo/atomic-react']);

module.exports = withTM(
    withImages({
        basePath: basePath.replace(/\/$/, ''), // remove last slash
        env: {
            basePath,
        },
        images: {
            disableStaticImages: true,
        },
        webpack: (config, options) => {
            patchWebpackConfig(config, options);
            return config;
        },
    })
);
