module.exports = {
    env: {
        browser: true,
    },
    extends: [require.resolve('tsjs/eslint-config')],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.spec.{ts,tsx}'],
            env: {
                'jest/globals': true,
            },
            extends: 'plugin:jest/recommended',
        },
    ],
};
