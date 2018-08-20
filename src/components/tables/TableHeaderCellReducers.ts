import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {TableActions} from './TableActions';
import {TableSortingOrder} from './TableConstants';
import {TableHeaderCellActions} from './TableHeaderCellActions';
import {getNextTableSortingOrder} from './TableUtils';

export interface ITableHeaderCellState {
    id: string;
    tableId: string;
    sorted: TableSortingOrder;
    attributeToSort?: string;
}

export interface ITableHeaderCellsState {
    [id: string]: ITableHeaderCellState;
}

export const tableHeaderCellInitialState: ITableHeaderCellState = {
    id: undefined,
    tableId: undefined,
    sorted: TableSortingOrder.UNSORTED,
    attributeToSort: undefined,
};

export const tableHeaderCellsInitialState: ITableHeaderCellsState = {};

export const tableHeaderCellReducer = (
    state: ITableHeaderCellState = tableHeaderCellInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ITableHeaderCellState => {
    switch (action.type) {
        case TableHeaderCellActions.add:
            return {
                id: action.payload.id,
                tableId: action.payload.tableId,
                sorted: TableSortingOrder.UNSORTED,
                attributeToSort: action.payload.attributeToSort,
            };
        case TableHeaderCellActions.sort:
            if (state.id !== action.payload.id) {
                return state.tableId === action.payload.tableId
                    ? {...state, sorted: TableSortingOrder.UNSORTED}
                    : state;
            }
            return state.tableId === action.payload.tableId
                ? {...state, sorted: getNextTableSortingOrder(state.sorted)}
                : state;
        case TableActions.addTableDataEntry:
            return state.tableId === action.payload.id
                ? {...state, sorted: TableSortingOrder.UNSORTED}
                : state;
        default:
            return state;
    }
};

export const tableHeaderCellsReducer = (
    state: ITableHeaderCellsState = tableHeaderCellsInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): ITableHeaderCellsState => {
    switch (action.type) {
        case TableHeaderCellActions.add:
            return {
                ...state,
                [action.payload.id]: tableHeaderCellReducer(undefined, action),
            };
        case TableHeaderCellActions.remove:
            return _.omit(state, action.payload.id);
        case TableHeaderCellActions.sort:
        case TableActions.addTableDataEntry:
            return _.mapObject(
                state,
                (headerCell: ITableHeaderCellState) => tableHeaderCellReducer(headerCell, action),
            );
        default:
            return state;
    }
};
