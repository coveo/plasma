import {ConvertCSSVariablesInput, CSSVariablesResolver} from '@mantine/core';

export const plasmaCSSVariablesResolver: CSSVariablesResolver = (theme) => {
    const result: ConvertCSSVariablesInput = {
        variables: {},
        dark: {},
        light: {
            '--mantine-color-default-border': theme.colors.gray[2],
            '--mantine-color-input-border': theme.colors.gray[3],
            '--mantine-color-error': theme.colors.red[5],
            '--mantine-color-dimmed': theme.colors.gray[5],
            '--mantine-color-gray-light': theme.colors.gray[0],
            '--mantine-color-gray-light-hover': theme.colors.gray[1],
        },
    };
    return result;
};
