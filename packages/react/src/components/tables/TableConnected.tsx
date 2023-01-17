import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import * as _ from 'underscore';
import s from 'underscore.string';
import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch} from '../../utils/ReduxUtils.js';
import {ReduxUtils} from '../../utils/ReduxUtils.js';
import {IActionOptions} from '../actions/Action.js';
import {addActionsToActionBar} from '../actions/ActionBarActions.js';
import {IDatePickerState} from '../datePicker/DatePickerReducers.js';
import {IDropdownOption} from '../dropdownSearch/DropdownSearch.js';
import {closeDropdownSearch, selectOptionDropdownSearch} from '../dropdownSearch/DropdownSearchActions.js';
import {IDropdownSearchState} from '../dropdownSearch/DropdownSearchReducers.js';
import {IFilterState} from '../filterBox/FilterBoxReducers.js';
import {IPaginationState} from '../navigation/pagination/NavigationPaginationReducers.js';
import {IPerPageState} from '../navigation/perPage/NavigationPerPageReducers.js';
import {IData, ITableCompositeStateProps, ITableDispatchProps, ITableOwnProps, Table} from './Table.js';
import {addTable, removeTable} from './TableActions.js';
import {DEFAULT_TABLE_DATA, TableChildComponent, TABLE_PREDICATE_DEFAULT_VALUE} from './TableConstants.js';
import {defaultTableStateModifierThunk} from './TableDataModifier.js';
import {ITableHeaderCellState} from './TableHeaderCellReducers.js';
import {ITableById, ITableCompositeState, ITableData, ITableState} from './TableReducers.js';
import {getTableChildComponentId} from './TableUtils.js';

export const getTableCompositeState = (state: PlasmaState, id: string): ITableCompositeState => {
    const tableState: ITableState = state.tables[id] || ({} as ITableState);
    const filterState: IFilterState = tableState && _.findWhere(state.filters, {id: tableState.filterId});
    const paginationState: IPaginationState =
        tableState && _.findWhere(state.paginationComposite, {id: tableState.paginationId});
    const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, {id: tableState.perPageId});
    const tableHeaderCellState: ITableHeaderCellState =
        tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
    const predicateStates: IDropdownSearchState[] =
        (tableState &&
            _.reject(
                state.dropdownSearch,
                (dropdownSearch: IDropdownSearchState) => !s.contains(dropdownSearch.id, id)
            )) ||
        [];
    const datePickerState: IDatePickerState =
        tableState && _.findWhere(state.datePickers, {id: tableState.datePickerRangeId});

    return {
        id: tableState.id,
        data: tableState.data || DEFAULT_TABLE_DATA,
        dataDeleted: tableState.dataDeleted,
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
            const attributeName = nextPredicate.id.split(
                getTableChildComponentId(id, TableChildComponent.PREDICATE)
            )[1];
            const selectedOption = _.findWhere(nextPredicate.options, {selected: true});
            return {
                ...currentPredicates,
                [attributeName]: (selectedOption && selectedOption.value) || TABLE_PREDICATE_DEFAULT_VALUE,
            };
        }, {}),
        from: datePickerState && datePickerState.appliedLowerLimit,
        to: datePickerState && datePickerState.appliedUpperLimit,
    } as ITableCompositeState;
};

const getDataById = (data: ITableData, props: ITableOwnProps): ITableById => data.byId;

const getSelectedIds = (data: ITableData, props: ITableOwnProps): string[] => data.selectedIds || [];

const getMultiSelect = (data: ITableData, props: ITableOwnProps): boolean => props.rowsMultiSelect;

const getGetActionsMethod = (data: ITableData, props: ITableOwnProps): ((rowData?: IData) => IActionOptions[]) =>
    props.getActions;

const getFinalActions = (
    byId: ITableById,
    selectedIds: string[],
    isMultiSelect: boolean,
    getActions: (rowData?: IData) => IActionOptions[]
): IActionOptions[] =>
    getActions && selectedIds.length
        ? getActions(byId[selectedIds[0]]).filter((action) => !isMultiSelect || (isMultiSelect && !!action.grouped))
        : [];

const actionsSelector = createSelector(
    getDataById,
    getSelectedIds,
    getMultiSelect,
    getGetActionsMethod,
    getFinalActions
);

const mapStateToProps = (state: PlasmaState, ownProps: ITableOwnProps): ITableCompositeStateProps => {
    const table: ITableState = state.tables && state.tables[ownProps.id];
    return {
        tableCompositeState: getTableCompositeState(state, ownProps.id),
        actions: table && table.data ? actionsSelector(table.data, ownProps) : [],
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableOwnProps): ITableDispatchProps => ({
    onDidMount: () => {
        dispatch(addTable(ownProps.id, ownProps.initialTableData || DEFAULT_TABLE_DATA, ownProps.predicates));
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
        previousTableCompositeState: ITableCompositeState
    ) => {
        if (ownProps.manual) {
            dispatch(ownProps.manual(ownProps, shouldResetPage, tableCompositeState, previousTableCompositeState));
        } else {
            dispatch(defaultTableStateModifierThunk(ownProps, shouldResetPage, tableCompositeState));
        }
    },
    onRowClick: (actions: IActionOptions[] = [], numberOfSelectedIds: number) => {
        actions =
            ownProps.rowsMultiSelect && numberOfSelectedIds >= 2
                ? _.filter(actions, (action: IActionOptions) => !!action.grouped)
                : actions;
        dispatch(addActionsToActionBar(getTableChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR), actions));
    },
    onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => {
        dispatch(selectOptionDropdownSearch(predicateId, option));
        dispatch(closeDropdownSearch(predicateId));
    },
});

/**
 * @deprecated Use Mantine instead
 */
export const TableConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Table);

export const TableConnectedUtils = {
    getTableCompositeState,
    getDataById,
    getSelectedIds,
    getMultiSelect,
    getGetActionsMethod,
    getFinalActions,
};
