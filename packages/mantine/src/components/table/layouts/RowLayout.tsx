import {ListSize16Px} from '@coveord/plasma-react-icons';
import {Box, Collapse, createStyles} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {defaultColumnSizing} from '@tanstack/table-core';
import {Fragment} from 'react';
import {TableLayout, TableLayoutProps} from '../Table.types';
import {TableCollapsibleColumn} from '../TableCollapsibleColumn';
import {useTable} from '../TableContext';
import {TableLoading} from '../TableLoading';
import {Th} from '../Th';

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

const RowLayoutHeader = <T,>({table}: TableLayoutProps<T>) => {
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();
    const {classes} = useStyles({disableRowSelection, multiRowSelectionEnabled});
    const headers = table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className={classes.headerColumns}>
            {headerGroup.headers.map((columnHeader) => (
                <Th key={columnHeader.id} header={columnHeader} />
            ))}
        </tr>
    ));
    return <>{headers}</>;
};

const RowLayoutBody = <T,>({table, doubleClickAction, getExpandChildren, loading}: TableLayoutProps<T>) => {
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();
    const {classes, cx} = useStyles({disableRowSelection, multiRowSelectionEnabled});

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;
        const isSelected = !!row.getIsSelected();

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={() => (disableRowSelection ? undefined : row.toggleSelected())}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(classes.row, {
                        [classes.rowSelected]: isSelected,
                        [classes.rowUnselectable]: disableRowSelection,
                    })}
                    aria-selected={isSelected}
                >
                    {row.getVisibleCells().map((cell) => {
                        const size = cell.column.getSize();
                        const width = size !== defaultColumnSizing.size ? size : undefined;
                        return (
                            <td
                                key={cell.id}
                                style={{width}}
                                className={cx({
                                    [classes.rowCollapsibleButtonCell]: cell.column.id === TableCollapsibleColumn.id,
                                })}
                            >
                                <TableLoading visible={loading}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableLoading>
                            </td>
                        );
                    })}
                </tr>
                {rowChildren ? (
                    <tr>
                        <td
                            colSpan={table.getAllColumns().length}
                            style={{
                                padding: 0,
                                borderTop: row.getIsExpanded() ? undefined : 'none',
                                borderBottom: row.getIsExpanded() ? undefined : 'none',
                            }}
                        >
                            <Collapse in={row.getIsExpanded()}>
                                <Box px="sm" py="xs">
                                    {rowChildren}
                                </Box>
                            </Collapse>
                        </td>
                    </tr>
                ) : null}
            </Fragment>
        );
    });

    return <>{rows}</>;
};

export const RowLayout: TableLayout = {
    name: 'Rows',
    icon: ListSize16Px,
    Header: RowLayoutHeader,
    Body: RowLayoutBody,
};
