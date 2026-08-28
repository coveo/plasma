import {CheckboxProps} from '@mantine/core';
import {Row} from '@tanstack/table-core';
import {ChangeEventHandler} from 'react';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {useTableContext} from '../TableContext.js';

export interface TableSelectRowCheckboxProps<T> extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    row: Row<T>;
}

export type TableSelectRowCheckboxStylesNames = 'selectRowCheckbox';

/**
 * A checkbox that toggles the selection of a single row.
 * Read-only when row selection is disabled but a selection is displayed.
 */
export const TableSelectRowCheckbox = <T,>({row, className, style, ...props}: TableSelectRowCheckboxProps<T>) => {
    const {store, getStyles, selectionCheckboxesVisible} = useTableContext();

    if (!selectionCheckboxesVisible) {
        return null;
    }

    const readOnly = !store.rowSelectionEnabled;
    const shouldKeepSelection = store.rowSelectionForced && row.getIsSelected();
    const toggleSelected = row.getToggleSelectedHandler();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (readOnly || shouldKeepSelection) {
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
            onClick={(event) => event.stopPropagation()}
            onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
            {...getStyles('selectRowCheckbox', {className, style})}
            {...props}
        />
    );
};
