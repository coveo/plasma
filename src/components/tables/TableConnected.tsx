import { TableChildComponent } from './TableConstants';
import { getTableChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, Table } from './Table';
import { ITableState } from './TableReducers';
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
  defaultTableStateModifyerThunk,
  serverTableStateModifyerThunk,
} from './TableThunkActionCreators';
import { IDropdownOption } from '../dropdownSearch/DropdownSearch';
import { selectOptionDropdownSearch, closeDropdownSearch } from '../dropdownSearch/DropdownSearchActions';
import { PER_PAGE_NUMBERS } from '../navigation/perPage/NavigationPerPage';

export interface ITableDispatchProps {
  onDidMount: () => void;
  onUnmount: () => void;
  onModifyData: (shouldResetPage: boolean) => void;
  onRowClick: (actions: IActionOptions[]) => void;
  onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => void;
}

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps) => {
  const tableState: ITableState = state.tables[ownProps.id];

  return { tableState: { ...tableState } };
};

const mapDispatchToProps = (
  dispatch: (action: IReduxAction<IReduxActionsPayload> | ThunkAction<any, any, any>) => void,
  ownProps: ITableOwnProps,
): ITableDispatchProps => ({
  onDidMount: () => {
    let initialPerPage = ownProps.navigation && ownProps.navigation.perPageNumbers && ownProps.navigation.perPageNumbers[0];
    initialPerPage = !_.isUndefined(initialPerPage) ? initialPerPage : PER_PAGE_NUMBERS[0];
    initialPerPage = !ownProps.navigation ? initialPerPage : ownProps.initialTableData.allIds.length;
    dispatch(
      addTable(
        ownProps.id,
        ownProps.initialTableData,
        initialPerPage,
      )
    );
  },
  onUnmount: () => {
    dispatch(removeTable(ownProps.id));
  },
  onModifyData: (shouldResetPage: boolean) => {
    if (ownProps.serverMode) {
      dispatch(serverTableStateModifyerThunk(ownProps, shouldResetPage));
    } else if (ownProps.customMode) {
      dispatch(ownProps.customMode.thunkActionCreator(ownProps, shouldResetPage));
    } else {
      dispatch(defaultTableStateModifyerThunk(ownProps, shouldResetPage));
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
