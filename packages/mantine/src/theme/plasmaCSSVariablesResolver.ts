import {
    alpha,
    ConvertCSSVariablesInput,
    CSSVariablesResolver,
    defaultCssVariablesResolver,
    getPrimaryShade,
    MantineColor,
    MantineTheme,
} from '@mantine/core';

export const plasmaCSSVariablesResolver: CSSVariablesResolver = (theme) => {
    // Get the default Mantine CSS variables
    const mantineVariables = defaultCssVariablesResolver(theme);

    // Define your custom variables
    const customVariables: ConvertCSSVariablesInput = {
        variables: {
            '--coveo-fw-light': '300',
            '--coveo-fw-normal': '400',
            '--coveo-fw-bold': '500',
        },
        dark: {
            // custom colors
            '--coveo-color-title': 'var(--mantine-color-white)',
            '--coveo-app-background': theme.colors.dark[8],
            '--coveo-color-input-border': theme.colors.dark[4],
            '--coveo-color-text-readonly': theme.colors.dark[0],
            '--coveo-color-bg-readonly': theme.colors.dark[6],
            '--coveo-color-text-primary': 'var(--mantine-primary-color-4)',
            '--coveo-color-bg-dark-surface': 'var(--mantine-primary-color-3)',

            // mantine overrides
            '--mantine-primary-color-light': 'var(--mantine-primary-color-7)',
            '--mantine-color-body': theme.colors.dark[8],
            '--mantine-color-default': theme.colors.dark[7],
            '--mantine-color-default-border': theme.colors.dark[6],
            '--mantine-color-default-hover': theme.colors.dark[6],
            '--mantine-color-error': theme.colors.red[4],
            '--mantine-color-text': theme.colors.dark[0],
            '--mantine-color-dimmed': theme.colors.dark[1],
            '--mantine-color-gray-filled': theme.colors.dark[6],
            '--mantine-color-warning-filled': theme.colors.yellow[2],
            '--mantine-color-warning-light': theme.colors.yellow[6],
            '--mantine-color-placeholder': theme.colors.dark[2],
            '--mantine-color-disabled': theme.colors.dark[7],
            '--mantine-color-disabled-color': theme.colors.dark[3],
        },
        light: {
            // custom colors
            '--coveo-app-background': theme.colors.gray[0],
            '--coveo-color-input-border': theme.colors.gray[3],
            '--coveo-color-title': theme.colors.gray[8],
            '--coveo-color-text-readonly': 'var(--mantine-color-text)',
            '--coveo-color-bg-readonly': theme.colors.gray[1],
            '--coveo-color-text-primary': 'var(--mantine-primary-color-filled)',
            '--coveo-color-bg-dark-surface': theme.colors.violet[9],

            // mantine overrides
            '--mantine-color-body': theme.colors.gray[0],
            '--mantine-color-default': 'var(--mantine-color-white)',
            '--mantine-color-default-border': theme.colors.gray[2],
            '--mantine-color-default-hover': theme.colors.gray[1],
            '--mantine-color-error': theme.colors.red[5],
            '--mantine-color-text': theme.colors.gray[6],
            '--mantine-color-dimmed': theme.colors.gray[5],
            '--mantine-color-gray-filled': theme.colors.gray[4],
            '--mantine-color-warning-filled': theme.colors.yellow[4],
            '--mantine-color-placeholder': theme.colors.gray[4],
            '--mantine-color-disabled': alpha(theme.colors.gray[4], 0.1),
            '--mantine-color-disabled-color': theme.colors.gray[3],
        },
    };

    Object.keys(theme.colors).forEach((color) => {
        Object.assign(
            customVariables.light,
            getVariantLightVariables({
                theme,
                color,
                colorScheme: 'light',
            }),
        );
    });
    // Merge Mantine variables with custom variables
    const result: ConvertCSSVariablesInput = {
        variables: {
            ...mantineVariables.variables,
            ...customVariables.variables,
        },
        dark: {
            ...mantineVariables.dark,
            ...customVariables.dark,
        },
        light: {
            ...mantineVariables.light,
            ...customVariables.light,
        },
    };

    return result;
};

interface GetColorVariablesInput {
    theme: MantineTheme;
    color: MantineColor;
    colorScheme: 'light' | 'dark';
}

const getVariantLightVariables = ({theme, color, colorScheme}: GetColorVariablesInput) => {
    if (!theme.colors[color]) {
        return {};
    }

    if (colorScheme === 'light') {
        const primaryShade = getPrimaryShade(theme, 'light');
        return {
            [`--mantine-color-${color}-light`]: alpha(theme.colors[color][primaryShade], 0.1),
            [`--mantine-color-${color}-light-hover`]: alpha(theme.colors[color][primaryShade], 0.16),
        };
    }
};
