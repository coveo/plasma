import { ITableData } from './Table';
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

export interface ITableData {
  byId: {
    [id: string]: {
      id: string;
      [attribute: string]: any;
    };
  };
  allIds: string[];
  displayedIds: string[];
}

export interface ITablesState {
  [id: string]: ITableState;
}

export type attributeName = any;
export type attributeValue = any;

export interface ITableState {
  id: string;
  headingAttributes: string[];
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
  isLocked: boolean;
}

export const tableInitialState: ITableState = {
  id: undefined,
  headingAttributes: [],
  data: { byId: {}, allIds: [], displayedIds: [] },
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
  isLocked: false,
};

export const tablesInitialState: { [tableId: string]: ITableState; } = {};

export const tableReducer = (
  state: ITableState = tableInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): ITableState => {
  // all child ids are an extension of the original table id, thus should all contain it,
  if (!_.contains(action && action.payload && action.payload.id, state && state.id)) {
    return state;
  }

  // if (action.type === TableActions.toggleLock) {
  //   return {
  //     ...state,
  //     isLocked: action.payload.isLocked,
  //   };
  // } else if (!state.isLocked) {
  switch (action.type) {
    case TableActions.add:
      return {
        ...state,
        id: action.payload.id,
        data: action.payload.initialTableData,
        perPage: action.payload.initialPerPage,
      };
    case TableActions.inError:
      return {
        ...state,
        isInError: true,
      };
    case TableActions.modifyState:
      return action.payload.tableStateModifyer(state, action.payload.newTableData);
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
    case FilterActions.filterThrough:
      return {
        ...state,
        filter: action.payload.filterText,
      };
    case PerPageActions.change:
      return {
        ...state,
        perPage: action.payload.perPage,
        page: 0,
      };
    case PaginationActions.changePage:
      return {
        ...state,
        page: action.payload.pageNb,
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
  // } else {
  //   return state;
  // }
};

export const tablesReducer = (tablesState = tablesInitialState, action: IReduxAction<IReduxActionsPayload>) => {
  // all child ids are an extension of the original table id, thus should all contain it,


  switch (action.type) {
    case TableActions.add:
      return {
        ...tablesState,
        [action.payload.id]: {
          ...tableInitialState,
          id: action.payload.id,
          data: action.payload.initialTableData,
          perPage: action.payload.initialPerPage,
        },
      };
    case TableActions.remove:
      return _.omit(tablesState, '');
  }

  const tableId = _.findKey(
    tablesState,
    (tableState: ITableState, currentTableId: string) => (action.payload && action.payload.id || '').indexOf(currentTableId) === 0,
  );

  console.dir(tablesState[tableId]);

  return tableId
    ? { ...tablesState, [tableId]: tableReducer(tablesState[tableId], action) }
    : tablesState;
};
