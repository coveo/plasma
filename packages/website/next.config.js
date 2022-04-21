const withImages = require('next-images');
const basePath = require('./build/getBasePath');
const {patchWebpackConfig} = require('next-global-css');

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@coveo/atomic-react']);

module.exports = withPlugins([withTM, withImages], {
    basePath: basePath.replace(/\/$/, ''), // remove last slash
    env: {
        basePath,
    },
    images: {
        disableStaticImages: true,
    },
    webpack: (config, options) => {
        patchWebpackConfig(config, options);
        if (process.env.NODE_ENV === 'development') {
            config.watchOptions = {
                poll: 10000,
            };
        }
        config.module.rules.push({
            test: /\.example.tsx$/,
            loader: 'raw-loader',
        });
        return config;
    },
});
