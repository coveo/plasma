import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';

export const TableRowActionsType = {
    add: 'ADD_TABLE_ROW',
    remove: 'REMOVE_TABLE_ROW',
    select: 'SELECT_TABLE_ROW',
    toggleCollapsible: 'TOGGLE_TABLE_COLLAPSIBLE_ROW',
};

export interface ITableRowAddPayload extends BasePayload {
    tableId: string;
}

const addTableRow = (id: string, tableId: string): IReduxAction<ITableRowAddPayload> => ({
    type: TableRowActionsType.add,
    payload: {id, tableId},
});

const removeTableRow = (id: string): IReduxAction<BasePayload> => ({
    type: TableRowActionsType.remove,
    payload: {id},
});

export interface ITableRowSelectPayload extends BasePayload {
    isMulti?: boolean;
}

const selectRow = (id: string, isMulti: boolean = false): IReduxAction<ITableRowSelectPayload> => ({
    type: TableRowActionsType.select,
    payload: {id, isMulti},
});

export interface ITableRowToggleCollapsiblePayload extends BasePayload {
    opened?: boolean;
}

const toggleCollapsibleRow = (id: string, opened?: boolean): IReduxAction<ITableRowToggleCollapsiblePayload> => ({
    type: TableRowActionsType.toggleCollapsible,
    payload: {id, opened},
});

export const TableRowActions = {
    add: addTableRow,
    remove: removeTableRow,
    select: selectRow,
    toggleCollapsible: toggleCollapsibleRow,
};
