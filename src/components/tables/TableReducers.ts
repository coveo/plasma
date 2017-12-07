import { getTableChildComponentId } from './TableUtils';
import { TableActions } from './TableActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import * as _ from 'underscore';
import {
  DEFAULT_TABLE_DATA,
  TableSortingOrder,
  TableChildComponent,
} from './TableConstants';
import { LoadingActions } from '../loading/LoadingActions';
import { TableHeaderCellActions } from './TableHeaderCellActions';
import { ITablePredicate } from './Table';

export interface ITableData {
  byId: {
    [id: string]: {
      id: string;
      [attribute: string]: any;
    };
  };
  allIds: string[]; // useful to loop over all ids
  displayedIds: string[]; // will be the data displayed in the table
  totalEntries: number;
  totalPages: number;
}

export interface ITablesState {
  [id: string]: ITableState;
}

export type attributeName = any;
export type attributeValue = any;

export interface ITableCompositeState {
  id: string;
  data: ITableData;
  isInError: boolean;
  isLoading: boolean;
  filter: string;
  page: number;
  perPage: number;
  sortState: {
    attribute: attributeName;
    order: TableSortingOrder;
  };
  predicates: {
    [attributeNameAssociatedToPredicate: string]: attributeValue;
  };
}

export interface ITableState {
  id: string;
  data: ITableData;
  isInError: boolean;
  isLoading: boolean;
  filterId: string;
  paginationId: string;
  perPageId: string;
  predicateIds: string[];
  tableHeaderCellId: string;
}

export const tableInitialState: ITableState = {
  id: undefined,
  data: DEFAULT_TABLE_DATA,
  isInError: false,
  isLoading: false,
  paginationId: undefined,
  perPageId: undefined,
  filterId: undefined,
  predicateIds: [],
  tableHeaderCellId: undefined,
};

export const tablesInitialState: { [tableId: string]: ITableState; } = {};

export const tableReducer = (
  state: ITableState = tableInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): ITableState => {
  switch (action.type) {
    case TableActions.modifyState:
      return action.payload.TableStateModifier(state);
    case TableActions.inError:
      return {
        ...state,
        isInError: action.payload.isInError,
      };
    case LoadingActions.turnOn:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActions.turnOff:
      return {
        ...state,
        isLoading: false,
      };
    case TableHeaderCellActions.sort:
      return {
        ...state,
        tableHeaderCellId: action.payload.id,
      };
    default:
      return state;
  }
};

export const tablesReducer = (tablesState = tablesInitialState, action: IReduxAction<IReduxActionsPayload>) => {
  switch (action.type) {
    case TableActions.add:
      return {
        ...tablesState,
        [action.payload.id]: {
          ...tableInitialState,
          id: action.payload.id,
          data: action.payload.initialTableData,
          perPageId: getTableChildComponentId(action.payload.id, TableChildComponent.PER_PAGE),
          paginationId: getTableChildComponentId(action.payload.id, TableChildComponent.PAGINATION),
          filterId: getTableChildComponentId(action.payload.id, TableChildComponent.FILTER),
          predicateIds: action.payload.predicates.map((predicate: ITablePredicate) =>
            `${getTableChildComponentId(action.payload.id, TableChildComponent.PREDICATE)}${predicate.attributeName}`),
        },
      };
    case TableActions.remove:
      return _.omit(tablesState, action.payload.id);
  }

  // all child ids contain their related table id
  const tableId = _.findKey(
    tablesState,
    (tableState: ITableState, currentTableId: string) =>
      (action.payload && action.payload.id || '').indexOf(currentTableId) >= 0,
  );

  return tableId
    ? { ...tablesState, [tableId]: tableReducer(tablesState[tableId], action) }
    : tablesState;
};
