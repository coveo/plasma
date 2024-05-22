import {Box, BoxProps, Collapse, CompoundStylesApiProps, Factory, useProps} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {defaultColumnSizing} from '@tanstack/table-core';
import {ForwardedRef, Fragment, type MouseEvent} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils';
import {TableLayoutProps} from '../../Table.types';
import {useTableContext} from '../../TableContext';
import {TableCollapsibleColumn} from '../../table-column/TableCollapsibleColumn';
import {TableSelectableColumn} from '../../table-column/TableSelectableColumn';
import {TableLoading} from '../../table-loading/TableLoading';
import {useRowLayout} from './RowLayoutContext';

export type RowLayoutBodyStylesNames = 'row' | 'cell' | 'collapsibleRow' | 'collapsibleWrapper';

export interface RowLayoutBodyProps<T>
    extends BoxProps,
        TableLayoutProps<T>,
        CompoundStylesApiProps<RowLayoutBodyFactory> {}

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
        getRowActions,
        loading,
        classNames,
        className,
        styles,
        style,
        getRowAttributes,
        ...others
    } = useProps('RowLayoutBody', defaultProps as RowLayoutBodyProps<T>, props);
    const {table, store} = useTableContext<T>();
    const toggleCollapsible = (el: HTMLTableRowElement) => {
        const cell = el.children[el.children.length - 1] as HTMLTableCellElement;
        cell.querySelector('button').click();
    };

    const rows = table.getRowModel()?.rows.map((row) => {
        const rowChildren = getRowExpandedContent?.(row.original, row.index, row) ?? null;
        const rowActions = getRowActions?.(row.original) ?? null;
        const doubleClickAction = rowActions?.find((action) => Boolean(action.onRowDoubleClick))?.onRowDoubleClick;
        const isSelected = !!row.getIsSelected();
        const shouldKeepSelection = store.rowSelectionForced && isSelected;
        const onClick = (event: MouseEvent<HTMLTableRowElement>) => {
            if (rowChildren) {
                toggleCollapsible(event.currentTarget);
            }
            if (store.rowSelectionEnabled && !store.multiRowSelectionEnabled && !shouldKeepSelection) {
                row.toggleSelected();
            }
        };

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={onClick}
                    onDoubleClick={() => doubleClickAction?.(row.original, row.index, row)}
                    data-selectable={store.rowSelectionEnabled}
                    data-selected={isSelected}
                    data-multi-selection={store.multiRowSelectionEnabled}
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
                                    width: `${columnSizing.size}px` ?? 'auto',
                                    minWidth: `${columnSizing.minSize}px`,
                                    maxWidth: `${columnSizing.maxSize}px`,
                                    ...ctx.getStyles('cell', {classNames, styles}).style,
                                }}
                                data-collapsible-cell={cell.column.id === TableCollapsibleColumn.id}
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
