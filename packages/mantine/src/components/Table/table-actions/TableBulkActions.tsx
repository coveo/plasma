import {ActionBar, type ActionBarProps, Group, Text, Tooltip, useProps} from '@mantine/core';
import {InlineConfirm} from '../../InlineConfirm/InlineConfirm.js';
import {useTableContext} from '../TableContext.js';
import {hasActiveBulkSelection} from '../tableSelectionUtils.js';
import {TableActionProvider} from './TableActionContext.js';
import {groupActions, TableActionsList} from './TableActionsList.js';

export type TableBulkActionsStylesNames = 'bulkActionsRoot' | 'bulkActionsCount' | 'bulkActionsGroup';

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
     * Label of the menu containing the actions of custom groups
     * @default 'More actions'
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
    actionsLabel: 'More actions',
    unselectAllLabel: 'Unselect all',
    'aria-label': 'Bulk actions',
    shadow: 'md',
} satisfies Partial<TableBulkActionsProps>;

/**
 * Displays the number of selected rows and the actions available for them in an ActionBar.
 * `$$primary` and `$$destructive` actions are rendered as buttons, actions of custom groups are rendered in a menu.
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
    const {confirmPrompts, groups} = groupActions(actions, '');
    const getGroupActions = (id: string) => groups.find((group) => group.id === id)?.actions ?? [];
    const primaryActions = getGroupActions('$$primary');
    const destructiveActions = getGroupActions('$$destructive');
    const menuActions = actions.filter(
        ({group}) => group !== '$$primary' && group !== '$$destructive' && group !== '$$confirmPrompt',
    );

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
                    <InlineConfirm>
                        {confirmPrompts}
                        <Group gap="xs" wrap="nowrap" {...getStyles('bulkActionsGroup')}>
                            <TableActionProvider value={{variant: 'button', destructive: false}}>
                                {primaryActions}
                            </TableActionProvider>
                            <TableActionProvider value={{variant: 'button', destructive: true}}>
                                {destructiveActions}
                            </TableActionProvider>
                            <TableActionsList actions={menuActions} label={actionsLabel} withinInlineConfirm />
                        </Group>
                    </InlineConfirm>
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
