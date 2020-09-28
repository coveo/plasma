module.exports = {
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/setupTests/assetsTransformer.js',
        '\\.(scss|css)$': '<rootDir>/setupTests/assetsTransformer.js',
    },
    setupFilesAfterEnv: ['./setupTests.js'],
    reporters: ['default'],
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    preset: 'jest-puppeteer',
    globals: {
        'ts-jest': {
            // relative path to the ts-jest-keys-transformer.js file
            astTransformers: ['<rootDir>/setupTests/ts-jest-keys-transformer.js'],
        },
        _: 'underscore',
    },
    testEnvironment: 'jest-environment-jsdom-fourteen',
};

// start
// Test Suites: 230 failed, 136 passed, 366 total
// Tests:       606 failed, 1220 passed, 1826 total

// import * moment from 'moment'
// Test Suites: 202 failed, 164 passed, 366 total
// Tests:       1153 failed, 1664 passed, 2817 total

// using unmount instead of detach
// Test Suites: 150 failed, 216 passed, 366 total
// Tests:       383 failed, 2473 passed, 2856 total

// using wrapper.setProps({ /*...*/ } as any)
// Test Suites: 146 failed, 220 passed, 366 total
// Tests:       402 failed, 2554 passed, 2956 total

// import * as React from 'react
// Test Suites: 130 failed, 236 passed, 366 total
// Tests:       447 failed, 2575 passed, 3022 total

// refined using unmount instead of detach
// Test Suites: 132 failed, 234 passed, 366 total
// Tests:       556 failed, 2804 passed, 3360 total

// added blank tests to .spec files with no tests
// Test Suites: 115 failed, 251 passed, 366 total
// Tests:       556 failed, 2870 passed, 3426 total

// added global.document.createRange
// Test Suites: 114 failed, 252 passed, 366 total
// Tests:       544 failed, 2885 passed, 3429 total

// import * as ReactDOM from 'react-dom'
// Test Suites: 113 failed, 253 passed, 366 total
// Tests:       460 failed, 2969 passed, 3429 total

// import * as escapeStringRegexp from 'escape-string-regexp';
// Test Suites: 111 failed, 255 passed, 366 total
// Tests:       446 failed, 2983 passed, 3429 total

// added more import * as moment from 'moment' that I missed
// Test Suites: 108 failed, 258 passed, 366 total
// Tests:       449 failed, 3003 passed, 3452 total

// updated TableHeaderCell beforeEach()
// Test Suites: 108 failed, 258 passed, 366 total
// Tests:       435 failed, 3017 passed, 3452 total

// updated TableCollapsibleRow beforeEach()
// Test Suites: 107 failed, 259 passed, 366 total
// Tests:       427 failed, 3025 passed, 3452 total

// Added before and after hooks to Loading.spec.tsx
// Test Suites: 104 failed, 262 passed, 366 total
// Tests:       418 failed, 3034 passed, 3452 total

// Refactored DOM setup function to createTestAppContainer();
// Test Suites: 103 failed, 263 passed, 366 total
// Tests:       408 failed, 3044 passed, 3452 total

// Added global._ = underscore
// Test Suites: 102 failed, 264 passed, 366 total
// Tests:       395 failed, 3057 passed, 3452 total

// added more import * as escapeStringRegexp from 'escape-string-regexp';
// Test Suites: 100 failed, 266 passed, 366 total
// Tests:       369 failed, 3083 passed, 3452 total

// replaced jasmine.clock().install() with jest.useFakeTimers()
// Test Suites: 100 failed, 266 passed, 366 total
// Tests:       364 failed, 3088 passed, 3452 total

// added more beforeEach(() => createTestAppContainer())
// Test Suites: 100 failed, 266 passed, 366 total
// Tests:       351 failed, 3092 passed, 3443 total

// USED MIGRATION TOOL - WHY, GOD, WHY?!?!?
// Test Suites: 223 failed, 143 passed, 366 total
// Tests:       48 failed, 1134 passed, 1182 total

// replacing Jasmine types - 1
// Test Suites: 213 failed, 153 passed, 366 total
// Tests:       48 failed, 1228 passed, 1276 total

// replacing Jasmine types - 2
// Test Suites: 195 failed, 171 passed, 366 total
// Tests:       58 failed, 1416 passed, 1474 total

// replacing Jasmine types - 3
// Test Suites: 161 failed, 205 passed, 366 total
// Tests:       158 failed, 2011 passed, 2169 total

// replacing Jasmine types - 4
// Test Suites: 136 failed, 230 passed, 366 total
// Tests:       215 failed, 2403 passed, 2618 total

// replacing Jasmine types - 5
// Test Suites: 114 failed, 252 passed, 366 total
// Tests:       359 failed, 2866 passed, 3225 total

// replacing Jasmine types - 6
// Test Suites: 113 failed, 253 passed, 366 total
// Tests:       364 failed, 2901 passed, 3265 total

// replacing Jasmine types - 7
// Test Suites: 112 failed, 254 passed, 366 total
// Tests:       368 failed, 2975 passed, 3343 total

// replacing Jasmine types - 8
// Test Suites: 112 failed, 254 passed, 366 total
// Tests:       375 failed, 3002 passed, 3377 total

// replacing Jasmine types - 9
// Test Suites: 109 failed, 257 passed, 366 total
// Tests:       386 failed, 3046 passed, 3432 total
