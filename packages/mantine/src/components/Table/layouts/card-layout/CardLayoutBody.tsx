import {Box, BoxProps, Card, CompoundStylesApiProps, Factory, SimpleGrid, Stack, Title, useProps} from '@mantine/core';
import {flexRender} from '@tanstack/react-table';
import {ForwardedRef, type MouseEvent} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {TableLayoutProps} from '../../Table.types.js';
import {useTableContext} from '../../TableContext.js';
import {isRowSelectionPredicateRejected, preventRangeSelectionTextSelection} from '../../tableSelectionUtils.js';
import {TableCollapsibleColumn} from '../../table-column/TableCollapsibleColumn.js';
import {TableSelectAllCheckbox} from '../../table-column/TableSelectAllCheckbox.js';
import {TableSelectRowCheckbox} from '../../table-column/TableSelectRowCheckbox.js';
import {TableLoading} from '../../table-loading/TableLoading.js';
import {useCardLayout} from './CardLayoutContext.js';

export type CardLayoutBodyStylesNames = 'grid' | 'card' | 'cardCheckbox' | 'selectAllCheckbox';

export interface CardLayoutBodyProps<T>
    extends BoxProps, TableLayoutProps<T>, CompoundStylesApiProps<CardLayoutBodyFactory> {}

export type CardLayoutBodyFactory = Factory<{
    props: CardLayoutBodyProps<unknown>;
    ref: HTMLTableRowElement;
    stylesNames: CardLayoutBodyStylesNames;
    compound: true;
}>;

const defaultProps: Partial<CardLayoutBodyProps<unknown>> = {};

export const CardLayoutBody = <T,>(props: CardLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLTableRowElement>}) => {
    const ctx = useCardLayout();
    const {
        getRowExpandedContent: _getRowExpandedContent,
        getRowAttributes,
        onRowDoubleClick,
        loading,
        classNames,
        className,
        styles,
        style,
    } = useProps('CardLayoutBody', defaultProps as CardLayoutBodyProps<T>, props);
    const {table, store, handleRowSelection} = useTableContext<T>();

    const headers = table
        .getFlatHeaders()
        .filter((header) => header.column.id !== 'select' && header.column.id !== TableCollapsibleColumn.id)
        .map((header) => (
            <Title order={6} key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
            </Title>
        ));

    const visibleColumnIds = table
        .getFlatHeaders()
        .filter((header) => header.column.id !== 'select' && header.column.id !== TableCollapsibleColumn.id)
        .map((header) => header.column.id);

    const cardStyles = ctx.getStyles('card', {classNames, className, styles, style});
    const checkboxStyles = ctx.getStyles('cardCheckbox', {classNames, styles});

    const cards = table.getRowModel().rows.map((row) => {
        const isSelected = !!row.getIsSelected();
        const isSelectionDisabled = isRowSelectionPredicateRejected(row, store);
        const onClick = (event: MouseEvent<HTMLDivElement>) => {
            preventRangeSelectionTextSelection(event, row, store);
            handleRowSelection(row, event.shiftKey);
        };
        const onMouseDown = (event: MouseEvent<HTMLDivElement>) => {
            preventRangeSelectionTextSelection(event, row, store);
        };

        return (
            <Card
                key={row.id}
                mod={{selected: isSelected}}
                variant={row.getCanSelect() ? 'hover' : undefined}
                data-selectable={row.getCanSelect() || undefined}
                data-selection-disabled={isSelectionDisabled || undefined}
                aria-selected={isSelected}
                data-testid={row.id}
                onClick={onClick}
                onMouseDown={onMouseDown}
                onDoubleClick={() => {
                    onRowDoubleClick?.(row.original, row.index, row);
                }}
                pos="relative"
                {...cardStyles}
                {...(getRowAttributes?.(row.original, row.index, row) ?? {})}
            >
                <TableSelectRowCheckbox row={row} {...checkboxStyles} />
                <Stack gap="sm">
                    {row
                        .getVisibleCells()
                        .filter((cell) => cell.column.id !== 'select' && cell.column.id !== TableCollapsibleColumn.id)
                        .map((cell) => {
                            const headerIndex = visibleColumnIds.indexOf(cell.column.id);
                            return (
                                <Box key={cell.id} data-testid={cell.id}>
                                    <TableLoading visible={loading}>
                                        {headers[headerIndex]}
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableLoading>
                                </Box>
                            );
                        })}
                </Stack>
            </Card>
        );
    });

    return (
        <tr>
            <td colSpan={table.getAllColumns().length}>
                <Stack px="xl" py="md" gap="md">
                    <TableSelectAllCheckbox
                        {...ctx.getStyles('selectAllCheckbox', {classNames, styles})}
                        label="Select entire page"
                    />
                    <SimpleGrid cols={{base: 1, sm: 2, md: 3, lg: 4}} spacing="md">
                        {cards}
                    </SimpleGrid>
                </Stack>
            </td>
        </tr>
    );
};

CardLayoutBody.extend = identity as CustomComponentThemeExtend<CardLayoutBodyFactory>;
