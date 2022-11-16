const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const {patchWebpackConfig} = require('next-global-css');
const withTM = require('next-transpile-modules')(['@coveo/atomic-react']);
const path = require('path');

const basePath = require('./build/getBasePath');

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
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            '@coveord/plasma-react': path.resolve(__dirname, '../react/dist/esm/Entry.js'),
        });
        config.module.rules.push({
            test: /\.example.tsx$/,
            loader: 'raw-loader',
        });
        config.module.rules.push({
            test: /\.demo.tsx$/,
            use: [options.defaultLoaders.babel, path.resolve(__dirname, 'build/demo-loader.js')],
        });
        config.experiments = {topLevelAwait: true};
        return config;
    },
});
