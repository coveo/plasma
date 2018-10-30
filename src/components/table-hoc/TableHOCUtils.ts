import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {ITableWithSortState} from './reducers/TableWithSortReducers';

const getCompositeState = (id: string, state: IReactVaporState) => {
    const tableSort: ITableWithSortState = _.find(state.tableHOCHeader, (v: ITableWithSortState) => v.tableId === id && _.isBoolean(v.isAsc));
    const paginationState = _.findWhere(state.paginationComposite, {id: `pagination-${id}`});
    const perPageState = _.findWhere(state.perPageComposite, {id});
    const filter: IFilterState = _.findWhere(state.filters, {id});

    return {
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

export const TableHOCUtils = {
    getCompositeState,
};
