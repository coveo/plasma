module.exports = {
    verbose: true,
    moduleNameMapper: {
        '\\.(scss|css)$': '<rootDir>/.jest/identity-obj-proxy-esm.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    reporters: ['default'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'scss'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    globals: {
        'ts-jest': {
            // relative path to the ts-jest-keys-transformer.js file
            tsconfig: '<rootDir>/tsconfig.test.json',
            astTransformers: {
                before: ['<rootDir>/.jest/ts-jest-keys-transformer.js'],
            },
        },
    },
};
