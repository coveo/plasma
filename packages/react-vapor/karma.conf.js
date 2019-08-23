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

        reporters: ['nyan'],

        nyanReporter: {
            renderOnRunCompleteOnly: !!process.env.TRAVIS,
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
    };

    if (!skipCoverageProcessing) {
        configuration.reporters.push('coverage');
        configuration.coverageReporter = {
            dir: 'coverage',
            reporters: [{type: 'json', subdir: '.', file: 'coverage.json'}, {type: 'text-summary'}],
        };
    }

    config.set(configuration);
};
