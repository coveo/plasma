module.exports = {
    env: {
        browser: true,
    },
    extends: [require.resolve('tsjs/eslint-config')],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.spec.{ts,tsx}'],
            env: {
                jasmine: true,
            },
            plugins: ['jasmine'],
            extends: 'plugin:jasmine/recommended',
            rules: {
                'jasmine/no-spec-dupes': ['warn', 'branch'],
                'jasmine/prefer-toHaveBeenCalledWith': 'off',
            },
        },
    ],
};
