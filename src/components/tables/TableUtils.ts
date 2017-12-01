import { TableSortingOrder, TableChildComponent } from './TableConstants';
import * as _ from 'underscore';
import { ITableData } from './TableReducers';

const {
  ASCENDING,
  DESCENDING,
  UNSORTED,
  } = TableSortingOrder;

export const getNextTableSortingOrder = (sortedState: TableSortingOrder): TableSortingOrder =>
  _.contains([UNSORTED, DESCENDING], sortedState)
    ? ASCENDING
    : DESCENDING;

export const getChildComponentId = (tableId: string, childComponent: TableChildComponent): string =>
  `${tableId}${childComponent}`;

export const getLoadingIds = (tableId: string): string[] => ([
  getChildComponentId(tableId, TableChildComponent.LOADING_TABLE),
  `loading-${getChildComponentId(tableId, TableChildComponent.NAVIGATION)}`,
]);
