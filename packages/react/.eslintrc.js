module.exports = {
    env: {
        browser: true,
    },
    extends: ['plasma'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.spec.*'],
            env: {
                'jest/globals': true,
            },
            extends: ['plugin:jest/recommended', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
            rules: {
                'jest/expect-expect': ['warn', {assertFunctionNames: ['expect*', 'assert*']}],
                'testing-library/no-node-access': ['warn'],
            },
        },
    ],
};
