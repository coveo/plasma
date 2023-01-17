import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {updateSelectedRows} from './TableActions.js';
import {ITableHeadingRowOwnProps, TableHeadingRow} from './TableHeadingRow.js';
import {ITableState} from './TableReducers.js';
import {addRow, removeRow, selectRow, toggleRowOpened} from './TableRowActions.js';
import {ITableRowState} from './TableRowReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: ITableHeadingRowOwnProps) => {
    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});
    const table: ITableState = state.tables && state.tables[ownProps.tableId];

    return {
        opened: item && item.opened,
        selected:
            table &&
            table.data.selectedIds &&
            !!table.data.selectedIds.length &&
            table.data.selectedIds.indexOf(ownProps.rowId) !== -1,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHeadingRowOwnProps) => ({
    onClick: (hasMultipleSelectedRow: boolean) => {
        if (!ownProps.selectionDisabled) {
            dispatch(selectRow(ownProps.id, ownProps.tableId, ownProps.rowId));
            dispatch(updateSelectedRows(ownProps.tableId, [ownProps.rowId], hasMultipleSelectedRow));
        }
        if (ownProps.isCollapsible) {
            dispatch(toggleRowOpened(ownProps.id, ownProps.tableId, ownProps.rowId));
        }
    },
    onRender: () => dispatch(addRow(ownProps.id, ownProps.tableId)),
    onDestroy: () => dispatch(removeRow(ownProps.id)),
});

/**
 * @deprecated Use Mantine instead
 */
export const TableHeadingRowConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TableHeadingRow);
