import { IReduxAction } from '../../utils/ReduxUtils';

export const TableHeaderCellActions = {
  add: 'ADD_HEADER_CELL',
  remove: 'REMOVE_HEADER_CELL',
  sortFromHeaderCell: 'SORT_FROM_HEADER_CELL',
};

export interface ITableHeaderCellActionPayload {
  id: string;
  tableId?: string;
  attributeToSort?: string;
}

export const addHeaderCell = (id: string, tableId: string): IReduxAction<ITableHeaderCellActionPayload> => ({
  type: TableHeaderCellActions.add,
  payload: {
    id,
    tableId,
  },
});

export const removeHeaderCell = (id: string): IReduxAction<ITableHeaderCellActionPayload> => ({
  type: TableHeaderCellActions.remove,
  payload: {
    id,
  },
});

export const sortFromHeaderCell = (id: string, tableId: string, attributeToSort: string): IReduxAction<ITableHeaderCellActionPayload> => ({
  type: TableHeaderCellActions.sortFromHeaderCell,
  payload: {
    id,
    tableId,
    attributeToSort,
  },
});
