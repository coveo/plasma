/* eslint-env node */
module.exports = {
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'jsdoc', 'react', 'prefer-arrow', 'react-hooks', 'unused-imports'],
    extends: ['plugin:react/jsx-runtime', 'prettier'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/ban-types': [
            'warn',
            {
                types: {
                    Object: {
                        message: 'Avoid using the `Object` type. Did you mean `object`?',
                    },
                    Function: {
                        message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
                    },
                    // eslint-disable-next-line id-blacklist
                    Boolean: {
                        message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                    },
                    // eslint-disable-next-line id-blacklist
                    Number: {
                        message: 'Avoid using the `Number` type. Did you mean `number`?',
                    },
                    // eslint-disable-next-line id-blacklist
                    String: {
                        message: 'Avoid using the `String` type. Did you mean `string`?',
                    },
                    Symbol: {
                        message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                    },
                },
            },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'off',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/naming-convention': ['warn', {selector: 'enumMember', format: null}],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/semi': ['off', null],
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['off', 'always'],
        'brace-style': ['off', 'off'],
        'comma-dangle': 'off',
        'constructor-super': 'error',
        curly: 'error',
        'default-case': 'error',
        'eol-last': 'off',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-blacklist': [
            'error',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined',
        ],
        'id-match': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external', 'internal'],
                    ['parent', 'sibling', 'index', 'object'],
                ],
            },
        ],
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'linebreak-style': 'off',
        'max-len': [
            'off',
            {
                code: 140,
            },
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context',
                ],
            },
        ],
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-semi': 'off',
        'no-fallthrough': 'off',
        'no-irregular-whitespace': 'off',
        'no-multiple-empty-lines': 'off',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-trailing-spaces': 'off',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prefer-const': 'error',
        'quote-props': 'off',
        radix: 'error',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': ['off', 'never'],
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        'use-isnan': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
        ],
    },
};
