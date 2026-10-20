import {useProps} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {FunctionComponent} from 'react';
import {TableActionsList, TableActionsListProps} from '../table-actions/TableActionsList.js';

import {useTableContext} from '../TableContext.js';
import {TableColumnsSelector, TableColumnsSelectorOptions} from '../table-columns-selector/TableColumnsSelector.js';

export interface TableActionsColumnMeta {
    /**
     * When set to `true` or an options object, displays a column selector button in the actions column header.
     * Allows users to show/hide columns in the table.
     *
     * @example
     * // Simple usage
     * options={{ meta: { rowConfigurable: true } }}
     *
     * // With options
     * options={{ meta: { rowConfigurable: { maxSelectableColumns: 5 } } }}
     */
    rowConfigurable?: boolean | TableColumnsSelectorOptions;
}

/**
 * Generic column rendering the row actions in a menu.
 * Automatically added at the end of the columns (before the collapsible column, if any) when `getRowActions` is provided to the Table,
 * add it to your columns explicitly to control its position.
 */
export const TableActionsColumn: ColumnDef<unknown> = {
    id: 'actions',
    enableSorting: false,
    enableHiding: false,
    meta: {
        controlColumn: true,
    },
    header: ({table}) => {
        const rowConfigurable = (table.options.meta as TableActionsColumnMeta)?.rowConfigurable;
        if (!rowConfigurable) {
            return null;
        }
        const options = typeof rowConfigurable === 'boolean' ? {} : rowConfigurable;
        return <TableColumnsSelector table={table} options={options} />;
    },
    size: 1,
    minSize: 1,
    cell: (info) => <ActionsMenu info={info} />,
};

interface TableActionsColumnProps extends Omit<TableActionsListProps, 'actions'> {
    info: CellContext<unknown, unknown>;
}

const defaultProps = {} satisfies Partial<TableActionsColumnProps>;

const ActionsMenu: FunctionComponent<TableActionsColumnProps> = (props) => {
    const {getRowActions} = useTableContext();
    const {info, ...others} = useProps('PlasmaTableActionsColumn', defaultProps, props);

    return <TableActionsList actions={getRowActions([info.row.original])} {...others} />;
};
