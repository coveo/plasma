import {IReduxAction} from '../../../utils/ReduxUtils';

export const TableWithPaginationActionsType = {
    add: 'ADD_TABLE_PAGINATION',
    remove: 'REMOVE_TABLE_PAGINATION',
    setCount: 'SET_COUNT_TABLE_PAGINATION',
};

export interface ITableWithPaginationBasePayload {
    id: string;
}

const add = (id: string): IReduxAction<ITableWithPaginationBasePayload> => ({
    type: TableWithPaginationActionsType.add,
    payload: {id},
});

const remove = (id: string): IReduxAction<ITableWithPaginationBasePayload> => ({
    type: TableWithPaginationActionsType.remove,
    payload: {id},
});

export interface ITableWithPaginationSetCountPayload extends ITableWithPaginationBasePayload {
    count: number;
}

const setCount = (id: string, count: number): IReduxAction<ITableWithPaginationSetCountPayload> => ({
    type: TableWithPaginationActionsType.setCount,
    payload: {id, count},
});

export const TableWithPaginationActions = {
    add,
    remove,
    setCount,
};
