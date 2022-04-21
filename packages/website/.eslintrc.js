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
            files: ['src/examples/**/*.tsx'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
};
