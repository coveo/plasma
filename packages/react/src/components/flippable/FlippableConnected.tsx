import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {Flippable, IFlippableDispatchProps, IFlippableOwnProps, IFlippableStateProps} from './Flippable.js';
import {addFlippable, changeFlippableSide, removeFlippable} from './FlippableActions.js';
import {IFlippableState} from './FlippableReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: IFlippableOwnProps): IFlippableStateProps => {
    const flippable: IFlippableState = _.findWhere(state.flippables, {id: ownProps.id});
    return {
        isFlipped: flippable && flippable.flipped,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IFlippableOwnProps): IFlippableDispatchProps => ({
    onRender: () => dispatch(addFlippable(ownProps.id)),
    onDestroy: () => dispatch(removeFlippable(ownProps.id)),
    onFlip: () => dispatch(changeFlippableSide(ownProps.id, true)),
    onUnflip: () => dispatch(changeFlippableSide(ownProps.id, false)),
});

/**
 * @deprecated Don't use
 */
export const FlippableConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Flippable);
