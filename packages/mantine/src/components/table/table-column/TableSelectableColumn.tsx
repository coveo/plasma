import {Checkbox, Tooltip} from '@mantine/core';
import {ColumnDef} from '@tanstack/table-core';

/**
 * Generic column to use when your table needs multi selection of rows
 */
export const TableSelectableColumn: ColumnDef<unknown> = {
    id: 'select',
    enableSorting: false,
    header: ({table}) => {
        const label = table.getIsAllRowsSelected() ? 'Unselect all from this page' : 'Select all from this page';
        return (
            <Tooltip label={label}>
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    indeterminate={table.getIsSomePageRowsSelected()}
                    onChange={table.getToggleAllPageRowsSelectedHandler()}
                    style={{display: 'flex'}}
                    aria-label={label}
                />
            </Tooltip>
        );
    },
    cell: ({row}) => (
        <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            style={{display: 'flex'}}
            aria-label="Select row"
        />
    ),
};
