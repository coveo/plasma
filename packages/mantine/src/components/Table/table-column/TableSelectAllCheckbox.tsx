import {CheckboxProps, Tooltip} from '@mantine/core';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {useTableContext} from '../TableContext.js';
import {isRowBulkSelectable} from '../tableSelectionUtils.js';

export interface TableSelectAllCheckboxProps extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {}

/**
 * A "Select all" / "Unselect all" checkbox that toggles page-level row selection.
 * Shared between the RowLayout column header and the CardLayout header.
 */
export const TableSelectAllCheckbox = (props: TableSelectAllCheckboxProps) => {
    const {table, store, selectionCheckboxesVisible, handlePageSelection} = useTableContext();

    if (!selectionCheckboxesVisible) {
        return null;
    }

    const bulkSelectableRows = table.getRowModel().rows.filter(isRowBulkSelectable);
    const readOnly = !store.rowSelectionEnabled || bulkSelectableRows.length === 0;
    const selectedRowsCount = bulkSelectableRows.filter((row) => row.getIsSelected()).length;
    const isAllSelected = bulkSelectableRows.length > 0 && selectedRowsCount === bulkSelectableRows.length;
    const isSomeSelected = selectedRowsCount > 0 && !isAllSelected;
    const label = isAllSelected ? 'Unselect all from this page' : 'Select all from this page';

    const handleChange = () => {
        if (readOnly) {
            return;
        }
        handlePageSelection(bulkSelectableRows, !isAllSelected);
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
