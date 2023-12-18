import {ListSize16Px} from '@coveord/plasma-react-icons';
import {Box, Collapse} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {defaultColumnSizing} from '@tanstack/table-core';
import cx from 'clsx';
import {Fragment, type MouseEvent} from 'react';
import {TableLayout} from '../Table.types';
import {useTable} from '../TableContext';
import {TableCollapsibleColumn} from '../table-column/TableCollapsibleColumn';
import {TableSelectableColumn} from '../table-column/TableSelectableColumn';
import {Th} from '../table-header/Th';
import {TableLoading} from '../table-loading/TableLoading';
import RowLayoutClasses from './RowLayout.module.css';
import {RowLayoutProps} from './RowLayout.types';

const RowLayoutHeader = <T,>({table}: RowLayoutProps<T>) => {
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();

    const headers = table.getHeaderGroups().map((headerGroup) => (
        <tr
            key={headerGroup.id}
            className={cx({
                [RowLayoutClasses.headerColumnsEnabled]: !disableRowSelection,
                [RowLayoutClasses.headerColumnsDisabled]: disableRowSelection,
                [RowLayoutClasses.rowSelectedMultiSelecEnabled]: multiRowSelectionEnabled,
                [RowLayoutClasses.rowSelectedMultiSelecDisabled]: !multiRowSelectionEnabled,
            })}
        >
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
    ...others
}: RowLayoutProps<T>) => {
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();
    const toggleCollapsible = (el: HTMLTableRowElement) => {
        const cell = el.children[el.children.length - 1] as HTMLTableCellElement;
        cell.querySelector('button').click();
    };

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;
        const isSelected = !!row.getIsSelected();
        const shouldKeepSelection = keepSelection && isSelected;
        const onClick = (event: MouseEvent<HTMLTableRowElement>) => {
            if (rowChildren) {
                toggleCollapsible(event.currentTarget);
            }
            if (!disableRowSelection && !multiRowSelectionEnabled && !shouldKeepSelection) {
                row.toggleSelected();
            }
        };

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={onClick}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(RowLayoutClasses.row, {
                        [RowLayoutClasses.rowUnselectable]: disableRowSelection,
                        [RowLayoutClasses.rowSelectedMultiSelecEnabled]: isSelected && multiRowSelectionEnabled,
                        [RowLayoutClasses.rowSelectedMultiSelecDisabled]: isSelected && !multiRowSelectionEnabled,
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
                                    width: columnSizing.size ?? 'auto',
                                    minWidth: columnSizing.minSize,
                                    maxWidth: columnSizing.maxSize,
                                }}
                                className={cx(RowLayoutClasses.cell, {
                                    [RowLayoutClasses.rowCollapsibleButtonCell]:
                                        cell.column.id === TableCollapsibleColumn.id,
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
                                <Box className={RowLayoutClasses.collapsible} px="sm" py="xs">
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
