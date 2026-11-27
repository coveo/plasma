import {ColumnDef} from '@tanstack/table-core';
import {TableSelectAllCheckbox} from './TableSelectAllCheckbox.js';
import {TableSelectRowCheckbox} from './TableSelectRowCheckbox.js';

/**
 * Generic column to use when your table needs multi selection of rows
 */
export const TableSelectableColumn: ColumnDef<unknown> = {
    id: 'select',
    enableSorting: false,
    enableHiding: false,
    meta: {
        controlColumn: true,
    },
    size: 36, // 8px padding + 20px Checkbox + 8px padding
    header: () => <TableSelectAllCheckbox flex={1} />,
    cell: ({row}) => <TableSelectRowCheckbox row={row} />,
};
