import { IReduxAction } from '../../utils/ReduxUtils';
import { TableRowActions } from './TableRowActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import * as _ from 'underscore';

export interface ITableRowState {
  id: string;
  opened: boolean;
}

export const tableRowInitialState: ITableRowState = { id: undefined, opened: undefined };
export const tableRowsInitialState: ITableRowState[] = [];

export const tableRowReducer = (state: ITableRowState = tableRowInitialState, action: IReduxAction<IReduxActionsPayload>): ITableRowState => {
  switch (action.type) {
    case TableRowActions.add:
      return {
        id: action.payload.id,
        opened: false
      };
    case TableRowActions.toggle:
      if (state.id !== action.payload.id) {
        return _.extend({}, state, {
          opened: false
        });
      }
      return _.extend({}, state, {
        opened: !state.opened
      });
    default:
      return state;
  }
};

export const tableRowsReducer = (state: ITableRowState[] = tableRowsInitialState, action: IReduxAction<IReduxActionsPayload>): ITableRowState[] => {
  switch (action.type) {
    case TableRowActions.add:
      return [
        ...state,
        tableRowReducer(undefined, action)
      ];
    case TableRowActions.remove:
      return _.reject(state, (row: ITableRowState) => {
        return action.payload.id === row.id;
      });
    case TableRowActions.toggle:
      return state.map((row: ITableRowState) => tableRowReducer(row, action));
    default:
      return state;
  }
};
