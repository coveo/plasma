const withImages = require('next-images');
const {patchWebpackConfig} = require('next-global-css');
const path = require('path');

const basePath = require('./build/getBasePath');

const plugins = [withImages];

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: basePath.replace(/\/$/, ''), // remove last slash
    swcMinify: false,
    env: {
        basePath,
    },
    images: {
        disableStaticImages: true,
    },
    webpack: (config, options) => {
        patchWebpackConfig(config, options);
        config.module.rules.push({
            test: /\.demo.tsx$/,
            use: [options.defaultLoaders.babel, path.resolve(__dirname, 'build/demo-loader.js')],
        });
        config.experiments = {topLevelAwait: true};
        return config;
    },
};

module.exports = () => plugins.reduce((memo, plugin) => plugin(memo), nextConfig);
