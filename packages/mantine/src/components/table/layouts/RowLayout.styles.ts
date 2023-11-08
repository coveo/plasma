import {createStyles, rem} from '@mantine/core';
export interface RowLayoutStylesParams {
    multiRowSelectionEnabled: boolean;
    disableRowSelection: boolean;
}

export default createStyles<string, RowLayoutStylesParams>((theme, {multiRowSelectionEnabled, disableRowSelection}) => {
    const rowBackgroundColor =
        theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors.gray[1];
    const border = `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`;
    return {
        headerColumns: {
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
            '& td:first-of-type': {
                paddingLeft: '40px',
            },
            '&:hover': {
                backgroundColor: rowBackgroundColor,
            },
            overflowWrap: 'anywhere',
        },

        cell: {
            verticalAlign: 'middle',
            // We must use height instead of minHeight here, otherwise it doesn't apply
            height: '56px',
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            borderBottom: border,
        },

        collapsible: {
            backgroundColor: rowBackgroundColor,
            borderBottom: border,
        },
    };
});
