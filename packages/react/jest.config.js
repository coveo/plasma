/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
    verbose: true,
    moduleNameMapper: {
        '\\.(scss|css)$': '<rootDir>/jest/identity-obj-proxy-esm.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
        '^@test-utils$': '<rootDir>/jest/utils.tsx',
    },
    setupFiles: ['<rootDir>/jest/setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest/entry.tsx'],
    testEnvironment: 'jsdom',
    reporters: ['default'],
    transform: {
        '^.+\\.(jsx?|tsx?)$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!@helpers/enzyme-redux)(.*)'],
    testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'scss'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
            isolatedModules: true,
        },
    },
};
