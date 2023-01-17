import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {HOCTableRowState} from './reducers/TableRowReducers.js';
import {ITableWithSortState} from './reducers/TableWithSortReducers.js';
import {TableHOCUtils} from './utils/TableHOCUtils.js';

export interface TableSelectorsProps {
    id: string;
    data: any[];
    isServer?: boolean;
}

const initialTableSort: ITableWithSortState = {
    id: '',
    tableId: '',
    isAsc: true,
};

const isEmptyStateSet = (state: PlasmaState, ownProps: TableSelectorsProps): boolean => {
    const tablesHOC = state.tablesHOC;
    const tableHOC = tablesHOC?.find((table) => table.id === ownProps.id);

    return !!tableHOC?.emptyStateSet;
};

const isEmptyStateAlreadySet = (state: PlasmaState, ownProps: TableSelectorsProps): boolean => {
    const tablesHOC = state.tablesHOC;
    const tableHOC = tablesHOC?.find((table) => table.id === ownProps.id);

    return !_.isUndefined(tableHOC?.emptyStateSet);
};

const getIsEmpty = (state: PlasmaState, props: TableSelectorsProps): boolean =>
    props.isServer ? !props.data?.length : props.data !== null && !props.data?.length;

const getIsTrulyEmpty = (state: PlasmaState, props: TableSelectorsProps): boolean => {
    const compositeState = TableHOCUtils.getCompositeState(props.id, state);
    const isEmpty = getIsEmpty(state, props);

    const hasNoAppliedFilter = !compositeState.filter;
    const hasNoAppliedPredicates = !compositeState.predicates?.length;
    const hasNoAppliedDateLimits =
        !compositeState.dateLimits?.length ||
        (compositeState.dateLimits?.[0] == null && compositeState.dateLimits?.[1] == null);

    return isEmpty && hasNoAppliedFilter && hasNoAppliedDateLimits && hasNoAppliedPredicates;
};

const getDataCount = (state: PlasmaState, props: TableSelectorsProps): number => {
    const tablePaginationState = _.findWhere(state.tableHOCPagination, {id: props.id});
    return props.isServer
        ? (tablePaginationState && tablePaginationState.count) || 0
        : (props.data && props.data.length) || 0;
};

const getSort = (state: PlasmaState, props: TableSelectorsProps): ITableWithSortState =>
    _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === props.id && _.isBoolean(v.isAsc)) ||
    initialTableSort;

const getTableRow = (state: PlasmaState, {id}: {id: string}): HOCTableRowState => _.findWhere(state.tableHOCRow, {id});

const getSelectedRows = (state: PlasmaState, {id}: {id: string}): HOCTableRowState[] =>
    _.where(state.tableHOCRow, {tableId: id, selected: true});

export const TableSelectors = {
    getIsEmpty,
    getIsTrulyEmpty,
    /**
     * @deprecated renamed to getIsTrulyEmpty
     */
    getIsTruelyEmpty: getIsTrulyEmpty,
    isEmptyStateSet,
    isEmptyStateAlreadySet,
    getDataCount,
    getSort,
    getTableRow,
    getSelectedRows,
};
