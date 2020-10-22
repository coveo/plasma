import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {HOCTableRowState} from './reducers/TableRowReducers';
import {ITableWithSortState} from './reducers/TableWithSortReducers';
import {TableHOCUtils} from './utils/TableHOCUtils';

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

const getIsEmpty = (state: IReactVaporState, props: TableSelectorsProps): boolean =>
    props.data !== null && (!props.data || props.data.length === 0);

const getIsTruelyEmpty = (state: IReactVaporState, props: TableSelectorsProps): boolean => {
    const compositeState = TableHOCUtils.getCompositeState(props.id, state);
    const isEmpty = getIsEmpty(state, props);

    const hasNoAppliedFilter = !compositeState.filter;
    const hasNoAppliedPredicates = !compositeState.predicates?.length;
    const hasNoAppliedDateLimits =
        !compositeState.dateLimits?.length ||
        (compositeState.dateLimits?.[0] == null && compositeState.dateLimits?.[1] == null);

    return isEmpty && hasNoAppliedFilter && hasNoAppliedDateLimits && hasNoAppliedPredicates;
};

const getDataCount = (state: IReactVaporState, props: TableSelectorsProps): number => {
    const tablePaginationState = _.findWhere(state.tableHOCPagination, {id: props.id});
    return props.isServer
        ? (tablePaginationState && tablePaginationState.count) || 0
        : (props.data && props.data.length) || 0;
};

const getSort = (state: IReactVaporState, props: TableSelectorsProps): ITableWithSortState =>
    _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === props.id && _.isBoolean(v.isAsc)) ||
    initialTableSort;

const getTableRow = (state: IReactVaporState, {id}: {id: string}): HOCTableRowState =>
    _.findWhere(state.tableHOCRow, {id});

const getSelectedRows = (state: IReactVaporState, {id}: {id: string}): HOCTableRowState[] =>
    _.where(state.tableHOCRow, {tableId: id, selected: true});

export const TableSelectors = {
    getIsEmpty,
    getIsTruelyEmpty,
    getDataCount,
    getSort,
    getTableRow,
    getSelectedRows,
};
