import {IReduxAction} from '../../utils/ReduxUtils';

export const TableHeaderCellActions = {
    add: 'ADD_HEADER_CELL',
    remove: 'REMOVE_HEADER_CELL',
    sort: 'SORT_FROM_HEADER_CELL',
};

export interface ITableHeaderCellActionPayload {
    id: string;
    attributeToSort?: string;
    tableId?: string;
}

export const addHeaderCell = (
    id: string,
    attributeToSort: string,
    tableId: string
): IReduxAction<ITableHeaderCellActionPayload> => ({
    type: TableHeaderCellActions.add,
    payload: {
        id,
        attributeToSort,
        tableId,
    },
});

export const removeHeaderCell = (id: string): IReduxAction<ITableHeaderCellActionPayload> => ({
    type: TableHeaderCellActions.remove,
    payload: {
        id,
    },
});

export const sortFromHeaderCell = (
    id: string,
    attributeToSort: string,
    tableId: string
): IReduxAction<ITableHeaderCellActionPayload> => ({
    type: TableHeaderCellActions.sort,
    payload: {
        id,
        attributeToSort,
        tableId,
    },
});
