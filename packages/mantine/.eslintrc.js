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
    ignorePatterns: ['.eslintrc.js', 'node_modules', 'dist', '.turbo', 'vitest.config.ts'],
    rules: {
        'no-underscore-dangle': 'off',
    },
    plugins: ['vitest'],
    overrides: [
        {
            files: ['**/*.spec.*'],
            env: {
                'vitest/globals': true,
            },
            extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
            rules: {
                'vitest/expect-expect': ['warn', {assertFunctionNames: ['expect*', 'assert*']}],
            },
        },
    ],
};
