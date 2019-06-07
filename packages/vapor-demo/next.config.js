const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = {
    assetPrefix: process.env.BASE_URL || '',
    env: {
        BASE_URL: process.env.BASE_URL || '',
    },
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
                test: /\.(svg|png|eot|woff|ttf)$/,
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
};
