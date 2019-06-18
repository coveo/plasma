import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {
    ILastUpdatedDispatchProps,
    ILastUpdatedOwnProps,
    ILastUpdatedProps,
    ILastUpdatedStateProps,
    LastUpdated,
} from './LastUpdated';
import {addLastUpdated, removeLastUpdated} from './LastUpdatedActions';
import {ILastUpdatedState} from './LastUpdatedReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ILastUpdatedOwnProps): ILastUpdatedStateProps => {
    const item: ILastUpdatedState = _.findWhere(state.lastUpdatedComposite, {id: ownProps.id});

    return {
        time: item ? item.time : new Date(),
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ILastUpdatedOwnProps
): ILastUpdatedDispatchProps => ({
    onRender: () => dispatch(addLastUpdated(ownProps.id)),
    onDestroy: () => dispatch(removeLastUpdated(ownProps.id)),
});

export const LastUpdatedConnected: React.ComponentClass<ILastUpdatedProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(LastUpdated);
