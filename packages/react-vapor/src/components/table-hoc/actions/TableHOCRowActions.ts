import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';

export const TableHOCRowActionsType = {
    add: 'ADD_TABLE_ROW',
    remove: 'REMOVE_TABLE_ROW',
    select: 'SELECT_TABLE_ROW',
    deselectAll: 'DESELECT_ALL_TABLE_ROW',
    toggleCollapsible: 'TOGGLE_TABLE_COLLAPSIBLE_ROW',
};

export interface ITableRowAddPayload extends BasePayload {
    tableId: string;
    isSelected?: boolean;
}

const addTableRow = (id: string, tableId: string): IReduxAction<ITableRowAddPayload> => ({
    type: TableHOCRowActionsType.add,
    payload: {id, tableId},
});

const removeTableRow = (id: string, tableId?: string, isSelected?: boolean): IReduxAction<ITableRowAddPayload> => ({
    type: TableHOCRowActionsType.remove,
    payload: {id, tableId, isSelected},
});

export interface ITableRowSelectPayload extends BasePayload {
    isMulti?: boolean;
}

const selectRow = (id: string, isMulti: boolean = false): IReduxAction<ITableRowSelectPayload> => ({
    type: TableHOCRowActionsType.select,
    payload: {id, isMulti},
});

const deselectAllRows = (id: string): IReduxAction<ITableRowSelectPayload> => ({
    type: TableHOCRowActionsType.deselectAll,
    payload: {id},
});

export interface ITableRowToggleCollapsiblePayload extends BasePayload {
    opened?: boolean;
}

const toggleCollapsibleRow = (id: string, opened?: boolean): IReduxAction<ITableRowToggleCollapsiblePayload> => ({
    type: TableHOCRowActionsType.toggleCollapsible,
    payload: {id, opened},
});

export const TableHOCRowActions = {
    add: addTableRow,
    remove: removeTableRow,
    select: selectRow,
    deselectAll: deselectAllRows,
    toggleCollapsible: toggleCollapsibleRow,
};
