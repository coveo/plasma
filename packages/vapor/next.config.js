const path = require('path');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const reactSvg = require('next-react-svg');

module.exports = reactSvg({
    assetPrefix: process.env.BASE_URL || '',
    env: {
        BASE_URL: process.env.BASE_URL || '',
    },
    include: path.resolve(__dirname, 'resources/icons/svg'),
    webpack: (config, options) => {
        const {dev, isServer} = options;
        const {cssModules, cssLoaderOptions, postcssLoaderOptions} = config;

        options.defaultLoaders.sass = cssLoaderConfig(config, {
            extensions: ['scss', 'sass'],
            cssModules,
            cssLoaderOptions,
            postcssLoaderOptions,
            dev,
            isServer,
            loaders: [
                {
                    loader: 'resolve-url-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceMapContents: false,
                    },
                },
            ],
        });

        config.module.rules.push(
            {
                test: /\.scss$/,
                use: options.defaultLoaders.sass,
            },
            {
                test: /\.(png|eot|woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            }
        );

        return config;
    },
});
