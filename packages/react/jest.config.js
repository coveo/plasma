module.exports = {
    verbose: true,
    moduleNameMapper: {
        '\\.(scss|css|svg)$': '<rootDir>/jest/identity-obj-proxy-esm.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
        '^@test-utils$': '<rootDir>/jest/utils.tsx',
        '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js',
    },
    setupFiles: ['<rootDir>/jest/setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest/entry.tsx'],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testEnvironment: 'jsdom',
    reporters: ['default'],
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    target: 'es2021',
                    keepClassNames: true,
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                        decorators: true,
                        dynamicImport: true,
                    },
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
    moduleFileExtensions: ['ts', 'tsx', 'js', 'scss'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(react-dnd|dnd-core|react-dnd-html5-backend)/)'],
};
