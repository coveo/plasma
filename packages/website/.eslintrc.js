module.exports = {
    env: {
        browser: true,
    },
    extends: ['plasma'],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: ['build', '.eslintrc.js', 'next.config.js', 'next', 'node_modules', 'out', 'resources', '.turbo'],
    overrides: [
        {
            files: ['src/examples/**/*.tsx'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
};
