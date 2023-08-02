module.exports = {
    env: {
        node: true,
    },
    extends: ['plasma'],
    ignorePatterns: ['node_modules', 'lib', 'dist', '.turbo', 'tmp', '.eslintrc.js', 'gulpfile.js'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
};
