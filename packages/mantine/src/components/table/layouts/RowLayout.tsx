import {ListSize16Px} from '@coveord/plasma-react-icons';
import {Box, Collapse, createStyles, rem} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {defaultColumnSizing} from '@tanstack/table-core';
import {Fragment, type MouseEvent} from 'react';
import {TableLayout, TableLayoutProps} from '../Table.types';
import {TableCollapsibleColumn} from '../TableCollapsibleColumn';
import {useTable} from '../TableContext';
import {TableLoading} from '../TableLoading';
import {TableSelectableColumn} from '../TableSelectableColumn';
import {Th} from '../Th';

interface TableStylesParams {
    multiRowSelectionEnabled: boolean;
    disableRowSelection: boolean;
}

const useStyles = createStyles<string, TableStylesParams>((theme, {multiRowSelectionEnabled, disableRowSelection}) => {
    const rowBackgroundColor =
        theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors.gray[1];
    const border = `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`;
    return {
        headerColumns: {
            '& th:first-of-type > *': {
                paddingLeft: '40px',
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
            '& td:first-of-type': {
                paddingLeft: '40px',
            },
            '&:hover': {
                backgroundColor: rowBackgroundColor,
            },
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

const RowLayoutBody = <T,>({
    table,
    doubleClickAction,
    getExpandChildren,
    loading,
    keepSelection,
}: TableLayoutProps<T>) => {
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();
    const {classes, cx} = useStyles({disableRowSelection, multiRowSelectionEnabled});

    const toggleCollapsible = (el: HTMLTableRowElement) => {
        const cell = el.children[el.children.length - 1] as HTMLTableCellElement;
        cell.querySelector('button').click();
    };

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;
        const isSelected = !!row.getIsSelected();
        const shouldDisableRowDeselection = keepSelection && isSelected;
        const onClick = (event: MouseEvent<HTMLTableRowElement>) => {
            if (rowChildren) {
                toggleCollapsible(event.currentTarget);
            }
            if (!disableRowSelection && !multiRowSelectionEnabled && !shouldDisableRowDeselection) {
                row.toggleSelected();
            }
        };

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={onClick}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(classes.row, {
                        [classes.rowSelected]: isSelected,
                        [classes.rowUnselectable]: disableRowSelection,
                    })}
                    aria-selected={isSelected}
                    data-testid={row.id}
                >
                    {row.getVisibleCells().map((cell) => {
                        const columnSizing = {
                            ...defaultColumnSizing,
                            size: cell.column.columnDef.size,
                            minSize: cell.column.columnDef.minSize,
                            maxSize: cell.column.columnDef.maxSize,
                        };

                        const onCollapsibleCellClick = (event: MouseEvent<HTMLTableCellElement>) => {
                            if (cell.column.id === TableSelectableColumn.id && !disableRowSelection) {
                                event.stopPropagation();
                                row.getToggleSelectedHandler();
                            }
                        };
                        return (
                            <td
                                key={cell.id}
                                data-testid={cell.id}
                                style={{
                                    width: columnSizing.size,
                                    minWidth: columnSizing.minSize,
                                    maxWidth: columnSizing.maxSize,
                                }}
                                className={cx(classes.cell, {
                                    [classes.rowCollapsibleButtonCell]: cell.column.id === TableCollapsibleColumn.id,
                                })}
                                onClick={onCollapsibleCellClick}
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
                            }}
                        >
                            <Collapse in={row.getIsExpanded()}>
                                <Box className={classes.collapsible} px="sm" py="xs">
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
