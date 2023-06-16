import {createStyles} from '@mantine/core';

const useStyles = createStyles<string>((theme) => ({
    table: {
        width: '100%',
    },

    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
        transition: 'box-shadow 150ms ease',
        zIndex: 1,

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${theme.colors.gray[3]}`,
        },
    },
}));

export const TableComponentsOrder = {
    MultiSelectInfo: 6,
    Actions: 5,
    Predicate: 4,
    Filter: 3,
    DateRangePicker: 2,
    LayoutControl: 1,
};

export default useStyles;
