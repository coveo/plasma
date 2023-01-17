module.exports = {
    env: {
        browser: true,
    },
    extends: [require.resolve('tsjs/eslint-config')],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.cjs', 'node_modules', 'dist', '.turbo', 'jest.config.cjs'],
    rules: {
        'no-underscore-dangle': 'off',
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
            },
        },
    ],
};
