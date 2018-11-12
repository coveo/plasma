import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {ITableWithSortState} from './reducers/TableWithSortReducers';

export interface ITableHOCPredicateValue {
    id: string;
    value: string;
}

export interface ITableHOCCompositeState {
    sortKey?: string;
    sortAscending?: boolean;
    perPage?: number;
    pageNb?: number;
    filter?: string;
    predicates?: ITableHOCPredicateValue[];
}

const getCompositeState = (id: string, state: IReactVaporState): ITableHOCCompositeState => {
    const tableSort: ITableWithSortState = _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === id && _.isBoolean(v.isAsc));
    const paginationState = _.findWhere(state.paginationComposite, {id: getPaginationId(id)});
    const perPageState = _.findWhere(state.perPageComposite, {id});
    const filter: IFilterState = _.findWhere(state.filters, {id});
    const predicates = getTablePredicates(id, state);

    return {
        // predicates
        predicates,

        // sort
        sortKey: tableSort && tableSort.id,
        sortAscending: tableSort && tableSort.isAsc,

        // pagination
        perPage: perPageState && perPageState.perPage,
        pageNb: paginationState && paginationState.pageNb,

        // filter
        filter: filter && filter.filterText,
    };
};

const getPredicateId = (tableId: string, componentId: string) => tableId + componentId;

const getPaginationId = (tableId: string) => `pagination-${tableId}`;

const getTablePredicates = (tableId: string, state: IReactVaporState): ITableHOCPredicateValue[] => {
    return _.chain(state.listBoxes)
        .filter((list: IListBoxState) => {
            const startWithIdRegexp = new RegExp(`^${tableId}(.+)`);
            return startWithIdRegexp.test(list.id);
        })
        .filter((list: IListBoxState) => list.selected && list.selected[0] !== '')
        .map((list: IListBoxState) => ({id: list.id.replace(tableId, ''), value: list.selected[0]}))
        .value();
};

export const TableHOCUtils = {
    getCompositeState,
    getPredicateId,
    getPaginationId,
};
