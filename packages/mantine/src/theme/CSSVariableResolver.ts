import {CSSVariablesResolver} from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-color-primary-0': theme.colors[theme.primaryColor][0],
        '--mantine-color-primary-1': theme.colors[theme.primaryColor][1],
        '--mantine-color-primary-2': theme.colors[theme.primaryColor][2],
        '--mantine-color-primary-3': theme.colors[theme.primaryColor][3],
        '--mantine-color-primary-4': theme.colors[theme.primaryColor][4],
        '--mantine-color-primary-5': theme.colors[theme.primaryColor][5],
        '--mantine-color-primary-6': theme.colors[theme.primaryColor][6],
        '--mantine-color-primary-7': theme.colors[theme.primaryColor][7],
        '--mantine-color-primary-8': theme.colors[theme.primaryColor][8],
        '--mantine-color-primary-9': theme.colors[theme.primaryColor][9],
        '--modal-size-xs': theme.other.modalSizeXS, // NOT SEEM TO WORK HAHA
        '--modal-size-sm': theme.other.modalSizeSM,
        '--modal-size-md': theme.other.modalSizeMD,
        '--modal-size-lg': theme.other.modalSizeLG,
        '--modal-size-xl': theme.other.modalSizeXL,
        '--modal-size': theme.other.modalSizeMD,
    },
    light: {},
    dark: {},
});
