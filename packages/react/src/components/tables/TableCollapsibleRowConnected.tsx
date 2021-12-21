import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVaporState';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ITableCollapsibleRowOwnProps, TableCollapsibleRow} from './TableCollapsibleRow';
import {ITableRowState} from './TableRowReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableCollapsibleRowOwnProps) => {
    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});

    return {
        opened: item && item.opened,
    };
};

const mapDispatchToProps = () => ({});

export const TableCollapsibleRowConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TableCollapsibleRow);
