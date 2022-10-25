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
    ignorePatterns: ['build', '.eslintrc.js'],
    overrides: [
        {
            files: ['src/examples/**/*.tsx'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
};
