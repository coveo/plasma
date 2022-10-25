import {createStyles} from '@mantine/core';

export interface CollectionStylesParams {}

export default createStyles((theme) => ({
    root: {},
    item: {
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.black,
    },
    itemDragging: {
        boxShadow: theme.shadows.sm,
    },
}));
