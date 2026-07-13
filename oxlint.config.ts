import {defineConfig} from 'oxlint';

export default defineConfig({
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'node', 'promise', 'vitest', 'react'],
    jsPlugins: ['eslint-plugin-testing-library', 'eslint-plugin-storybook'],
    options: {
        typeAware: true,
    },
    rules: {
        'typescript/unbound-method': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'vitest/require-mock-type-parameters': 'off',
        'vitest/no-disabled-tests': 'off',
    },
});
