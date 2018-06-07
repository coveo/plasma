import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ITableRowActionPayload, TableRowActions} from './TableRowActions';

export interface ITableRowState {
    id: string;
    opened: boolean;
    selected: boolean;
    tableId?: string;
    rowId?: string;
}

export const tableRowInitialState: ITableRowState = {id: undefined, opened: undefined, selected: undefined};
export const tableRowsInitialState: ITableRowState[] = [];

export const tableRowReducer = (state: ITableRowState = tableRowInitialState, action: IReduxAction<ITableRowActionPayload>): ITableRowState => {
    switch (action.type) {
        case TableRowActions.add:
            return {
                id: action.payload.id,
                tableId: action.payload.tableId,
                rowId: action.payload.rowId,
                opened: false,
                selected: false,
            };
        case TableRowActions.toggleOpen:
            return state.tableId === action.payload.tableId
                ? {...state, opened: state.id === action.payload.id && !state.opened}
                : state;
        case TableRowActions.select:
            return state.tableId === action.payload.tableId
                ? {...state, selected: state.id === action.payload.id}
                : state;
        case TableRowActions.unselectAll:
            return state.tableId === action.payload.tableId
                ? {...state, selected: false, opened: false}
                : state;
        default: return state;
    }
};

export const tableRowsReducer = (state: ITableRowState[] = tableRowsInitialState, action: IReduxAction<ITableRowActionPayload>): ITableRowState[] => {
    switch (action.type) {
        case TableRowActions.add:
            return [
                ...state,
                tableRowReducer(undefined, action),
            ];
        case TableRowActions.remove:
            return _.reject(state, (row: ITableRowState) => {
                return action.payload.id === row.id;
            });
        case TableRowActions.toggleOpen:
        case TableRowActions.select:
        case TableRowActions.unselectAll:
            return state.map((row: ITableRowState) => tableRowReducer(row, action));
        default:
            return state;
    }
};
