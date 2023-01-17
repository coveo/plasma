import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {ReduxUtils} from '../../utils/ReduxUtils.js';
import {ITableCollapsibleRowOwnProps, TableCollapsibleRow} from './TableCollapsibleRow.js';
import {ITableRowState} from './TableRowReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: ITableCollapsibleRowOwnProps) => {
    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});

    return {
        opened: item && item.opened,
    };
};

const mapDispatchToProps = () => ({});

/**
 * @deprecated Use Mantine instead
 */
export const TableCollapsibleRowConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TableCollapsibleRow);
