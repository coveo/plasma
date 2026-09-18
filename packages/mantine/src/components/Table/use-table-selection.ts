import {useClickOutside} from '@mantine/hooks';
import {type Row, type RowSelectionState, type Table} from '@tanstack/table-core';
import isEqual from 'fast-deep-equal';
import {useCallback, useEffect, useRef} from 'react';
import {getRangeSelection, selectRange} from './tableSelectionUtils.js';
import {type TableState, type TableStore} from './use-table.js';

interface UseTableSelectionOptions<T> {
    additionalRootNodes: HTMLElement[];
    data: T[] | null;
    table: Table<T>;
    store: TableStore<T>;
}

type UseControlledTableSelectionOptions<T> = Pick<UseTableSelectionOptions<T>, 'data' | 'table' | 'store'>;

const useControlledTableSelection = <T>({data, table, store}: UseControlledTableSelectionOptions<T>) => {
    table.setOptions((prev) => ({
        ...prev,
        state: {
            ...prev.state,
            rowSelection: store.state.rowSelection as RowSelectionState,
        },
        onRowSelectionChange: (rowSelectionUpdater) => {
            store.setRowSelection((old) => {
                const newRowSelection = (
                    rowSelectionUpdater instanceof Function
                        ? rowSelectionUpdater(old as RowSelectionState)
                        : rowSelectionUpdater
                ) as TableState<T>['rowSelection'];

                if (isEqual(old, newRowSelection)) {
                    return old;
                }

                const rows = table.getRowModel().rowsById;

                Object.keys(newRowSelection).forEach((rowId) => {
                    if (newRowSelection[rowId] === true) {
                        if (!rows[rowId]) {
                            console.error(
                                'The table was not initialized properly, the rowSelection state should contain an object of type Record<string, TData>.',
                            );
                        }
                        newRowSelection[rowId] = rows[rowId]?.original ?? (true as T);
                    }
                });

                return newRowSelection;
            });
        },
    }));

    useEffect(() => {
        // Update the selected rows data when the data prop changes
        if (store.getSelectedRows().length > 0) {
            store.setRowSelection((old) => {
                const rowsById = table.getRowModel().rowsById;
                const newSelection = {...old};
                Object.keys(old).forEach((rowId) => {
                    if (rowsById[rowId]) {
                        newSelection[rowId] = rowsById[rowId].original;
                    }
                });
                return isEqual(newSelection, old) ? old : newSelection;
            });
        }
    }, [data]);
};

export const useTableSelection = <T>({additionalRootNodes, data, table, store}: UseTableSelectionOptions<T>) => {
    useControlledTableSelection({data, table, store});

    const containerRef = useRef<HTMLDivElement>(null);
    const rangeSelectionAnchorRef = useRef<string | null>(null);
    const singleSelectOnlyRowIdRef = useRef<string | null>(null);

    const clearSelection = useCallback(() => {
        rangeSelectionAnchorRef.current = null;
        singleSelectOnlyRowIdRef.current = null;
        store.clearRowSelection();
    }, [store.clearRowSelection]);

    useEffect(() => {
        if (Object.keys(store.state.rowSelection).length === 0) {
            rangeSelectionAnchorRef.current = null;
            singleSelectOnlyRowIdRef.current = null;
        } else if (singleSelectOnlyRowIdRef.current && !store.state.rowSelection[singleSelectOnlyRowIdRef.current]) {
            singleSelectOnlyRowIdRef.current = null;
        }
    }, [store.state.rowSelection]);

    useClickOutside(
        () => {
            if (!store.multiRowSelectionEnabled && store.getSelectedRows().length > 0) {
                clearSelection();
            }
        },
        null,
        [containerRef.current, ...additionalRootNodes],
    );

    useEffect(() => {
        const clearRowSelection = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && store.rowSelectionEnabled && !store.rowSelectionForced) {
                clearSelection();
            }
        };

        document.addEventListener('keydown', clearRowSelection, true);
        return () => document.removeEventListener('keydown', clearRowSelection, true);
    }, [clearSelection, store.rowSelectionEnabled, store.rowSelectionForced]);

    const hasSingleSelectOnlySelection = () =>
        !!singleSelectOnlyRowIdRef.current ||
        table.getCoreRowModel().rows.some((row) => row.getIsSelected() && !row.getCanMultiSelect());

    const selectRowRange = (row: Row<T>) => {
        const clearCurrentSelection = hasSingleSelectOnlySelection();
        const rangeSelection = getRangeSelection<T, Row<T>>({
            row,
            rows: table.getRowModel().rows,
            anchorId: rangeSelectionAnchorRef.current,
        });

        store.setRowSelection((currentSelection) =>
            selectRange<T, Row<T>>(clearCurrentSelection ? {} : currentSelection, rangeSelection.rows),
        );
        singleSelectOnlyRowIdRef.current = null;
        rangeSelectionAnchorRef.current = rangeSelection.nextAnchorId;
    };

    const handleRowSelection = (row: Row<T>, rangeRequested: boolean) => {
        if (store.rowSelectionEnabled && row.getCanSelect()) {
            if (rangeRequested && store.multiRowSelectionEnabled && row.getCanMultiSelect()) {
                selectRowRange(row);
            } else {
                const rowWasSelected = row.getIsSelected();

                if (!store.rowSelectionForced || !rowWasSelected) {
                    const rowCanMultiSelect = row.getCanMultiSelect();
                    const replaceSingleSelectOnlyRow =
                        !rowWasSelected && rowCanMultiSelect && hasSingleSelectOnlySelection();

                    if (replaceSingleSelectOnlyRow) {
                        store.setRowSelection({[row.id]: row.original});
                    } else {
                        row.toggleSelected();
                    }

                    singleSelectOnlyRowIdRef.current = !rowWasSelected && !rowCanMultiSelect ? row.id : null;
                }
                rangeSelectionAnchorRef.current = row.id;
            }
        }
    };

    const handlePageSelection = (rows: Row<T>[], selected: boolean) => {
        const clearCurrentSelection = selected && hasSingleSelectOnlySelection();

        store.setRowSelection((currentSelection) => {
            const nextSelection = {...(clearCurrentSelection ? {} : currentSelection)};

            rows.forEach((row) => {
                if (selected) {
                    nextSelection[row.id] = row.original;
                } else {
                    delete nextSelection[row.id];
                }
            });

            return nextSelection;
        });

        if (selected) {
            singleSelectOnlyRowIdRef.current = null;
        }
    };

    return {containerRef, rangeSelectionAnchorRef, handleRowSelection, handlePageSelection};
};
