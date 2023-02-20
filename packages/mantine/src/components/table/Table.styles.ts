import {createStyles} from '@mantine/core';

interface TableStylesParams {
    hasHeader: boolean;
    multiRowSelectionEnabled: boolean;
}

const useStyles = createStyles<string, TableStylesParams>((theme, {hasHeader, multiRowSelectionEnabled}) => {
    const rowBackgroundColor =
        theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
            : theme.colors[theme.primaryColor][0];
    return {
        table: {
            width: '100%',
            '& td:first-of-type, th:first-of-type > *': {
                paddingLeft: theme.spacing.xl,
            },
            '& tbody td': {
                verticalAlign: 'top',
            },
        },

        header: {
            position: 'sticky',
            top: hasHeader ? 69 : 0,
            backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
            transition: 'box-shadow 150ms ease',
            zIndex: 12, // skeleton is 11

            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
            },
        },

        rowSelected: {
            backgroundColor: multiRowSelectionEnabled ? undefined : rowBackgroundColor,
        },

        rowCollapsibleButtonCell: {
            textAlign: 'right',
            padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px !important`,
        },

        row: {
            '&:hover': {
                backgroundColor: rowBackgroundColor,
            },
        },
    };
});

export default useStyles;
