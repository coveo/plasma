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
        case TableRowActions.select:
            if (state.tableId === action.payload.tableId) {
                return state.id === action.payload.id
                    ? {...state, selected: true, opened: !!action.payload.isCollapsible && !state.opened}
                    : {...state, selected: false, opened: false};
            }
        case TableRowActions.unselectAll:
            if (state.tableId === action.payload.tableId) {
                return {...state, selected: false, opened: false};
            }
        default:
            return state;
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
        case TableRowActions.select:
        case TableRowActions.unselectAll:
            return state.map((row: ITableRowState) => tableRowReducer(row, action));
        default:
            return state;
    }
};
