import {Box, BoxProps, Collapse, CompoundStylesApiProps, Factory, useProps} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {defaultColumnSizing} from '@tanstack/table-core';
import {ForwardedRef, Fragment, type MouseEvent} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {TableLayoutProps} from '../../Table.types.js';
import {useTableContext} from '../../TableContext.js';
import {TableCollapsibleColumn} from '../../table-column/TableCollapsibleColumn.js';
import {TableSelectableColumn} from '../../table-column/TableSelectableColumn.js';
import {TableLoading} from '../../table-loading/TableLoading.js';
import {useRowLayout} from './RowLayoutContext.js';

export type RowLayoutBodyStylesNames = 'row' | 'cell' | 'collapsibleRow' | 'collapsibleWrapper';

export interface RowLayoutBodyProps<T>
    extends BoxProps, TableLayoutProps<T>, CompoundStylesApiProps<RowLayoutBodyFactory> {}

export type RowLayoutBodyFactory = Factory<{
    props: RowLayoutBodyProps<unknown>;
    ref: HTMLTableRowElement;
    stylesNames: RowLayoutBodyStylesNames;
    compound: true;
}>;

const defaultProps: Partial<RowLayoutBodyProps<unknown>> = {};

export const RowLayoutBody = <T,>(props: RowLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLTableRowElement>}) => {
    const ctx = useRowLayout();
    const {
        getRowExpandedContent,
        onRowDoubleClick,
        loading,
        classNames,
        className,
        styles,
        style,
        getRowAttributes,
        ...others
    } = useProps('RowLayoutBody', defaultProps as RowLayoutBodyProps<T>, props);
    const {table, store} = useTableContext<T>();

    const hasMultiSelection = store.multiRowSelectionEnabled && store.getSelectedRows().length > 0;

    const rows = table.getRowModel()?.rows.map((row) => {
        const rowChildren = getRowExpandedContent?.(row.original, row.index, row) ?? null;
        const isSelected = !!row.getIsSelected();
        const onClick = (_event: MouseEvent<HTMLTableRowElement>) => {
            if (store.rowSelectionEnabled) {
                if (store.multiRowSelectionEnabled) {
                    // In multi-selection mode, clicking a row clears multi-selection
                    // and selects only this row (single-select behavior)
                    store.clearRowSelection();
                    row.toggleSelected(true);
                } else if (!isSelected) {
                    row.toggleSelected(true);
                }
                // If already selected in single mode, do nothing — keep the selection and actions visible
            }
        };

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={onClick}
                    onDoubleClick={() => {
                        onRowDoubleClick?.(row.original, row.index, row);
                    }}
                    data-selectable={store.rowSelectionEnabled}
                    data-selected={isSelected}
                    data-multi-selection={store.multiRowSelectionEnabled}
                    data-has-multi-selection={hasMultiSelection}
                    aria-selected={isSelected}
                    data-testid={row.id}
                    {...ctx.getStyles('row', {classNames, className, styles, style})}
                    {...(getRowAttributes?.(row.original, row.index, row) ?? {})}
                    {...others}
                >
                    {row.getVisibleCells().map((cell) => {
                        const columnSizing = {
                            ...defaultColumnSizing,
                            size: cell.column.columnDef.size,
                            minSize: cell.column.columnDef.minSize,
                            maxSize: cell.column.columnDef.maxSize,
                        };

                        const onCollapsibleCellClick = (event: MouseEvent<HTMLTableCellElement>) => {
                            if (cell.column.id === TableSelectableColumn.id && store.rowSelectionEnabled) {
                                event.stopPropagation();
                            }
                        };

                        return (
                            <td
                                key={cell.id}
                                data-testid={cell.id}
                                className={ctx.getStyles('cell', {classNames, styles}).className}
                                style={{
                                    width: columnSizing.size ? `${columnSizing.size}px` : 'auto',
                                    minWidth: `${columnSizing.minSize}px`,
                                    maxWidth: `${columnSizing.maxSize}px`,
                                    ...ctx.getStyles('cell', {classNames, styles}).style,
                                }}
                                data-collapsible-cell={cell.column.id === TableCollapsibleColumn.id}
                                data-select-cell={cell.column.id === TableSelectableColumn.id}
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
                    <tr {...ctx.getStyles('collapsibleRow', {classNames, styles})}>
                        <td
                            colSpan={table.getAllColumns().length}
                            style={{
                                padding: 0,
                            }}
                        >
                            <Collapse in={row.getIsExpanded()}>
                                <Box {...ctx.getStyles('collapsibleWrapper', {classNames, styles})} px="sm" py="xs">
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

RowLayoutBody.extend = identity as CustomComponentThemeExtend<RowLayoutBodyFactory>;
