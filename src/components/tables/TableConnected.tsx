import * as React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
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
import {IData, ITableCompositeStateProps, ITableDispatchProps, ITableOwnProps, ITableProps, Table} from './Table';
import {addTable, removeTable} from './TableActions';
import {DEFAULT_TABLE_DATA, TABLE_PREDICATE_DEFAULT_VALUE, TableChildComponent} from './TableConstants';
import {defaultTableStateModifierThunk} from './TableDataModifier';
import {ITableHeaderCellState} from './TableHeaderCellReducers';
import {ITableById, ITableCompositeState, ITableData, ITableState} from './TableReducers';
import {getTableChildComponentId} from './TableUtils';

export const getTableCompositeState = (state: IReactVaporState, id: string): ITableCompositeState => {
    const tableState: ITableState = state.tables[id] || {} as ITableState;
    const filterState: IFilterState = tableState && _.findWhere(state.filters, {id: tableState.filterId});
    const paginationState: IPaginationState = tableState && _.findWhere(state.paginationComposite, {id: tableState.paginationId});
    const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, {id: tableState.perPageId});
    const tableHeaderCellState: ITableHeaderCellState = tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
    const predicateStates: IDropdownSearchState[] = tableState && _.reject(
        state.dropdownSearch,
        (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, id),
    ) || [];
    const datePickerState: IDatePickerState = tableState && _.findWhere(state.datePickers, {id: tableState.datePickerRangeId});

    return {
        id: tableState.id,
        data: tableState.data || DEFAULT_TABLE_DATA,
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

const getDataById = (data: ITableData, props: ITableOwnProps): ITableById => data.byId;

const getSelectedIds = (data: ITableData, props: ITableOwnProps): string[] => data.selectedIds || [];

const getActions = (data: ITableData, props: ITableOwnProps): (rowData?: IData) => IActionOptions[] => props.getActions;

const getMultiSelect = (data: ITableData, props: ITableOwnProps): boolean => props.rowsMultiSelect;

const actionsSelector = createSelector([
    getDataById,
    getSelectedIds,
    getMultiSelect,
    getActions,
], (
    byId: ITableById,
    selectedIds: string[],
    isMultiSelect: boolean,
    getAction: (rowData?: IData) => IActionOptions[],
    ): IActionOptions[] => {
        const rowsData: IData[] = _.map(selectedIds, (id: string) => byId[id]);
        if (getAction && rowsData.length) {
            const actions: IActionOptions[] = getAction(rowsData[0]);
            return isMultiSelect && selectedIds.length >= 2
                ? _.filter(actions, (action: IActionOptions) => !!action.grouped)
                : actions;
        }
        return [];
    },
);

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps): ITableCompositeStateProps => {
    const table: ITableState = state.tables && state.tables[ownProps.id];
    return {
        tableCompositeState: getTableCompositeState(state, ownProps.id),
        actions: table && table.data ? actionsSelector(table.data, ownProps) : [],
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableOwnProps): ITableDispatchProps => ({
    onDidMount: () => {
        dispatch(
            addTable(
                ownProps.id,
                ownProps.initialTableData || DEFAULT_TABLE_DATA,
                ownProps.predicates,
            ),
        );
    },
    onUnmount: () => {
        dispatch(removeTable(ownProps.id));
    },
    onWillUpdate: (actions: IActionOptions[]) => {
        const actionBarId: string = getTableChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR);
        const newAction: IActionOptions[] = actions.length ? actions : [];
        dispatch(addActionsToActionBar(actionBarId, newAction));
    },
    onModifyData: (
        shouldResetPage: boolean,
        tableCompositeState: ITableCompositeState,
        previousTableCompositeState: ITableCompositeState,
    ) => {
        if (ownProps.manual) {
            dispatch(ownProps.manual(ownProps, shouldResetPage, tableCompositeState, previousTableCompositeState));
        } else {
            dispatch(defaultTableStateModifierThunk(ownProps, shouldResetPage, tableCompositeState));
        }
    },
    onRowClick: (actions: IActionOptions[] = [], numberOfSelectedIds: number) => {
        actions = ownProps.rowsMultiSelect && numberOfSelectedIds >= 2
            ? _.filter(actions, (action: IActionOptions) => !!action.grouped)
            : actions;
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
