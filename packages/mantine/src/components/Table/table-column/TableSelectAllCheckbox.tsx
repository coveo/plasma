import {Checkbox, CheckboxProps, Tooltip} from '@mantine/core';
import {useTableContext} from '../TableContext';

export interface TableSelectAllCheckboxProps extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {}

/**
 * A "Select all" / "Unselect all" checkbox that toggles page-level row selection.
 * Shared between the RowLayout column header and the CardLayout header.
 */
export const TableSelectAllCheckbox = (props: TableSelectAllCheckboxProps) => {
    const {table} = useTableContext();
    const isAllSelected = table.getIsAllPageRowsSelected();
    const isSomeSelected = table.getIsSomePageRowsSelected();
    const label = isAllSelected ? 'Unselect all from this page' : 'Select all from this page';

    return (
        <Tooltip label={label}>
            <Checkbox
                checked={isAllSelected}
                indeterminate={isSomeSelected}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
                aria-label={label}
                {...props}
            />
        </Tooltip>
    );
};
