import { getNextTableSortingOrder } from './TableUtils';
import { TableActions } from './TableActions';
import { TableRowActions } from './TableRowActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import { DropdownSearchActions } from '../dropdownSearch/DropdownSearchActions';
import { FilterActions } from '../filterBox/FilterBoxActions';
import { PaginationActions } from '../navigation/pagination/NavigationPaginationActions';
import { PerPageActions } from '../navigation/perPage/NavigationPerPageActions';
import * as _ from 'underscore';
import {
  TableSortingOrder,
  TABLE_ID_PREFIX,
  TABLE_PREDICATE_ID_PREFIX,
} from './TableConstants';
import { LoadingActions } from '../loading/LoadingActions';
import { TableHeaderCellActions } from './TableHeaderCellActions';

export const generateTableId = (): string => _.uniqueId(TABLE_ID_PREFIX);

export const DEFAULT_TABLE_DATA: ITableData = Object.freeze({ byId: {}, allIds: [], displayedIds: [], totalEntries: 0, totalPages: 0, });

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

export interface ITableState {
  id: string;
  data: ITableData;
  isInError: boolean;
  isLoading: boolean;
  filter: string;
  page: number;
  perPage: number;
  selectedRowId: string;
  sortState: {
    attribute: attributeName;
    order: TableSortingOrder;
  };
  predicates: {
    [attributeNameAssociatedToPredicate: string]: attributeValue;
  };
}

export const tableInitialState: ITableState = {
  id: undefined,
  data: DEFAULT_TABLE_DATA,
  isInError: false,
  isLoading: false,
  filter: '',
  page: 0,
  perPage: 10,
  selectedRowId: '',
  sortState: {
    attribute: undefined,
    order: TableSortingOrder.UNSORTED,
  },
  predicates: {},
};

export const tablesInitialState: { [tableId: string]: ITableState; } = {};

export const tableReducer = (
  state: ITableState = tableInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): ITableState => {
  switch (action.type) {
    case PaginationActions.changePage:
    case PaginationActions.reset:
      return {
        ...state,
        page: action.payload.pageNb,
      };
    case PerPageActions.change:
      return {
        ...state,
        perPage: action.payload.perPage,
        page: 0,
      };
    case TableActions.inError:
      return {
        ...state,
        isInError: true,
      };
    case TableActions.modifyState:
      return action.payload.tableStateModifyer(state);
    case FilterActions.filterThrough:
      return {
        ...state,
        filter: action.payload.filterText,
        page: 0,
      };
    case DropdownSearchActions.select:
      // the attribute name related to the predicate is stored in the dropdown id as follows
      // "<tableid-prefix><predicate-predix><attributeName>"
      const attributeName = action.payload.id.split(TABLE_PREDICATE_ID_PREFIX)[1];
      return {
        ...state,
        predicates: {
          ...state.predicates,
          [attributeName]: action.payload.addedSelectedOption.value,
        },
        page: 0,
      };

    case TableRowActions.select:
      return {
        ...state,
        selectedRowId: action.payload.id,
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
    case TableHeaderCellActions.sortFromHeaderCell:
      const nextSortingOrder = action.payload.attributeToSort === state.sortState.attribute
        ? getNextTableSortingOrder(state.sortState.order)
        : TableSortingOrder.ASCENDING;

      return {
        ...state,
        sortState: {
          attribute: action.payload.attributeToSort,
          order: nextSortingOrder,
        },
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
          perPage: action.payload.initialPerPage,
          data: action.payload.initialTableData,
        },
      };
    case TableActions.remove:
      return _.omit(tablesState, '');
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
