import {functionalUpdate, Table} from '@tanstack/table-core';
import {useState} from 'react';

export const useRowSelection = <T>(table: Table<T>) => {
    const [rowSelection, setRowSelection] = useState<Record<string, T>>({});

    table.setOptions((prev) => ({
        ...prev,
        onRowSelectionChange: (rowSelectionUpdater) => {
            table.setState((old) => {
                const selectedRowsIds = functionalUpdate(rowSelectionUpdater, old['rowSelection']);
                setRowSelection((current) => {
                    const currentRowsById = table.getRowModel().rowsById;
                    return Object.keys(selectedRowsIds).reduce((memo, rowId) => {
                        if (current[rowId]) {
                            memo[rowId] = current[rowId];
                        } else {
                            memo[rowId] = currentRowsById[rowId].original;
                        }
                        return memo;
                    }, {} as Record<string, T>);
                });

                return {
                    ...old,
                    rowSelection: selectedRowsIds,
                };
            });
        },
    }));

    const clearSelection = () => {
        table.resetRowSelection(true);
    };

    const getSelectedRows = () => Object.values(rowSelection);

    const getSelectedRow = () => getSelectedRows()[0] ?? null;

    return {
        clearSelection,
        getSelectedRow,
        getSelectedRows,
    };
};
