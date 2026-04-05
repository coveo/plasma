import {Checkbox, Tooltip} from '@mantine/core';
import {CellContext, ColumnDef} from '@tanstack/table-core';
import {ChangeEvent, FunctionComponent, MouseEvent, useRef} from 'react';
import {useTableContext} from '../TableContext.js';

const SelectableCheckbox: FunctionComponent<{info: CellContext<unknown, unknown>}> = ({info}) => {
    const {row} = info;
    const {table, lastSelectedRowIndex, getRowCanEdit, multiRowSelectionMode} = useTableContext();
    const isShiftClickRef = useRef(false);

    const canEdit = getRowCanEdit(row.original, row.index, row);

    // Non-editable rows cannot be multi-selected
    if (!canEdit) {
        // In input mode, show a disabled checkbox so the user sees why the row can't be selected
        if (multiRowSelectionMode === 'input') {
            return <Checkbox checked={false} disabled flex={1} aria-label="Select row" />;
        }
        return null;
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        if (event.shiftKey && lastSelectedRowIndex.current !== null) {
            isShiftClickRef.current = true;

            const currentIndex = row.index;
            const start = Math.min(lastSelectedRowIndex.current, currentIndex);
            const end = Math.max(lastSelectedRowIndex.current, currentIndex);
            const rows = table.getRowModel().rows;

            for (let i = start; i <= end; i++) {
                const r = rows[i];
                if (getRowCanEdit(r.original, r.index, r)) {
                    r.toggleSelected(true);
                }
            }
            lastSelectedRowIndex.current = currentIndex;
        } else {
            isShiftClickRef.current = false;
            lastSelectedRowIndex.current = row.index;
        }
    };

    const handleChange = (_event: ChangeEvent<HTMLInputElement>) => {
        if (isShiftClickRef.current) {
            // Skip the default toggle — range selection was already handled in onClick
            isShiftClickRef.current = false;
            return;
        }
        row.toggleSelected();
    };

    return (
        <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={handleChange}
            onClick={handleClick}
            flex={1}
            aria-label="Select row"
            onDoubleClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
        />
    );
};

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
    size: 52, // 16px padding left + 20px checkbox + 16px padding right
    header: ({table}) => {
        const label = table.getIsAllRowsSelected() ? 'Unselect all from this page' : 'Select all from this page';
        return (
            <Tooltip label={label}>
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    indeterminate={table.getIsSomePageRowsSelected()}
                    onChange={table.getToggleAllPageRowsSelectedHandler()}
                    flex={1}
                    aria-label={label}
                />
            </Tooltip>
        );
    },
    cell: (info) => <SelectableCheckbox info={info} />,
};
