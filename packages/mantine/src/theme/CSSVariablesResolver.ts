import {CSSVariablesResolver, ConvertCSSVariablesInput, keys} from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => {
    const result: ConvertCSSVariablesInput = {
        variables: {},
        dark: {},
        light: {},
    };
    keys(theme.colors).forEach((color) => {
        result.light[`--mantine-color-${color}-light`] = theme.colors[color][color === 'gray' ? 1 : 0];
        result.light[`--mantine-color-${color}-light-hover`] = theme.colors[color][color === 'gray' ? 2 : 1];
    });
    return result;
};
