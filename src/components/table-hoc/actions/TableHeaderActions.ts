import {IReduxAction} from '../../../utils/ReduxUtils';

export const TableHeaderActionsType = {
    add: 'ADD_TABLE_HEADER',
    remove: 'REMOVE_TABLE_HEADER',
    sort: 'SORT_TABLE_HEADER',
};

export interface ITableHeaderAddPayload {
    id: string;
    tableId: string;
    isDefault: boolean;
}

const addTableHeader = (id: string, tableId: string, isDefault: boolean): IReduxAction<ITableHeaderAddPayload> => ({
    type: TableHeaderActionsType.add,
    payload: {id, tableId, isDefault},
});

export interface ITableHeaderRemovePayload {
    id: string;
}

const removeTableHeader = (id: string): IReduxAction<ITableHeaderRemovePayload> => ({
    type: TableHeaderActionsType.remove,
    payload: {id},
});

export interface ITableHeaderSortPayload {
    id: string;
}

const sortTable = (id: string): IReduxAction<ITableHeaderSortPayload> => ({
    type: TableHeaderActionsType.sort,
    payload: {id},
});

export const TableHeaderActions = {
    addTableHeader,
    removeTableHeader,
    sortTable,
};
