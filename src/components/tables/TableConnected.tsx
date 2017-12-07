import { TableChildComponent, TABLE_PREDICATE_DEFAULT_VALUE } from './TableConstants';
import { getTableChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, Table } from './Table';
import { ITableState, ITableCompositeState } from './TableReducers';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { addTable, removeTable } from './TableActions';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
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

type AttributeValue = any;
export interface IPredicateAttributes {
  [attributeName: string]: AttributeValue;
};

export interface ITableDispatchProps {
  onDidMount: () => void;
  onUnmount: () => void;
  onModifyData: (shouldResetPage: boolean, tableCompositeState: ITableCompositeState) => void;
  onRowClick: (actions: IActionOptions[]) => void;
  onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => void;
}

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps) => {
  const tableState: ITableState = state.tables[ownProps.id] || {} as ITableState;
  const tableDidMount = !_.isEmpty(tableState);
  const filterState: IFilterState = tableDidMount && _.findWhere(state.filters, {id: tableState.filterId});
  const paginationState: IPaginationState = tableDidMount && _.findWhere(state.paginationComposite, {id: tableState.paginationId});
  const perPageState: IPerPageState = tableDidMount && _.findWhere(state.perPageComposite, {id: tableState.perPageId});
  const tableHeaderCellState: ITableHeaderCellState = tableState && state.tableHeaderCells[tableState.tableHeaderCellId];
  const predicateStates: IDropdownSearchState[] = tableDidMount && _.reject(state.dropdownSearch, (dropdownSearch: IDropdownSearchState) => !contains(dropdownSearch.id, ownProps.id)) || [];

  return {
    tableCompositeState: {
      id: tableState.id,
      data: tableState.data,
      isInError: tableState.isInError,
      isLoading: tableState.isLoading,
      filter: filterState && filterState.filterText || '',
      page: paginationState && paginationState.pageNb || 0,
      perPage: perPageState && perPageState.perPage || 10000000,
      sortState: {
        attribute: tableHeaderCellState && tableHeaderCellState.attributeToSort,
        order: tableHeaderCellState && tableHeaderCellState.sorted,
      },
      predicates: predicateStates.reduce((currentPredicates, nextPredicate: IDropdownSearchState) => {
        // the attribute name is stored in the id of the dropdownSearch
        const attributeName = nextPredicate.id.split(getTableChildComponentId(ownProps.id, TableChildComponent.PREDICATE))[1];
        const selectedOption = _.findWhere(nextPredicate.options, {selected: true});
        return {
          ...currentPredicates,
          [attributeName]: selectedOption && selectedOption.value || TABLE_PREDICATE_DEFAULT_VALUE,
        };
      }, {}),
    } as ITableCompositeState
  };
};

const mapDispatchToProps = (
  dispatch: (action: IReduxAction<IReduxActionsPayload> | ThunkAction<any, any, any>) => void,
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
  onModifyData: (shouldResetPage: boolean, tableCompositeState: ITableCompositeState) => {
    if (ownProps.manual) {
      dispatch(ownProps.manual(ownProps, shouldResetPage, tableCompositeState));
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
