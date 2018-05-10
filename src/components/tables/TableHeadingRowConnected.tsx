import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {updateSelectedRows} from './TableActions';
import {ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow} from './TableHeadingRow';
import {ITableState} from './TableReducers';
import {addRow, removeRow, selectRow} from './TableRowActions';
import {ITableRowState} from './TableRowReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableHeadingRowOwnProps) => {
    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});
    const table: ITableState = state.tables && state.tables[ownProps.tableId];

    return {
        opened: item && item.opened,
        selected: table && table.data.selectedIds && !!table.data.selectedIds.length && table.data.selectedIds.indexOf(ownProps.rowId) !== -1,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHeadingRowOwnProps) => ({
    onClick: (hasMultipleSelectedRow: boolean) => {
        dispatch(selectRow(ownProps.id, ownProps.isCollapsible, ownProps.tableId, ownProps.rowId));
        dispatch(updateSelectedRows(ownProps.tableId, [ownProps.rowId], hasMultipleSelectedRow));
    },
    onRender: () => dispatch(addRow(ownProps.id, ownProps.tableId)),
    onDestroy: () => dispatch(removeRow(ownProps.id)),
});

export const TableHeadingRowConnected: React.ComponentClass<ITableHeadingRowProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TableHeadingRow);
