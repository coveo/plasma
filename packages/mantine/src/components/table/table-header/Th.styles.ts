import {createStyles} from '@mantine/core';

export interface ThStyleParams {
    size: number;
    minSize: number;
    maxSize: number;
}

export default createStyles((theme, {maxSize, minSize, size}: ThStyleParams) => ({
    root: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        color: theme.colors.gray[6],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[0],
        height: theme.spacing.xl,
        width: size ?? 'auto',
        minWidth: minSize,
        maxWidth: maxSize,
        fontWeight: 500,
        fontSize: theme.fontSizes.xs,

        '&:first-of-type': {
            paddingLeft: theme.spacing.xl,
        },

        '&:last-of-type': {
            paddingRight: theme.spacing.xl,
        },
    },

    control: {
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[1],
        },
    },
}));
