import {createStyles} from '@mantine/core';

interface TableStylesParams {
    multiRowSelectionEnabled: boolean;
    disableRowSelection: boolean;
}

const useStyles = createStyles<string, TableStylesParams>((theme, {multiRowSelectionEnabled, disableRowSelection}) => {
    const rowBackgroundColor =
        theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
            : theme.colors[theme.primaryColor][0];
    return {
        table: {
            width: '100%',
            '& thead tr th': {
                borderBottom: 'none',
            },
            '& td:first-of-type': {
                paddingLeft: theme.spacing.xl,
            },
            '& tbody td': {
                verticalAlign: 'top',
            },
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

        headerColumns: {
            '& th:first-of-type > *': {
                paddingLeft: theme.spacing.xl,
            },

            '& input[type=checkbox]': {
                backgroundColor: disableRowSelection ? `${theme.colors.gray[2]}` : undefined,
                borderColor: disableRowSelection ? `${theme.colors.gray[3]}` : `${theme.colors.gray[4]}`,
                pointerEvents: disableRowSelection ? 'none' : 'auto',
                cursor: disableRowSelection ? 'not-allowed' : 'default',

                '& + svg': {
                    color: disableRowSelection ? `${theme.colors.gray[5]}` : 'inherit',
                },
            },
        },

        rowSelected: {
            backgroundColor: multiRowSelectionEnabled ? undefined : rowBackgroundColor,
        },

        rowUnselectable: {
            '& input[type=checkbox]': {
                backgroundColor: `${theme.colors.gray[2]}`,
                borderColor: `${theme.colors.gray[3]}`,
                pointerEvents: 'none',
                cursor: 'not-allowed',

                '&:checked + svg': {
                    color: `${theme.colors.gray[5]}`,
                },
            },
        },

        rowCollapsibleButtonCell: {
            textAlign: 'right',
            padding: `calc(${theme.spacing.xs}/2) ${theme.spacing.sm} !important`,
        },

        row: {
            '&:hover': {
                backgroundColor: rowBackgroundColor,
            },
        },
    };
});

export const TableComponentsOrder = {
    MultiSelectInfo: 5,
    Actions: 4,
    Predicate: 3,
    Filter: 2,
    DateRangePicker: 1,
};

export default useStyles;
