import {CheckboxProps} from '@mantine/core';
import {Row} from '@tanstack/table-core';
import {ChangeEventHandler} from 'react';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {useTableContext} from '../TableContext.js';

export interface TableSelectRowCheckboxProps extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    row: Row<unknown>;
}

/**
 * A checkbox that toggles the selection of a single row.
 * Read-only when row selection is disabled but a selection is displayed.
 */
export const TableSelectRowCheckbox = ({row, ...props}: TableSelectRowCheckboxProps) => {
    const {store} = useTableContext();
    const readOnly = !store.rowSelectionEnabled;
    const toggleSelected = row.getToggleSelectedHandler();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (readOnly) {
            return;
        }
        toggleSelected(event);
    };

    return (
        <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={handleChange}
            readOnly={readOnly}
            flex={1}
            aria-label="Select row"
            onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
            {...props}
        />
    );
};
