import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ITableCollapsibleRowOwnProps, ITableCollapsibleRowProps, TableCollapsibleRow} from './TableCollapsibleRow';
import {ITableRowState} from './TableRowReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableCollapsibleRowOwnProps) => {
    const item: ITableRowState = _.findWhere(state.rows, {id: ownProps.id});

    return {
        opened: item && item.opened,
    };
};

const mapDispatchToProps = () => ({});

export const TableCollapsibleRowConnected: React.ComponentClass<ITableCollapsibleRowProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TableCollapsibleRow);
