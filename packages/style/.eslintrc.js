module.exports = {
    env: {
        node: true,
    },
    extends: [require.resolve('tsjs/eslint-config')],
    ignorePatterns: ['node_modules', 'lib', 'dist', '.turbo', 'tmp', '.eslintrc.js', 'gulpfile.js'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
};
