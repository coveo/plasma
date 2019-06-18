import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    ITableHeaderCellDispatchProps,
    ITableHeaderCellOwnProps,
    ITableHeaderCellProps,
    TableHeaderCell,
} from './TableHeaderCell';
import {addHeaderCell, removeHeaderCell, sortFromHeaderCell} from './TableHeaderCellActions';
import {ITableHeaderCellState} from './TableHeaderCellReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableHeaderCellOwnProps) => {
    const headerCell: ITableHeaderCellState = state.tableHeaderCells[ownProps.id];

    return {
        sorted: headerCell && headerCell.sorted,
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: ITableHeaderCellOwnProps
): ITableHeaderCellDispatchProps => ({
    onMount: () => dispatch(addHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
    onSort: () => dispatch(sortFromHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
    onUnmount: () => dispatch(removeHeaderCell(ownProps.id)),
});

export const TableHeaderCellConnected: React.ComponentClass<ITableHeaderCellProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TableHeaderCell);
