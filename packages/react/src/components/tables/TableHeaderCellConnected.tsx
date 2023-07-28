import {connect} from 'react-redux';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {ITableHeaderCellDispatchProps, ITableHeaderCellOwnProps, TableHeaderCell} from './TableHeaderCell';
import {addHeaderCell, removeHeaderCell, sortFromHeaderCell} from './TableHeaderCellActions';
import {ITableHeaderCellState} from './TableHeaderCellReducers';

const mapStateToProps = (state: PlasmaState, ownProps: ITableHeaderCellOwnProps) => {
    const headerCell: ITableHeaderCellState = state.tableHeaderCells[ownProps.id];

    return {
        sorted: headerCell && headerCell.sorted,
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: ITableHeaderCellOwnProps,
): ITableHeaderCellDispatchProps => ({
    onMount: () => dispatch(addHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
    onSort: () => dispatch(sortFromHeaderCell(ownProps.id, ownProps.attributeToSort, ownProps.tableId)),
    onUnmount: () => dispatch(removeHeaderCell(ownProps.id)),
});

/**
 * @deprecated Use Mantine instead
 */
export const TableHeaderCellConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(TableHeaderCell);
