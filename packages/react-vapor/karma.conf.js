const webpackConfig = require('./webpack.config.test.js')();
const skipCoverageProcessing = process.env.npm_lifecycle_script.indexOf('--browsers Chrome') !== -1;
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
    const configuration = {
        frameworks: ['jasmine', 'source-map-support'],

        files: ['./karma.entry.ts'],

        preprocessors: {
            './karma.entry.ts': ['webpack'],
        },

        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },

        webpack: webpackConfig,

        reporters: ['mocha'],

        mochaReporter: {
            ignoreSkipped: true,
        },

        client: {
            jasmine: {
                random: false,
            },
        },

        port: 9876,
        colors: true,

        browserNoActivityTimeout: 60000,
        browsers: ['ChromeHeadless'],

        autoWatch: false,
        singleRun: true,
    };

    if (!skipCoverageProcessing) {
        configuration.reporters = ['mocha', 'coverage-istanbul'];

        configuration.coverageIstanbulReporter = {
            reports: ['lcov', 'text-summary'],
            fixWebpackSourcePaths: true,
        };
        configuration.browserConsoleLogOptions = {level: 'log', terminal: true};
    }

    config.set(configuration);
};
