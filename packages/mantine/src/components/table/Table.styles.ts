import {createStyles} from '@mantine/core';

interface TableStylesParams {
    multiRowSelectionEnabled: boolean;
}

const useStyles = createStyles<string, TableStylesParams>((theme, {multiRowSelectionEnabled}) => {
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
        },

        rowSelected: {
            backgroundColor: multiRowSelectionEnabled ? undefined : rowBackgroundColor,
        },

        rowCollapsibleButtonCell: {
            textAlign: 'right',
            padding: `calc(${theme.spacing.xs}/2) ${theme.spacing.sm} !important`,

            '&:has(button:disabled)': {
                button: {
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    color: `${theme.colors.gray[6]}`,

                    '&:hover': {
                        backgroundColor: `${theme.colors.gray[0]}`,
                    },
                },
            },
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
