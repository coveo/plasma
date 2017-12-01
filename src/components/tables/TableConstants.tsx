import { ITableData } from './TableReducers';

export enum TableSortingOrder {
  UNSORTED = 'UNSORTED',
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
};

export const DEFAULT_TABLE_DATA: ITableData = Object.freeze({ byId: {}, allIds: [], displayedIds: [], totalEntries: 0, totalPages: 0, });

export const TABLE_PREDICATE_DEFAULT_VALUE = 'ALL';

export const TABLE_ID_PREFIX = 'react-vapor-table-';
export const TABLE_PREDICATE_ID_PREFIX = 'predicate-';

export enum TableChildComponent {
  ACTION_BAR = 'action-bar',
  FILTER = 'filter',
  NAVIGATION = 'navigation',
  LOADING_TABLE = 'loading-table',
  LOADING_ACTION_BAR = 'loading-action-bar',
  LOADING_NAVIGATION = 'loading-table',
  BLANKSLATE = 'blankslate',
  PREDICATE = 'predicate',
  TABLE_HEADER = 'table-header',
  TABLE_HEADER_CELL = 'table-header-cell',
  TABLE_ROW_CELL = 'table-row-cell',
  TABLE_HEADING_ROW = 'table-heading-row',
  TABLE_COLLAPSIBLE_ROW = 'table-collapsible-row',
  TABLE_ROW_WRAPPER = 'table-row-wrapper',
  LAST_UPDATED = 'last-updated',
}
