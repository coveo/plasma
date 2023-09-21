import {createStyles} from '@mantine/core';

export default createStyles((theme, columnSizing: {size: number; minSize: number; maxSize: number}) => ({
    th: {
        fontWeight: '400 !important' as any,
        padding: '0 !important',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        color: theme.colors.gray[6],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[0],
        width: columnSizing.size ?? 'auto',
        minWidth: columnSizing.minSize,
        maxWidth: columnSizing.maxSize,
    },

    control: {
        color: 'inherit',
        whiteSpace: 'inherit',
        fontWeight: 'inherit',
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[1],
        },
    },
}));
