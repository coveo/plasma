import { TableChildComponent, TABLE_PREDICATE_DEFAULT_VALUE, DEFAULT_TABLE_PER_PAGE } from './TableConstants';
import { getTableChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, Table } from './Table';
import { ITableState, ITableCompositeState } from './TableReducers';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { addTable, removeTable } from './TableActions';
import { IReactVaporState } from '../../ReactVapor';
import { ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import { IActionOptions } from '../actions/Action';
import {
  defaultTableStateModifierThunk,
} from './TableThunkActionCreators';
import { IDropdownOption } from '../dropdownSearch/DropdownSearch';
import { selectOptionDropdownSearch, closeDropdownSearch } from '../dropdownSearch/DropdownSearchActions';
import { IPerPageState } from '../navigation/perPage/NavigationPerPageReducers';
import { IPaginationState } from '../navigation/pagination/NavigationPaginationReducers';
import { IFilterState } from '../filterBox/FilterBoxReducers';
import { ITableHeaderCellState } from './TableHeaderCellReducers';
import { IDropdownSearchState } from '../dropdownSearch/DropdownSearchReducers';
import { contains } from 'underscore.string';
import { Dispatch } from '../../utils/ReduxUtils';

export type IAttributeValue = any;
export interface IPredicateAttributes {
  [attributeName: string]: IAttributeValue;
};

export interface ITableDispatchProps {
  onDidMount: () => void;
  onUnmount: () => void;
  onModifyData: (
    shouldResetPage: boolean,
    tableCompositeState: ITableCompositeState,
    previousTableCompositeState?: ITableCompositeState,
  ) => void;
  onRowClick: (actions: IActionOptions[]) => void;
  onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => void;
}

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps) => {
  const tableState: ITableState = state.tables[ownProps.id] || {} as ITableState;
  const filterState: IFilterState = tableState && _.findWhere(state.filters, { id: tableState.filterId });
  const paginationState: IPaginationState = tableState && _.findWhere(state.paginationComposite, { id: tableState.paginationId });
  const perPageState: IPerPageState = tableState && _.findWhere(state.perPageComposite, { id: tableState.perPageId });
  const tableHeaderCellState: ITableHeaderCellState = tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
  const predicateStates: IDropdownSearchState[] = tableState && _.reject(state.dropdownSearch, (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, ownProps.id)) || [];

  return {
    tableCompositeState: {
      id: tableState.id,
      data: tableState.data,
      isInError: tableState.isInError,
      isLoading: tableState.isLoading,
      filter: filterState && filterState.filterText || '',
      page: paginationState && paginationState.pageNb || 0,
      perPage: perPageState && perPageState.perPage || DEFAULT_TABLE_PER_PAGE,
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
    } as ITableCompositeState
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
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
