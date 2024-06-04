module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [],
    extends: [
        'plasma',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '.turbo', 'src/examples/mantine/**', 'src/pages/mantine/**'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    },
    overrides: [
        {
            files: ['src/examples/**/*.tsx'],
            rules: {
                'no-console': 'off',
            },
        },
    ],
};
