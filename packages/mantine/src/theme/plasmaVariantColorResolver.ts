import {defaultVariantColorsResolver, parseThemeColor, rem, rgba, VariantColorsResolver} from '@mantine/core';

export const plasmaVariantColorResolver: VariantColorsResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
        color: input.color || input.theme.primaryColor,
        theme: input.theme,
    });
    if (input.variant === 'light') {
        return {
            background: rgba(parsedColor.value, 0.1),
            hover: rgba(parsedColor.value, 0.16),
            color: parsedColor.value,
            border: `${rem(1)} solid transparent`,
        };
    }
    if (input.variant === 'subtle') {
        return {
            background: 'transparent',
            hover: rgba(parsedColor.value, 0.16),
            color: parsedColor.value,
            border: `${rem(1)} solid transparent`,
        };
    }
    return defaultResolvedColors;
};
