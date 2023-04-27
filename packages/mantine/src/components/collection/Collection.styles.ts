import {createStyles} from '@mantine/core';

export interface CollectionStylesParams {}

export default createStyles((theme) => ({
    root: {
        position: 'relative',
    },
    item: {
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.black,
        alignItems: 'baseline',
    },
    itemDragging: {
        boxShadow: theme.shadows.md,
        zIndex: 2,
    },
    dragHandle: {
        cursor: 'move',
    },
}));
