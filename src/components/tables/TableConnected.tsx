import { turnOnLoading } from '../loading/LoadingActions';
import { TableChildComponent } from './TableConstants';
import { resetPaging } from '../navigation/pagination/NavigationPaginationActions';
import { getLoadingIds, getChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, Table } from './Table';
import { ITableState } from './TableReducers';
import { selectRow } from './TableRowActions';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { addTable, removeTable, setIsInError, toggleLock, modifyState } from './TableActions';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import * as _ from 'underscore';
import { IActionOptions } from '../actions/Action';
import { TableDataModifyerMethods } from './TableOnModifyDataMethods';

export interface ITableDispatchProps {
  onDidMount: () => void;
  onUnmount: () => void;
  onModifyData: () => void;
  onRowClick: (actions: IActionOptions[]) => void;
  onResetPage: () => void;
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
    dispatch(addTable(ownProps.id, ownProps.initialTableData, ownProps.initialPerPage));
  },
  onUnmount: () => {
    dispatch(removeTable(ownProps.id));
  },
  onModifyData: () => {
    dispatch(selectRow(undefined));
    dispatch(
      addActionsToActionBar(
        getChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR),
        [],
      ),
    );
    dispatch(turnOnLoading(getLoadingIds(ownProps.id)));

    // modify state here
    dispatch(TableDataModifyerMethods.thunkDefault(ownProps));
  },
  onRowClick: (actions: IActionOptions[] = []) => {
    dispatch(
      addActionsToActionBar(
        getChildComponentId(ownProps.id, TableChildComponent.ACTION_BAR),
        actions,
      ),
    );
  },
  onResetPage: () => {
    dispatch(resetPaging(getChildComponentId(ownProps.id, TableChildComponent.PAGINATION)));
  },
});

export const TableConnected: React.ComponentClass<ITableProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Table);
