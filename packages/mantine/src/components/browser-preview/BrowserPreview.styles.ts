import {createStyles} from '@mantine/core';

export default createStyles((theme) => ({
    root: {
        boxShadow: theme.shadows.md,
        borderRadius: theme.defaultRadius,
        border: '1px solid',
        borderColor: theme.colors.gray[3],
        flex: 1,
    },
    header: {boxShadow: theme.shadows.xs, borderRadius: '8px 8px 0 0'},
    content: {overflow: 'auto', flexGrow: 1},
}));
