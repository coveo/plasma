export enum TableSortingOrder {
  UNSORTED = 'UNSORTED',
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
};

export const TABLE_PREDICATE_DEFAULT_VALUE = 'ALL';

export const TABLE_ID_PREFIX = 'react-vapor-table-';
export const TABLE_PREDICATE_ID_PREFIX = 'predicate-';

export enum TableChildComponent {
  ACTION_BAR = 'action-bar',
  FILTER = 'filter',
  PAGINATION = 'pagination',
  PER_PAGE = 'per-page',
  LOADING_TABLE = 'loading-table',
  LOADING_ACTION_BAR = 'loading-action-bar',
  LOADING_NAVIGATION = 'loading-table',
  BLANKSLATE = 'blankslate',
  PREDICATE = 'predicate',
  TABLE_HEADER = 'table-header',
  TABLE_HEADER_CELL = 'table-header-cell',
  TABLE_HEADING_ROW = 'table-heading-row',
  TABLE_COLLAPSIBLE_ROW = 'table-collapsible-row',
  TABLE_ROW_WRAPPER = 'table-row-wrapper',
  LAST_UPDATED = 'last-updated',
}
