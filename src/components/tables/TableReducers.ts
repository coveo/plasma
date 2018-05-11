import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {LoadingActions} from '../loading/LoadingActions';
import {ITablePredicate} from './Table';
import {ITableActionPayload, TableActions} from './TableActions';
import {
    DEFAULT_TABLE_DATA,
    TableChildComponent,
    TableSortingOrder,
} from './TableConstants';
import {TableHeaderCellActions} from './TableHeaderCellActions';
import {getTableChildComponentId} from './TableUtils';

export interface ITableById {
    [id: string]: {
        id: string;
        [attribute: string]: any;
    };
}

export interface ITableData {
    byId: ITableById;
    allIds: string[]; // useful to loop over all ids
    displayedIds: string[]; // will be the data displayed in the table
    totalEntries: number;
    totalPages: number;
    selectedIds?: string[];
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
    from: Date;
    to: Date;
    actions?: IActionOptions[];
}

export interface ITableState {
    id: string;
    data: ITableData;
    isInError: boolean;
    isLoading: boolean;
    filterId: string;
    datePickerId: string;
    datePickerRangeId: string;
    paginationId: string;
    perPageId: string;
    predicateIds: string[];
    tableHeaderCellId: string;
    yPosition: number;
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
    datePickerId: undefined,
    datePickerRangeId: undefined,
    yPosition: undefined,
};

export const tablesInitialState: {[tableId: string]: ITableState;} = {};

export const updateSelectedIDs = (state: ITableState, oldSelectedIds: string[]): ITableState => {

    debugger;
    const newSelectedIds = _.reject(oldSelectedIds, (selectedId: string) => !_.contains(state.data.displayedIds, selectedId));
    return {
        ...state,
        data: {
            ...state.data,
            selectedIds: newSelectedIds,
        },
    };
};

export const tableReducer = (
    state: ITableState = tableInitialState,
    action: IReduxAction<ITableActionPayload>,
): ITableState => {
    switch (action.type) {
        case TableActions.add:
            return {
                ...tableInitialState,
                id: action.payload.id,
                data: action.payload.initialTableData,
                perPageId: getTableChildComponentId(action.payload.id, TableChildComponent.PER_PAGE),
                paginationId: getTableChildComponentId(action.payload.id, TableChildComponent.PAGINATION),
                filterId: getTableChildComponentId(action.payload.id, TableChildComponent.FILTER),
                predicateIds: action.payload.predicates.map((predicate: ITablePredicate) =>
                    `${getTableChildComponentId(action.payload.id, TableChildComponent.PREDICATE)}${predicate.attributeName}`),
                datePickerId: getTableChildComponentId(action.payload.id, TableChildComponent.DATEPICKER),
                datePickerRangeId: getTableChildComponentId(action.payload.id, TableChildComponent.DATEPICKER_RANGE),
            };
        case TableActions.modifyState:
            debugger;
            const selectedIds: string[] = state.data && state.data.selectedIds ? state.data.selectedIds : [];
            return updateSelectedIDs(action.payload.tableStateModifier(state), selectedIds);
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
        case TableActions.updateSelectedIds:
            debugger;
            return {
                ...state,
                data: {
                    ...state.data,
                    selectedIds: action.payload.hasMultipleSelectedRow
                        ? _.union(state.data.selectedIds, action.payload.selectedIds)
                        : action.payload.selectedIds.slice(0, 1),
                },
            };
        default:
            return state;
    }
};

export const tablesReducer = (tablesState = tablesInitialState, action: IReduxAction<ITableActionPayload | any>) => {
    switch (action.type) {
        case TableActions.add:
            return {
                ...tablesState,
                [action.payload.id]: tableReducer(undefined, action),
            };
        case TableActions.remove:
            return _.omit(tablesState, action.payload.id);
        default:
            const currentTableId = _.contains([LoadingActions.turnOn, LoadingActions.turnOff], action.type)
                ? _.chain(action.payload.ids).intersection(_.keys(tablesState)).first().value()
                : _.findKey(tablesState, (tableState, tableId: string) => contains(action.payload && action.payload.id, tableId));

            return currentTableId
                ? {...tablesState, [currentTableId]: tableReducer(tablesState[currentTableId], action)}
                : tablesState;
    }
};
