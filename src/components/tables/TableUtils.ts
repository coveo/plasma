import { TableSortingOrder, TableChildComponents } from './TableConstants';
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

export const getChildComponentId = (tableId: string, childComponent: TableChildComponents): string =>
  `${tableId}${childComponent}`;

export const getLoadingIds = (tableId: string): string[] => ([
  getChildComponentId(tableId, TableChildComponents.LOADING_ACTION_BAR),
  getChildComponentId(tableId, TableChildComponents.LOADING_TABLE),
  getChildComponentId(tableId, TableChildComponents.LOADING_NAVIGATION),
]);
