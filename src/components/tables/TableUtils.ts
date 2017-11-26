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
  getChildComponentId(tableId, TableChildComponent.LOADING_ACTION_BAR),
  getChildComponentId(tableId, TableChildComponent.LOADING_TABLE),
  getChildComponentId(tableId, TableChildComponent.LOADING_NAVIGATION),
]);

export const convertCollectionToTableData = (
  collection: { [attribute: string]: any }[],
  attributeNameToUseAsId: string,
): ITableData => collection
  .reduce(
  (tableData: ITableData, model: { [attribute: string]: any }): ITableData => ({
    byId: {
      ...tableData.byId,
      [model[attributeNameToUseAsId]]: {
        id: model[attributeNameToUseAsId],
        ...model,
      },
    },
    allIds: [...tableData.allIds, model[attributeNameToUseAsId]],
    displayedIds: [...tableData.displayedIds, model[attributeNameToUseAsId]],
  }),
  { byId: {}, allIds: [], displayedIds: [] },
) as ITableData;
