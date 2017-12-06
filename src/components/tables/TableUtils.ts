import { TableSortingOrder, TableChildComponent } from './TableConstants';
import * as _ from 'underscore';

const {
  ASCENDING,
  DESCENDING,
  UNSORTED,
  } = TableSortingOrder;

export const getNextTableSortingOrder = (sortedState: TableSortingOrder): TableSortingOrder =>
  _.contains([UNSORTED, DESCENDING], sortedState)
    ? ASCENDING
    : DESCENDING;

export const getTableChildComponentId = (tableId: string, childComponent: TableChildComponent): string =>
  `${tableId}${childComponent}`;

export const getTableLoadingIds = (tableId: string): string[] => ([
  tableId,
  `loading-${getTableChildComponentId(tableId, TableChildComponent.NAVIGATION)}`,
]);
