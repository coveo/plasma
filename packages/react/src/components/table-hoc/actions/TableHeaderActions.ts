import {IReduxAction} from '../../../utils/ReduxUtils';

export const TableHeaderActionTypes = {
    add: 'ADD_TABLE_HEADER',
    remove: 'REMOVE_TABLE_HEADER',
    sort: 'SORT_TABLE_HEADER',
};

export interface ITableHeaderBasePayload {
    id: string;
}

export interface ITableHeaderSortPayload extends ITableHeaderBasePayload {
    ascending: boolean;
}

export interface ITableHeaderAddPayload extends ITableHeaderBasePayload {
    tableId: string;
    isDefault: boolean;
}

const addTableHeader = (id: string, tableId: string, isDefault: boolean): IReduxAction<ITableHeaderAddPayload> => ({
    type: TableHeaderActionTypes.add,
    payload: {id, tableId, isDefault},
});

const removeTableHeader = (id: string): IReduxAction<ITableHeaderBasePayload> => ({
    type: TableHeaderActionTypes.remove,
    payload: {id},
});

const sortTable = (id: string, ascending?: boolean): IReduxAction<ITableHeaderSortPayload> => ({
    type: TableHeaderActionTypes.sort,
    payload: {id, ascending},
});

export const TableHeaderActions = {
    addTableHeader,
    removeTableHeader,
    sortTable,
};
