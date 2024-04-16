module.exports = {
    extends: ['plasma'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'no-console': 'off',
    },
};
