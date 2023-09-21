module.exports = {
    extends: ['plasma'],
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
    },
    ignorePatterns: ['.eslintrc.js', 'dist', 'node_modules'],
};
