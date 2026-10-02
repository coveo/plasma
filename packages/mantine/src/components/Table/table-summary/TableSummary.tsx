import {BoxProps, CompoundStylesApiProps, factory, Factory, Stack, Text, useProps} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import dayjs from 'dayjs';
import {ReactNode, useState} from 'react';

import {TableFooterSlot} from '../table-footer/TableFooterSlot.js';
import {useTableContext} from '../TableContext.js';

export type TableSummaryStylesNames = 'summaryRoot' | 'summaryRange' | 'summaryLastUpdated';

export interface TableSummaryRange {
    /**
     * Position of the first row displayed, starting at 1. 0 when there are no rows.
     */
    from: number;
    /**
     * Position of the last row displayed
     */
    to: number;
    /**
     * Total number of rows
     */
    total: number;
}

export interface TableSummaryProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>, CompoundStylesApiProps<TableSummaryFactory> {
    /**
     * Label describing the rows displayed
     * @default ({from, to, total}) => `Showing ${from}-${to} out of ${total}`
     */
    rangeLabel?: (range: TableSummaryRange) => ReactNode;
    /**
     * Whether to display the time of the last data update
     * @default true
     */
    withLastUpdated?: boolean;
    /**
     * Label of the last update time
     * @default 'Last update:'
     */
    lastUpdatedLabel?: string;
    /**
     * Formats the last update time
     * @default (time) => dayjs(time).format('h:mm:ss A')
     */
    lastUpdatedFormatter?: (time: Date) => string;
}

export type TableSummaryFactory = Factory<{
    props: TableSummaryProps;
    ref: HTMLDivElement;
    stylesNames: TableSummaryStylesNames;
    compound: true;
}>;

const defaultProps = {
    rangeLabel: ({from, to, total}) => `Showing ${from}-${to} out of ${total}`,
    withLastUpdated: true,
    lastUpdatedLabel: 'Last update:',
    lastUpdatedFormatter: (time) => dayjs(time).format('h:mm:ss A'),
} satisfies Partial<TableSummaryProps>;

/**
 * Displays the range of rows displayed and the time of the last data update.
 * Placed on the left when rendered in `Table.Footer`.
 */
export const TableSummary = factory<TableSummaryFactory>((props) => {
    const {store, table, getStyles} = useTableContext();
    const {
        rangeLabel,
        withLastUpdated,
        lastUpdatedLabel,
        lastUpdatedFormatter,
        classNames,
        className,
        styles,
        style,
        vars: _vars,
        ref,
        ...others
    } = useProps('PlasmaTableSummary', defaultProps, props);
    const [time, setTime] = useState(new Date());

    useDidUpdate(() => {
        setTime(new Date());
    }, [table.options.data]);

    const stylesApiProps = {classNames, styles};
    const rowsCount = table.getRowModel().rows.length;
    const total = store.state.totalEntries ?? table.getRowCount();
    const from = rowsCount > 0 ? store.state.pagination.page * store.state.pagination.perPage + 1 : 0;
    const to = rowsCount > 0 ? from + rowsCount - 1 : 0;

    return (
        <TableFooterSlot position="start">
            <Stack ref={ref} gap={0} {...getStyles('summaryRoot', {className, style, ...stylesApiProps})} {...others}>
                <Text fw={500} {...getStyles('summaryRange', stylesApiProps)}>
                    {rangeLabel({from, to, total})}
                </Text>
                {withLastUpdated ? (
                    <Text size="sm" c="dimmed" {...getStyles('summaryLastUpdated', stylesApiProps)}>
                        {lastUpdatedLabel}
                        <span role="timer">{lastUpdatedFormatter(time)}</span>
                    </Text>
                ) : null}
            </Stack>
        </TableFooterSlot>
    );
});

TableSummary.displayName = 'Table.Summary';
