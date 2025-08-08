import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import preferArrow from 'eslint-plugin-prefer-arrow';
import reactHooks from 'eslint-plugin-react-hooks';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import unusedImports from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tsEslint.config(
    {
        ignores: [
            '**/dist',
            '**/.turbo',
            'packages/react-icons/mock/index.js',
            'packages/website/src/examples/mantine',
            '**/vitest.config.ts',
        ],
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        extends: [tsEslint.configs.base, reactJsxRuntime, eslintConfigPrettier],
        name: 'plasma-eslint-config',
        plugins: {
            import: eslintPluginImport,
            jsdoc,
            'prefer-arrow': preferArrow,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
        },
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js'],
                },
                jsxPragma: 'React',
            },
            globals: {
                ...globals.browser,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
            },
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'off',
            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'array-simple',
                },
            ],
            '@typescript-eslint/no-unsafe-function-type': 'error',
            '@typescript-eslint/no-wrapper-object-types': 'warn',
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
    },
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        extends: [tsEslint.configs.disableTypeChecked],
    },
    {
        // Didn't find a way to target .js files only if inside a commonjs module package
        files: ['**/*.js', '**/*.cjs'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: ['**/*.spec.ts', '**/*.spec.tsx'],
        plugins: {
            'testing-library': eslintPluginTestingLibrary,
            vitest,
        },
        settings: {
            vitest: {
                typecheck: true,
            },
        },
        languageOptions: {
            globals: {
                ...vitest.environments.env.globals,
            },
        },
        rules: {
            ...vitest.configs.recommended.rules,
            ...eslintPluginTestingLibrary.configs.react.rules,
            'vitest/expect-expect': ['warn'],
        },
    },
    {
        files: ['packages/mantine/**'],
        rules: {
            'no-underscore-dangle': 'off',
        },
    },
    {
        files: ['packages/website/**'],
        plugins: {
            'react-refresh': reactRefresh,
        },
        rules: {
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
    {
        files: ['packages/website/src/examples/**'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        files: ['.github/**', '**/scripts/**', '**/bin/**'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-console': 'off',
        },
    },
);
