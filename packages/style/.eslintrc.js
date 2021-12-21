module.exports = {
    env: {
        node: true,
    },
    extends: [require.resolve('tsjs/eslint-config')],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
};
