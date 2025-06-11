import {alpha, ConvertCSSVariablesInput, CSSVariablesResolver} from '@mantine/core';

export const plasmaCSSVariablesResolver: CSSVariablesResolver = (theme) => {
    const result: ConvertCSSVariablesInput = {
        variables: {},
        dark: {},
        light: {
            // custom colors
            '--coveo-color-input-border': theme.colors.gray[3],
            '--coveo-color-title': theme.colors.gray[8],
            '--coveo-color-text-disabled': theme.colors.gray[3],
            '--coveo-color-bg-disabled': alpha('var(--mantine-color-gray-4)', 0.1),
            '--coveo-color-text-readonly': 'var(--mantine-color-text)',
            '--coveo-color-bg-readonly': theme.colors.gray[1],

            // mantine overrides
            '--mantine-color-default-border': theme.colors.gray[2],
            '--mantine-color-error': theme.colors.red[5],
            '--mantine-color-text': theme.colors.gray[6],
            '--mantine-color-dimmed': theme.colors.gray[5],
            '--mantine-color-gray-filled': theme.colors.gray[4],
            '--mantine-color-gray-light': alpha('var(--mantine-color-gray-filled)', 0.1),
            '--mantine-color-gray-light-hover': alpha('var(--mantine-color-gray-filled)', 0.16),
            '--mantine-color-warning-filled': theme.colors.yellow[4],
            '--mantine-color-placeholder': theme.colors.gray[4],
            '--mantine-color-default-hover': theme.colors.gray[1],
            /**
             * ADUI-10725 https://coveord.atlassian.net/browse/ADUI-10725
             * '--mantine-color-disabled'
             * '--mantine-color-disabled-color'
             * '--mantine-color-disabled-border'
             */
        },
    };

    return result;
};
