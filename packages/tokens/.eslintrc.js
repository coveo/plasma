module.exports = {
    extends: ['plasma'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
    },
    ignorePatterns: ['build', '.eslintrc.js', 'next.config.js', 'next', 'node_modules', 'out', 'resources', '.turbo'],
};
