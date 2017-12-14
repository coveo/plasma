import { TableSortingOrder, TableChildComponent } from './TableConstants';
import * as _ from 'underscore';

const {
  ASCENDING,
  DESCENDING,
  UNSORTED,
} = TableSortingOrder;

export const getNextTableSortingOrder = (sortedState: TableSortingOrder): TableSortingOrder =>
  _.contains([UNSORTED, DESCENDING], sortedState) ? ASCENDING : DESCENDING;

export const getTableChildComponentId = (tableId: string, childComponent: TableChildComponent): string => {
  switch (childComponent) {
    case TableChildComponent.LOADING_NAVIGATION:
      return `loading-${tableId}${TableChildComponent.NAVIGATION}`;
    case TableChildComponent.PAGINATION:
      return `pagination-${tableId}${TableChildComponent.NAVIGATION}`;
    case TableChildComponent.PER_PAGE:
      return `${tableId}${TableChildComponent.NAVIGATION}`;
    default:
      return `${tableId}${childComponent}`;
  }
};

export const getTableLoadingIds = (tableId: string): string[] => ([
  tableId,
  getTableChildComponentId(tableId, TableChildComponent.ACTION_BAR),
  getTableChildComponentId(tableId, TableChildComponent.LOADING_NAVIGATION),
]);
