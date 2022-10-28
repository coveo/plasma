module.exports = {
    setupFiles: ['<rootDir>/src/__tests__/Setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/SetupAfterEnv.ts'],
    globalSetup: '<rootDir>/src/__tests__/GlobalSetup.ts',
    moduleNameMapper: {
        '^@test-utils$': '<rootDir>/src/__tests__/Utils.tsx',
        '^monaco-editor$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
