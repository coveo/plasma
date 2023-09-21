import {createStyles} from '@mantine/core';

export interface HeaderDocAnchorStylesParams {}

export const useStyles = createStyles((theme, {}: HeaderDocAnchorStylesParams) => ({
    tooltip: {},
    anchor: {
        marginLeft: theme.spacing.xs,
        verticalAlign: 'middle',
    },
}));
