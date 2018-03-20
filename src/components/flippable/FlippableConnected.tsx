import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState, IReduxAction, IReduxActionsPayload, ReduxUtils} from '../../Index';
import {
    Flippable,
    IFlippableDispatchProps,
    IFlippableOwnProps,
    IFlippableProps,
    IFlippableStateProps,
} from './Flippable';
import {addFlippable, flip, removeFlippable, unflip} from './FlippableActions';
import {IFlippableState} from './FlippableReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFlippableOwnProps): IFlippableStateProps => {
    const flippable: IFlippableState = _.findWhere(state.flippables, {id: ownProps.id});
    return {
        isFlipped: flippable && flippable.flipped,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: IFlippableOwnProps): IFlippableDispatchProps => ({
    onRender: () => dispatch(addFlippable(ownProps.id)),
    onFlip: () => dispatch(flip(ownProps.id)),
    onDestroy: () => dispatch(removeFlippable(ownProps.id)),
    onUnflip: () => dispatch(unflip(ownProps.id)),
});

export const FlippableConnected: React.ComponentClass<IFlippableProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Flippable);
