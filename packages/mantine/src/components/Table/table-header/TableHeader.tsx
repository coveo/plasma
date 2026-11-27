import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {Box, BoxProps, CompoundStylesApiProps, factory, Factory, Tooltip, useProps} from '@mantine/core';
import {Children, isValidElement, ReactNode} from 'react';

import {Button} from '../../Button/Button.js';
import {TableLayoutControl} from '../layouts/TableLayoutControl.js';
import {TableHeaderActions} from '../table-actions/TableHeaderActions.js';
import {TableFilter} from '../table-filter/TableFilter.js';
import {useTableContext} from '../TableContext.js';
import {hasActiveBulkSelection} from '../tableSelectionUtils.js';

export type TableHeaderStylesNames = 'headerRoot' | 'headerFilter' | 'headerControls';

export interface TableHeaderProps
    extends Omit<BoxProps, 'classNames' | 'styles' | 'vars'>, CompoundStylesApiProps<TableHeaderFactory> {
    /**
     * Children of the header (ie: Table.Filter, Table.Predicate, Table.DateRangePicker, etc.).
     * `Table.Filter` is always rendered on the left, every other child is rendered on the right in the order given.
     */
    children?: ReactNode;
    unselectAllLabel?: string;
    selectedCountLabel?: (count: number) => string;
    /**
     * Whether to show actions when rows are selected
     *
     * default true
     */
    showActions?: boolean;
}

export type TableHeaderFactory = Factory<{
    props: TableHeaderProps;
    ref: HTMLDivElement;
    stylesNames: TableHeaderStylesNames;
    compound: true;
}>;

const defaultProps = {
    unselectAllLabel: 'Unselect all',
    selectedCountLabel: (count) => `${count} selected`,
    showActions: true,
} satisfies Partial<TableHeaderProps>;

export const TableHeader = factory<TableHeaderFactory>((props) => {
    const {store, table, getStyles} = useTableContext();
    const {
        showActions,
        unselectAllLabel,
        selectedCountLabel,
        children,
        classNames,
        className,
        styles,
        style,
        vars: _vars,
        ref,
        ...others
    } = useProps('PlasmaTableHeader', defaultProps, props);
    const selectedRows = store.getSelectedRows();
    const bulkSelectionActive = hasActiveBulkSelection(table);

    const stylesApiProps = {classNames, styles};

    const childrenArray = Children.toArray(children);
    const filter = childrenArray.filter((child) => isValidElement(child) && child.type === TableFilter);
    const controls = childrenArray.filter((child) => !filter.includes(child));

    return (
        <Box ref={ref} {...getStyles('headerRoot', {className, style, ...stylesApiProps})} {...others}>
            {filter.length > 0 ? <Box {...getStyles('headerFilter', stylesApiProps)}>{filter}</Box> : null}
            <Box {...getStyles('headerControls', stylesApiProps)}>
                {bulkSelectionActive && selectedRows.length > 0 ? (
                    <Tooltip label={unselectAllLabel}>
                        <Button.Quaternary
                            onClick={store.clearRowSelection}
                            disabled={!store.rowSelectionEnabled}
                            leftSection={<CrossSize16Px height={16} />}
                        >
                            {selectedCountLabel(selectedRows.length)}
                        </Button.Quaternary>
                    </Tooltip>
                ) : null}
                {showActions ? <TableHeaderActions /> : null}
                {controls}
                <TableLayoutControl />
            </Box>
        </Box>
    );
});

TableHeader.displayName = 'Table.Header';
