import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import { IReactVaporState } from '../../ReactVapor';
import { IDispatch, ReduxUtils } from '../../utils/ReduxUtils';
import { ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow } from './TableHeadingRow';
import { addRow, removeRow, selectRow } from './TableRowActions';
import { ITableRowState } from './TableRowReducers';
import {updateSelectedRows} from './TableActions';
import {ITableState} from './TableReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableHeadingRowOwnProps) => {
  const item: ITableRowState = _.findWhere(state.rows, { id: ownProps.id });
  const tables: ITableState = _.findWhere(state.tables, {id: ownProps.tableId});

  return {
    opened: item && item.opened,
    selected: tables && tables.data.selectedIds.length && tables.data.selectedIds.indexOf(ownProps.rowId) !== -1
  };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHeadingRowOwnProps) => ({
  onClick: () => {
    dispatch(selectRow(ownProps.id, ownProps.isCollapsible, ownProps.tableId, ownProps.rowId));
    dispatch(updateSelectedRows(ownProps.tableId, [ownProps.rowId]));
  },
  onRender: () => dispatch(addRow(ownProps.id, ownProps.tableId)),
  onDestroy: () => dispatch(removeRow(ownProps.id)),
});

export const TableHeadingRowConnected: React.ComponentClass<ITableHeadingRowProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TableHeadingRow);
