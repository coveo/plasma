module.exports = {
    extends: [require.resolve('tsjs/eslint-config')],
    overrides: [
        {
            files: ['build/**/*.mjs'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
};
