import {type MantineTheme} from '@mantine/core';

export const readOnlyInputStyles = (theme: MantineTheme) => ({
    wrapper: {
        '--input-bd': 'transparent',
        '--input-bg': theme.colors.gray[2],
        '--input-color': theme.colors.gray[7],
        '--input-placeholder-color': theme.colors.gray[7],
    },
    input: {
        cursor: 'text',
    },
});
