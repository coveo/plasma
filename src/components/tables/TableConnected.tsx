import { TableChildComponent, TABLE_PREDICATE_DEFAULT_VALUE } from './TableConstants';
import { getTableChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, ITableDispatchProps, Table, ITableCompositeStateProps } from './Table';
import { ITableState, ITableCompositeState } from './TableReducers';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { addTable, removeTable } from './TableActions';
import { IReactVaporState } from '../../ReactVapor';
import { ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import { IActionOptions } from '../actions/Action';
import { defaultTableStateModifierThunk } from './TableDataModifier';
import { IDropdownOption } from '../dropdownSearch/DropdownSearch';
import { selectOptionDropdownSearch, closeDropdownSearch } from '../dropdownSearch/DropdownSearchActions';
import { IPerPageState } from '../navigation/perPage/NavigationPerPageReducers';
import { IPaginationState } from '../navigation/pagination/NavigationPaginationReducers';
import { IFilterState } from '../filterBox/FilterBoxReducers';
import { ITableHeaderCellState } from './TableHeaderCellReducers';
import { IDropdownSearchState } from '../dropdownSearch/DropdownSearchReducers';
import { IDatePickerState } from '../datePicker/DatePickerReducers';
import { contains } from 'underscore.string';
import { IDispatch } from '../../utils/ReduxUtils';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps): ITableCompositeStateProps => {
  const tableState: ITableState = state.tables[ownProps.id] || {} as ITableState;
  const filterState: IFilterState = tableState && _.findWhere(state.filters, { id: tableState.filterId });
  const paginationState: IPaginationState = tableState && _.findWhere(state.paginationComposite, { id: tableState.paginationId });
  const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, { id: tableState.perPageId });
  const tableHeaderCellState: ITableHeaderCellState = tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
  const predicateStates: IDropdownSearchState[] = tableState && _.reject(state.dropdownSearch, (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, ownProps.id)) || [];
  const datePickerState: IDatePickerState = tableState && _.find(state.datePickers, (datePicker: IDatePickerState) => {
    return datePicker.id, datePicker.id.indexOf(tableState.datePickerId) === 0;
  });

  return {
    tableCompositeState: {
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
        const attributeName = nextPredicate.id.split(getTableChildComponentId(ownProps.id, TableChildComponent.PREDICATE))[1];
        const selectedOption = _.findWhere(nextPredicate.options, { selected: true });
        return {
          ...currentPredicates,
          [attributeName]: selectedOption && selectedOption.value || TABLE_PREDICATE_DEFAULT_VALUE,
        };
      }, {}),
      from: datePickerState && datePickerState.appliedLowerLimit,
      to: datePickerState && datePickerState.appliedUpperLimit,
    } as ITableCompositeState
  };
};

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
      )
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
