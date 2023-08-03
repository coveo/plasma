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
    ignorePatterns: ['.eslintrc.js', 'node_modules', 'dist', '.turbo', 'vitest.config.ts'],
    rules: {
        'no-underscore-dangle': 'off',
    },
    plugins: ['vitest'],
    overrides: [
        {
            files: ['**/*.spec.*'],
            env: {
                'vitest-globals/env': true,
            },
            extends: [
                'plugin:vitest-globals/recommended',
                'plugin:testing-library/react',
                'plugin:jest-dom/recommended',
            ],
            rules: {
                'vitest/expect-expect': ['warn'],
            },
        },
    ],
};
