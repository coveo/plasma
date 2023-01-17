module.exports = {
    extends: [require.resolve('tsjs/eslint-config')],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.cjs', 'dist', 'node_modules'],
};
