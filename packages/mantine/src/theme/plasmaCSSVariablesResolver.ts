import {ConvertCSSVariablesInput, CSSVariablesResolver} from '@mantine/core';

export const plasmaCSSVariablesResolver: CSSVariablesResolver = (theme) => {
    const result: ConvertCSSVariablesInput = {
        variables: {},
        dark: {},
        light: {
            '--mantine-color-default-border': theme.colors.gray[2],
        },
    };
    result.light['--mantine-color-error'] = theme.colors.red[5];
    return result;
};
