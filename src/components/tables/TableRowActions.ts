import { IReduxAction } from '../../utils/ReduxUtils';

export const TableRowActions = {
  add: 'ADD_ROW',
  remove: 'REMOVE_ROW',
  toggle: 'TOGGLE_ROW'
};

export interface ITableRowActionPayload {
  id: string;
}

export const addRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.add,
  payload: {
    id
  }
});

export const removeRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.remove,
  payload: {
    id
  }
});

export const toggleRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.toggle,
  payload: {
    id
  }
});
