import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ITableCollapsibleRowOwnProps, TableCollapsibleRow} from './TableCollapsibleRow';
import {ITableRowState} from './TableRowReducers';

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
    ReduxUtils.mergeProps,
)(TableCollapsibleRow);
