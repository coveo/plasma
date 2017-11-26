import { turnOnLoading, turnOffLoading } from '../loading/LoadingActions';
import { TableChildComponents } from './TableConstants';
import { getLoadingIds, getChildComponentId } from './TableUtils';
import { ITableOwnProps, ITableProps, Table } from './Table';
import { ITableState } from './TableReducers';
import { selectRow } from './TableRowActions';
import { addActionsToActionBar } from '../actions/ActionBarActions';
import { modifyState } from './TableActions';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import * as _ from 'underscore';
import { IActionProps } from '../actions/Action';
import { TableDataModifyerMethods } from './TableOnModifyDataMethods';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableOwnProps) => {
  const tableState: ITableState = state.tables[ownProps.id];

  return { tableState: { ...tableState } };
};

const mapDispatchToProps = (
  dispatch: (action: IReduxAction<IReduxActionsPayload> | ThunkAction<any, any, any>) => void,
  ownProps: ITableOwnProps,
) => ({
  onDidMount: (id: string) => {

  },
  onUnmount: (id: string) => 1,
  onModifyData: (props: ITableProps) => {
    dispatch(selectRow(undefined));
    dispatch(
      addActionsToActionBar(
        getChildComponentId(ownProps.id, TableChildComponents.ACTION_BAR),
        [],
      ),
    );
    dispatch(turnOnLoading(getLoadingIds(ownProps.id)));

    // modify state here
    dispatch(TableDataModifyerMethods.thunkDefault(ownProps));
    dispatch(modifyState(ownProps.id, ownProps.modifyState));
  },
  onRowClick: (actions: IActionProps[] = []) => {
    dispatch(
      addActionsToActionBar(
        getChildComponentId(ownProps.id, TableChildComponents.ACTION_BAR),
        actions,
      ),
    );
  }
});

export const TableConnected: React.ComponentClass<ITableProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Table);
