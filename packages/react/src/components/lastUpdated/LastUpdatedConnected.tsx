import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../ReactVaporState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {ILastUpdatedDispatchProps, ILastUpdatedOwnProps, ILastUpdatedStateProps, LastUpdated} from './LastUpdated';
import {addLastUpdated, removeLastUpdated} from './LastUpdatedActions';
import {ILastUpdatedState} from './LastUpdatedReducers';

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

export const LastUpdatedConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(LastUpdated);
