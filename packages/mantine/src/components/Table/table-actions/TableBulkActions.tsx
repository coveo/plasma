import {ActionBar, type ActionBarProps, Text, Tooltip, useProps} from '@mantine/core';
import {useTableContext} from '../TableContext.js';
import {hasActiveBulkSelection} from '../tableSelectionUtils.js';
import {TableActionsList} from './TableActionsList.js';

export type TableBulkActionsStylesNames = 'bulkActionsRoot' | 'bulkActionsCount';

export interface TableBulkActionsProps extends Omit<
    ActionBarProps,
    'opened' | 'onClose' | 'closeOnEscape' | 'children' | 'classNames' | 'styles' | 'vars'
> {
    /**
     * Label displaying the number of selected rows
     * @default (count) => `${count} selected`
     */
    selectedCountLabel?: (count: number) => string;
    /**
     * Label of the bulk actions menu target
     * @default 'Bulk actions'
     */
    actionsLabel?: string;
    /**
     * Label of the button clearing the selection
     * @default 'Unselect all'
     */
    unselectAllLabel?: string;
}

const defaultProps = {
    selectedCountLabel: (count) => `${count} selected`,
    actionsLabel: 'Bulk actions',
    unselectAllLabel: 'Unselect all',
    'aria-label': 'Bulk actions',
    shadow: 'md',
} satisfies Partial<TableBulkActionsProps>;

/**
 * Displays the number of selected rows and the actions available for them in an ActionBar.
 * Only visible when rows are bulk selected (multi row selection).
 * Pressing Escape clears the selection (handled by the table).
 */
export const TableBulkActions = (props: TableBulkActionsProps) => {
    const {store, table, getRowActions, getStyles} = useTableContext();
    const {selectedCountLabel, actionsLabel, unselectAllLabel, className, style, ...others} = useProps(
        'PlasmaTableBulkActions',
        defaultProps,
        props,
    );
    const selectedRows = store.getSelectedRows();
    const opened = hasActiveBulkSelection(table) && selectedRows.length > 0;
    const clearable = !!store.rowSelectionEnabled && !store.rowSelectionForced;
    const actions = opened ? getRowActions(selectedRows).filter(({component}) => !!component) : [];

    return (
        <ActionBar
            opened={opened}
            onClose={store.clearRowSelection}
            {...getStyles('bulkActionsRoot', {className, style})}
            {...others}
        >
            <Text size="sm" fw={500} {...getStyles('bulkActionsCount')}>
                {selectedCountLabel(selectedRows.length)}
            </Text>
            {actions.length > 0 ? (
                <>
                    <ActionBar.Divider />
                    <TableActionsList actions={actions} label={actionsLabel} />
                </>
            ) : null}
            {clearable ? (
                <Tooltip label={unselectAllLabel}>
                    <ActionBar.CloseButton aria-label={unselectAllLabel} />
                </Tooltip>
            ) : null}
        </ActionBar>
    );
};
