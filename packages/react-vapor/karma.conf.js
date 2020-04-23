const webpackConfig = require('./webpack.config.test.js')();
const skipCoverageProcessing = process.env.npm_lifecycle_script.indexOf('--browsers Chrome') !== -1;

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

        webpackServer: {
            noInfo: true,
        },

        reporters: ['mocha'],

        client: {
            jasmine: {
                random: false,
            },
        },

        port: 9876,
        colors: true,

        browsers: ['ChromeHeadless'],

        autoWatch: false,
        autoWatchBatchDelay: 5000,
        singleRun: true,

        browserNoActivityTimeout: 500000,
        browserDisconnectTolerance: 5,
        browserConsoleLogOptions: {level: 'log', terminal: false},
    };

    if (!skipCoverageProcessing) {
        configuration.reporters = ['mocha', 'coverage-istanbul'];

        configuration.coverageIstanbulReporter = {
            reports: ['lcov', 'text-summary'],
            fixWebpackSourcePaths: true,
        };
        configuration.browserConsoleLogOptions = {level: 'log', terminal: true};
        configuration.mochaReporter = {
            ignoreSkipped: true,
        };
    }

    config.set(configuration);
};
