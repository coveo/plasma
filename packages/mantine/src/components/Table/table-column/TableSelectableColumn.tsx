import {Checkbox} from '@mantine/core';
import {ColumnDef} from '@tanstack/table-core';
import {TableSelectAllCheckbox} from './TableSelectAllCheckbox.js';

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
    header: () => <TableSelectAllCheckbox flex={1} />,
    cell: ({row}) => (
        <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            flex={1}
            aria-label="Select row"
            onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
        />
    ),
};
