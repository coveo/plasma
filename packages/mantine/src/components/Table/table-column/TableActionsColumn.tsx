import {MoreSize16Px} from '@coveord/plasma-react-icons';
import {useProps} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {FunctionComponent} from 'react';
import {TableActionsList, TableActionsListProps} from '../table-actions/TableActionsList.js';

import {useTableContext} from '../TableContext.js';
import {
    TableColumnsSelectorHeader,
    TableColumnsSelectorOptions,
} from '../table-columns-selector/TableColumnsSelector.js';

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
 * Generic column to use when your table needs actions on rows
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
        return <TableColumnsSelectorHeader table={table} options={options} />;
    },
    size: 84, // 16px padding left + 28px ActionIcon + 40px padding right
    cell: (info) => <ActionsMenu info={info} />,
};

interface TableActionsColumnProps extends Omit<TableActionsListProps, 'actions'> {
    info: CellContext<unknown, unknown>;
}

const defaultProps: Partial<TableActionsColumnProps> = {
    label: 'Actions',
    icon: <MoreSize16Px height={16} />,
};

const ActionsMenu: FunctionComponent<TableActionsColumnProps> = (props) => {
    const {getRowActions} = useTableContext();

    const {info, ...others} = useProps('PlasmaTableActionsColumn', defaultProps, props);

    const actionsElements = getRowActions([info.row.original]);
    return <TableActionsList actions={actionsElements} variant="combined" {...others} />;
};
