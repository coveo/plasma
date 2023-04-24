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
            ignorePatterns: ['*.vizreg.spec.*'],
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
