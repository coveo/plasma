import { TableSortingOrder } from './TableConstants';
import { TableHeaderCellActions } from './TableHeaderCellActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import * as _ from 'underscore';

const {
    ASCENDING,
  DESCENDING,
  UNSORTED,
} = TableSortingOrder;

export interface ITableHeaderCellState {
  id: string;
  tableId: string;
  sorted: TableSortingOrder;
}

export interface ITableHeaderCellsState {
  [id: string]: ITableHeaderCellState;
}

export const tableHeaderCellInitialState: ITableHeaderCellState = {
  id: undefined,
  tableId: undefined,
  sorted: TableSortingOrder.UNSORTED,
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
        sorted: UNSORTED,
      };
    case TableHeaderCellActions.sortFromHeaderCell:
      if (state.id !== action.payload.id) {
        return state.tableId === action.payload.tableId
          ? _.extend({}, state, { sorted: UNSORTED })
          : state;
      }

      debugger;
      return _.contains([UNSORTED, DESCENDING], state.sorted)
        ? _.extend({}, state, { sorted: ASCENDING })
        : _.extend({}, state, { sorted: DESCENDING });
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
      const newState = _.extend({}, state);
      delete newState[action.payload.id];
      return newState;
    case TableHeaderCellActions.sortFromHeaderCell:
      return _.mapObject(
        state,
        (headerCell: ITableHeaderCellState) => tableHeaderCellReducer(headerCell, action),
      );
    default:
      return state;
  }
};
