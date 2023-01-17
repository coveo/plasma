import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {ILastUpdatedDispatchProps, ILastUpdatedOwnProps, ILastUpdatedStateProps, LastUpdated} from './LastUpdated.js';
import {addLastUpdated, removeLastUpdated} from './LastUpdatedActions.js';
import {ILastUpdatedState} from './LastUpdatedReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: ILastUpdatedOwnProps): ILastUpdatedStateProps => {
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

/**
 * @deprecated use LastUpdated instead
 */
export const LastUpdatedConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(LastUpdated);
