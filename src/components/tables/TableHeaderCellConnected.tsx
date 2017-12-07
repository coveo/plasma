import { ITableHeaderCellOwnProps, ITableHeaderCellProps, ITableHeaderCellDispatchProps, TableHeaderCell } from './TableHeaderCell';
import { addHeaderCell, removeHeaderCell, sortFromHeaderCell } from './TableHeaderCellActions';
import { ITableHeaderCellState } from './TableHeaderCellReducers';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableHeaderCellOwnProps) => {
  const headerCell: ITableHeaderCellState = state.tableHeaderCells[ownProps.id];

  return {
    sorted: headerCell && headerCell.sorted,
  };
};

const mapDispatchToProps = (
  dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: ITableHeaderCellOwnProps,
): ITableHeaderCellDispatchProps => ({
  onMount: () => dispatch(addHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
  onSort: () => dispatch(sortFromHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
  onUnmount: () => dispatch(removeHeaderCell(ownProps.id)),
});

export const TableHeaderCellConnected: React.ComponentClass<ITableHeaderCellProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TableHeaderCell);
