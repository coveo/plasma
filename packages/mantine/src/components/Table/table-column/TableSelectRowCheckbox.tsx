import {CheckboxProps} from '@mantine/core';
import {Row} from '@tanstack/table-core';
import {ChangeEventHandler} from 'react';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {getSelectableRowsInRange} from '../getSelectableRowsInRange.js';
import {useTableContext} from '../TableContext.js';

export interface TableSelectRowCheckboxProps<T> extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    row: Row<T>;
}

export type TableSelectRowCheckboxStylesNames = 'selectRowCheckbox';

/**
 * A checkbox that toggles the selection of a single row.
 * Shift-clicking selects all selectable rows between the previous checkbox and this one.
 * Read-only when row selection is disabled but a selection is displayed.
 */
export const TableSelectRowCheckbox = <T,>({row, className, style, ...props}: TableSelectRowCheckboxProps<T>) => {
    const {store, table, getStyles, selectionCheckboxesVisible, rangeSelectionAnchorRef} = useTableContext<T>();

    if (!selectionCheckboxesVisible) {
        return null;
    }

    const readOnly = !store.rowSelectionEnabled;
    const shouldKeepSelection = store.rowSelectionForced && row.getIsSelected();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const selectRange = 'shiftKey' in event.nativeEvent && event.nativeEvent.shiftKey === true;
        if (readOnly || !row.getCanSelect() || (shouldKeepSelection && !selectRange)) {
            return;
        }

        const selectableRows =
            selectRange && rangeSelectionAnchorRef.current
                ? getSelectableRowsInRange(table.getRowModel().rows, rangeSelectionAnchorRef.current, row.id)
                : null;

        store.setRowSelection((currentSelection) => {
            const nextSelection = {...currentSelection};

            if (selectRange) {
                if (selectableRows) {
                    selectableRows.forEach(({id, original}) => {
                        nextSelection[id] = original;
                    });
                } else {
                    nextSelection[row.id] = row.original;
                }
            } else if (currentSelection[row.id]) {
                delete nextSelection[row.id];
            } else {
                nextSelection[row.id] = row.original;
            }

            return nextSelection;
        });

        if (!selectableRows) {
            rangeSelectionAnchorRef.current = row.id;
        }
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
