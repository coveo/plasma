import {useClickOutside} from '@mantine/hooks';
import {functionalUpdate, RowSelectionState, Table} from '@tanstack/table-core';
import isEqual from 'fast-deep-equal';

import {RowSelectionWithData, TableProps, TableState} from './Table.types';

export const useRowSelection = <T>(
    table: Table<T>,
    {
        onRowSelectionChange,
        multiRowSelectionEnabled,
    }: Pick<TableProps<T>, 'onRowSelectionChange' | 'multiRowSelectionEnabled'>
) => {
    const outsideClickRef = useClickOutside(() => {
        if (!multiRowSelectionEnabled) {
            clearSelection();
        }
    });

    table.setOptions((prev) => ({
        ...prev,
        onRowSelectionChange: (rowSelectionUpdater) => {
            table.setState((old) => {
                const newRowSelection = functionalUpdate(
                    rowSelectionUpdater,
                    old['rowSelection']
                ) as RowSelectionWithData<T>;

                if (isEqual(old['rowSelection'], newRowSelection)) {
                    return old;
                }

                const rows = table.getRowModel().rowsById;

                Object.keys(newRowSelection).forEach((rowId) => {
                    if (newRowSelection[rowId] === true) {
                        if (!rows[rowId]) {
                            console.error(
                                'The table was not initialized properly, the rowSelection state should contain an object of type Record<string, TData>.'
                            );
                        }
                        newRowSelection[rowId] = rows[rowId]?.original ?? (true as T);
                    }
                });

                onRowSelectionChange?.(Object.values(newRowSelection));

                return {
                    ...old,
                    rowSelection: newRowSelection as RowSelectionState,
                };
            });
        },
    }));

    const clearSelection = () => {
        table.resetRowSelection(true);
    };

    const getSelectedRows = () => Object.values((table.getState() as TableState<T>).rowSelection);

    const getSelectedRow = () => getSelectedRows()[0] ?? null;

    return {clearSelection, getSelectedRow, getSelectedRows, outsideClickRef};
};
