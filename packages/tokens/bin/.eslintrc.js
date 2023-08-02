module.exports = {
    extends: ['plasma'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
    },
};
