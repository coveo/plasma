import { ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow } from './TableHeadingRow';
import { addRow, removeRow, selectRow } from './TableRowActions';
import { ITableRowState } from './TableRowReducers';
import { IReactVaporState } from '../../ReactVapor';
import { IDispatch, ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableHeadingRowOwnProps) => {
  const item: ITableRowState = _.findWhere(state.rows, { id: ownProps.id });

  return {
    opened: item && item.opened,
    selected: item && item.selected,
  };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHeadingRowOwnProps) => ({
  onClick: () => dispatch(selectRow(ownProps.id, ownProps.isCollapsible, ownProps.tableId)),
  onRender: () => dispatch(addRow(ownProps.id, ownProps.tableId)),
  onDestroy: () => dispatch(removeRow(ownProps.id)),
});

export const TableHeadingRowConnected: React.ComponentClass<ITableHeadingRowProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TableHeadingRow);
