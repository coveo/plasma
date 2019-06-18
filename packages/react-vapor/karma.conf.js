const webpackConfig = require('./webpack.config.test.js');

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'source-map-support'],

        files: ['./karma.entry.ts'],

        preprocessors: {
            './karma.entry.ts': ['webpack'],
        },

        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true,
        },

        reporters: ['nyan', 'coverage'],

        nyanReporter: {
            renderOnRunCompleteOnly: !!process.env.TRAVIS,
        },

        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type: 'json', subdir: '.', file: 'coverage.json'},
                {type: 'text-summary'},
            ],
        },

        client: {
            jasmine: {
                random: false,
            },
        },

        port: 9876,
        colors: true,

        browsers: ['ChromeHeadless'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox'],
            },
        },

        autoWatch: true,
        singleRun: true,

        browserNoActivityTimeout: 30000,
    });
};
