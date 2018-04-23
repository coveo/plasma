import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {contains} from 'underscore.string';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {addActionsToActionBar} from '../actions/ActionBarActions';
import {IDatePickerState} from '../datePicker/DatePickerReducers';
import {IDropdownOption} from '../dropdownSearch/DropdownSearch';
import {closeDropdownSearch, selectOptionDropdownSearch} from '../dropdownSearch/DropdownSearchActions';
import {IDropdownSearchState} from '../dropdownSearch/DropdownSearchReducers';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IPaginationState} from '../navigation/pagination/NavigationPaginationReducers';
import {IPerPageState} from '../navigation/perPage/NavigationPerPageReducers';
import {ITableCompositeStateProps, ITableDispatchProps, ITableOwnProps, ITableProps, Table} from './Table';
import {addTable, removeTable} from './TableActions';
import {TABLE_PREDICATE_DEFAULT_VALUE, TableChildComponent} from './TableConstants';
import {defaultTableStateModifierThunk} from './TableDataModifier';
import {ITableHeaderCellState} from './TableHeaderCellReducers';
import {ITableCompositeState, ITableState} from './TableReducers';
import {getTableChildComponentId} from './TableUtils';

export const getTableCompositeState = (state: IReactVaporState, id: string): ITableCompositeState => {
    const tableState: ITableState = state.tables[id] || {} as ITableState;
    const filterState: IFilterState = tableState && _.findWhere(state.filters, {id: tableState.filterId});
    const paginationState: IPaginationState = tableState && _.findWhere(state.paginationComposite, {id: tableState.paginationId});
    const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, {id: tableState.perPageId});
    const tableHeaderCellState: ITableHeaderCellState = tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
    const predicateStates: IDropdownSearchState[] = tableState && _.reject(state.dropdownSearch, (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, id)) || [];
    const datePickerState: IDatePickerState = tableState && _.findWhere(state.datePickers, {id: tableState.datePickerRangeId});

    return {
        id: tableState.id,
        data: tableState.data,
        isInError: tableState.isInError,
        isLoading: tableState.isLoading,
        filter: filterState && filterState.filterText,
        page: paginationState && paginationState.pageNb,
        perPage: perPageState && perPageState.perPage,
        sortState: {
            attribute: tableHeaderCellState && tableHeaderCellState.attributeToSort,
            order: tableHeaderCellState && tableHeaderCellState.sorted,
        },
        predicates: predicateStates.reduce((currentPredicates, nextPredicate: IDropdownSearchState) => {
            // the attribute name is stored in the id of the dropdownSearch
            const attributeName = nextPredicate.id.split(getTableChildComponentId(id, TableChildComponent.PREDICATE))[1];
            const selectedOption = _.findWhere(nextPredicate.options, {selected: true});
            return {
                ...currentPredicates,
                [attributeName]: selectedOption && selectedOption.value || TABLE_PREDICATE_DEFAULT_VALUE,
            };
        }, {}),
        from: datePickerState && datePickerState.appliedLowerLimit,
        to: datePickerState && datePickerState.appliedUpperLimit,
    } as ITableCompositeState;
};

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps): ITableCompositeStateProps => ({
    tableCompositeState: getTableCompositeState(state, ownProps.id),
});

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: ITableOwnProps,
): ITableDispatchProps => ({
    onDidMount: () => {
        dispatch(
            addTable(
                ownProps.id,
                ownProps.initialTableData,
                ownProps.predicates,
            ),
        );
    },
    onUnmount: () => {
        dispatch(removeTable(ownProps.id));
    },
    onModifyData: (shouldResetPage: boolean, tableCompositeState: ITableCompositeState, previousTableCompositeState: ITableCompositeState) => {
        if (ownProps.manual) {
            dispatch(ownProps.manual(ownProps, shouldResetPage, tableCompositeState, previousTableCompositeState));
        } else {
            dispatch(defaultTableStateModifierThunk(ownProps, shouldResetPage, tableCompositeState));
        }
    },
    onRowClick: (actions: IActionOptions[] = []) => {
        dispatch(
            addActionsToActionBar(
                getTableChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR),
                actions,
            ),
        );
    },
    onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => {
        dispatch(selectOptionDropdownSearch(predicateId, option));
        dispatch(closeDropdownSearch(predicateId));
    },
});

export const TableConnected: React.ComponentClass<ITableProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Table);
