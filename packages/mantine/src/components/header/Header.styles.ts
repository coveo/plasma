import {createStyles} from '@mantine/core';

export interface HeaderStylesParams {
    variant?: 'page' | 'modal';
}

export const useStyles = createStyles((theme, {variant}: HeaderStylesParams) => ({
    root: {
        padding: variant === 'page' ? theme.spacing.xl : undefined,
        paddingBottom: variant === 'page' ? theme.spacing.lg : undefined,
    },
    title: {
        wordBreak: 'break-word',
        color: variant === 'page' ? theme.colors.gray[5] : undefined,
    },
    description: {
        color: theme.colors.gray[6],
    },
    divider: {},
}));
