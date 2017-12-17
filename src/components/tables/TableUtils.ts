import { TableSortingOrder, TableChildComponent, DEFAULT_TABLE_DATA } from './TableConstants';
import * as _ from 'underscore';
import { ITableRowData, IData } from './Table';

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

export type Model = { [key: string]: any };
export type Collection = Model[];

export const convertInitialCollectionToDataById = (collection: Collection, attributeNameForId: string): ITableRowData => {
  return collection.reduce((finalData: ITableRowData, model: Model) => {
    return {
      ...finalData,
      [model[attributeNameForId]]: {
        ...model,
        id: model[attributeNameForId],
        ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION: model.id,
      }
    };
  }, DEFAULT_TABLE_DATA.byId);
};

export const convertDataByIdToCollection = (dataById: ITableRowData, keepIdAttribute = true): Collection => {
  return _.values(dataById).map((data: IData) => {
    const model = {
      ...data,
      id: keepIdAttribute && (data.ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION || data.id),
    };
    delete (model as IData).ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION;

    return model;
  });
};
