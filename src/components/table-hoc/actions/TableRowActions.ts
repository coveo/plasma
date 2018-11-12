import {IReduxAction} from '../../../utils/ReduxUtils';

export const TableRowActionsType = {
    add: 'ADD_TABLE_ROW',
    remove: 'REMOVE_TABLE_ROW',
    select: 'SELECT_TABLE_ROW',
};

export interface ITableRowAddPayload {
    id: string;
    tableId: string;
}

const addTableRow = (id: string, tableId: string): IReduxAction<ITableRowAddPayload> => ({
    type: TableRowActionsType.add,
    payload: {id, tableId},
});

export interface ITableRowRemovePayload {
    id: string;
}

const removeTableRow = (id: string): IReduxAction<ITableRowRemovePayload> => ({
    type: TableRowActionsType.remove,
    payload: {id},
});

export interface ITableRowSelectPayload {
    id: string;
    isMulti?: boolean;
}

const selectRow = (id: string, isMulti: boolean = false): IReduxAction<ITableRowSelectPayload> => ({
    type: TableRowActionsType.select,
    payload: {id, isMulti},
});

export const TableRowActions = {
    addTableRow,
    removeTableRow,
    selectRow,
};
