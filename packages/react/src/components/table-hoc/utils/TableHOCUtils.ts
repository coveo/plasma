import * as _ from 'underscore';

import {isValidElement} from 'react';
import {PlasmaState} from '../../../PlasmaState';
import {DatePickerSelectors} from '../../datePicker/DatePickerSelectors';
import {IFilterState} from '../../filterBox/FilterBoxReducers';
import {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {PaginationUtils} from '../../pagination/PaginationUtils';
import {ITableRowOwnProps} from '../TableRowConnected';
import {ITableWithSortState} from '../reducers/TableWithSortReducers';

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
    dateLimits?: [Date, Date?];
}

const PREDICATE_SEPARATOR = '--';

const getCompositeState = (id: string, state: PlasmaState): ITableHOCCompositeState => {
    const tableSort: ITableWithSortState = _.find(
        state.tableHOCHeader,
        (v: ITableWithSortState) => v.tableId === id && _.isBoolean(v.isAsc),
    );

    const perPage =
        parseInt(
            FlatSelectSelectors.getSelectedOptionId(state, {
                id: PaginationUtils.getPaginationPerPageId(id),
            }),
            10,
        ) || undefined;

    const filter: IFilterState = _.findWhere(state.filters, {id});
    const predicates = getTablePredicates(id, state);

    return {
        // predicates
        predicates,

        // sort
        sortKey: tableSort && tableSort.id,
        sortAscending: (tableSort && tableSort.isAsc) || null,

        // pagination
        perPage,
        pageNb: _.findWhere(state.paginationComposite, {id: getPaginationId(id)})?.pageNb,

        // filter
        filter: filter && filter.filterText,

        // date
        dateLimits: DatePickerSelectors.getDatePickerLimits(state, {id}),
    };
};

/** e.g. tableId--componentId => tableId */
const getTableIdFromPredicateId = (predicateId: string) => predicateId.split(PREDICATE_SEPARATOR)[0];

/** e.g. tableId--componentId => componentId */
const getComponentIdFromPredicateId = (predicateId: string) => predicateId.split(PREDICATE_SEPARATOR)[1];

const getPredicateId = (tableId: string, componentId: string) => `${tableId}${PREDICATE_SEPARATOR}${componentId}`;

const getPredicateIds = (tableId: string, state: PlasmaState): string[] =>
    _.chain(state.listBoxes)
        .filter(filterTablePredicate.bind(null, tableId))
        .pluck('id')
        .map(getComponentIdFromPredicateId)
        .value();

const getPaginationId = (tableId: string) => `pagination-${tableId}`;

const getTablePredicates = (tableId: string, state: PlasmaState): ITableHOCPredicateValue[] =>
    _.chain(state.listBoxes)
        .filter(filterTablePredicate.bind(null, tableId))
        .filter((list: IListBoxState) => list.selected && list.selected[0] !== '')
        .map((list: IListBoxState) => ({id: getComponentIdFromPredicateId(list.id), value: list.selected[0]}))
        .value();

const getDatePickerId = (tableId: string) => `${tableId}-date-range`;

export const isRowCollapsible = (props: ITableRowOwnProps): boolean =>
    props.collapsible &&
    (isValidElement(props.collapsible.content) ||
        _.isString(props.collapsible.content) ||
        _.isNull(props.collapsible.content));

export const TableHOCUtils = {
    getCompositeState,
    getPredicateId,
    getPredicateIds,
    getPaginationId,
    getTableIdFromPredicateId,
    getDatePickerId,
};

const filterTablePredicate = (tableId: string, {id}: IListBoxState): boolean => new RegExp(`^${tableId}(.+)`).test(id);
