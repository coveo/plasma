import { IReduxAction } from '../../utils/ReduxUtils';

export const TableRowActions = {
  add: 'ADD_ROW',
  remove: 'REMOVE_ROW',
  select: 'SELECT_ROW'
};

export interface ITableRowActionPayload {
  id: string;
  isCollapsible?: boolean;
}

export const addRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.add,
  payload: {
    id,
  }
});

export const removeRow = (id: string): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.remove,
  payload: {
    id,
  }
});

export const selectRow = (id: string, isCollapsible?: boolean): IReduxAction<ITableRowActionPayload> => ({
  type: TableRowActions.select,
  payload: {
    id,
    isCollapsible,
  }
});
