import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {LoadingActions} from '../loading/LoadingActions';
import {ITablePredicate} from './Table';
import {TableActions} from './TableActions';
import {
    DEFAULT_TABLE_DATA,
    TableChildComponent,
    TableSortingOrder,
} from './TableConstants';
import {TableHeaderCellActions} from './TableHeaderCellActions';
import {getTableChildComponentId} from './TableUtils';

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
    from: Date;
    to: Date;
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

export const tableReducer = (
    state: ITableState = tableInitialState,
    action: IReduxAction<IReduxActionsPayload>,
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
            return action.payload.tableStateModifier(state);
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
