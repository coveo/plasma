import {CheckboxProps} from '@mantine/core';
import {Row} from '@tanstack/table-core';
import {MouseEventHandler} from 'react';
import {Checkbox} from '../../Checkbox/Checkbox.js';
import {useTableContext} from '../TableContext.js';
import {isRowSelectionPredicateRejected} from '../tableSelectionUtils.js';

export interface TableSelectRowCheckboxProps<T> extends Omit<CheckboxProps, 'checked' | 'indeterminate' | 'onChange'> {
    row: Row<T>;
}

export type TableSelectRowCheckboxStylesNames = 'selectRowCheckbox';

/**
 * A checkbox that toggles the selection of a single row.
 * Shift-clicking selects all selectable rows between the previous selection interaction and this one.
 * Read-only when row selection is disabled but a selection is displayed.
 */
export const TableSelectRowCheckbox = <T,>({
    row,
    className,
    style,
    onClick,
    onDoubleClick,
    ...props
}: TableSelectRowCheckboxProps<T>) => {
    const {getStyles, selectionCheckboxesVisible, handleRowSelection, store} = useTableContext<T>();

    if (!selectionCheckboxesVisible || isRowSelectionPredicateRejected(row, store)) {
        return null;
    }

    const readOnly = !row.getCanSelect();
    const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
        event.stopPropagation();
        handleRowSelection(row, event.shiftKey);
        onClick?.(event);
    };

    return (
        <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={() => undefined}
            readOnly={readOnly}
            flex={1}
            aria-label="Select row"
            onClick={handleClick}
            onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onDoubleClick?.(event);
            }}
            {...getStyles('selectRowCheckbox', {className, style})}
            {...props}
        />
    );
};
