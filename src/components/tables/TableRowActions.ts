import {IReduxAction} from '../../utils/ReduxUtils';

export const TableRowActions = {
    add: 'ADD_ROW',
    remove: 'REMOVE_ROW',
    select: 'SELECT_ROW',
    unselectAll: 'UNSELECT_ALL_ROW',
};

export interface ITableRowActionPayload {
    id?: string;
    isCollapsible?: boolean;
    tableId?: string;
    rowId?: string;
}

export const addRow = (id: string, tableId?: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.add,
    payload: {
        id,
        tableId,
    },
});

export const removeRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.remove,
    payload: {
        id,
    },
});

export const selectRow = (id: string, isCollapsible?: boolean, tableId?: string, rowId?: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.select,
    payload: {
        id,
        isCollapsible,
        tableId,
        rowId,
    },
});

export const unselectAllRows = (tableId?: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.unselectAll,
    payload: {
        tableId,
    },
});
