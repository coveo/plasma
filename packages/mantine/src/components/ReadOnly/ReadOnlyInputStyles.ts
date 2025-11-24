import {type MantineTheme} from '@mantine/core';

export const readOnlyInputStyles = (theme: MantineTheme) => ({
    wrapper: {
        '--input-bd': 'var(--mantine-color-default-border)',
        '--input-bg': theme.colors.gray[1],
        '--input-color': theme.colors.gray[7],
        '--input-placeholder-color': theme.colors.gray[7],
    },
    label: {
        '--input-asterisk-color': theme.colors.red[2],
    },
    input: {
        cursor: 'text',
    },
});
