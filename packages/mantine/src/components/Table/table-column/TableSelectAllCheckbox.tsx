import {CheckboxProps, Tooltip} from '@mantine/core';
import {ChangeEventHandler} from 'react';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {useTableContext} from '../TableContext.js';

export interface TableSelectAllCheckboxProps extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {}

/**
 * A "Select all" / "Unselect all" checkbox that toggles page-level row selection.
 * Shared between the RowLayout column header and the CardLayout header.
 */
export const TableSelectAllCheckbox = (props: TableSelectAllCheckboxProps) => {
    const {table, store} = useTableContext();
    const readOnly = !store.rowSelectionEnabled;
    const isAllSelected = table.getIsAllPageRowsSelected();
    const isSomeSelected = table.getIsSomePageRowsSelected();
    const label = isAllSelected ? 'Unselect all from this page' : 'Select all from this page';
    const toggleAllPageRowsSelected = table.getToggleAllPageRowsSelectedHandler();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (readOnly) {
            return;
        }
        toggleAllPageRowsSelected(event);
    };

    return (
        <Tooltip label={label}>
            <Checkbox
                checked={isAllSelected}
                indeterminate={isSomeSelected}
                onChange={handleChange}
                readOnly={readOnly}
                aria-label={label}
                {...props}
            />
        </Tooltip>
    );
};
