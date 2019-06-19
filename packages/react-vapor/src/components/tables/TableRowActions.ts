import {IReduxAction} from '../../utils/ReduxUtils';

export const TableRowActions = {
    add: 'ADD_ROW',
    remove: 'REMOVE_ROW',
    select: 'SELECT_ROW',
    toggleOpen: 'TOGGLE_COLLAPSE_ROW',
    unselectAll: 'UNSELECT_ALL_ROW',
};

export interface ITableRowActionPayload {
    id?: string;
    tableId?: string;
    rowId?: string;
    opened?: boolean;
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

export const selectRow = (id: string, tableId?: string, rowId?: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.select,
    payload: {
        id,
        tableId,
        rowId,
    },
});

export const toggleRowOpened = (
    id: string,
    tableId?: string,
    rowId?: string,
    opened?: boolean
): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.toggleOpen,
    payload: {
        id,
        tableId,
        rowId,
        opened,
    },
});

export const unselectAllRows = (tableId?: string): IReduxAction<ITableRowActionPayload> => ({
    type: TableRowActions.unselectAll,
    payload: {
        tableId,
    },
});
