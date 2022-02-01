import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../ReactVaporState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {Flippable, IFlippableDispatchProps, IFlippableOwnProps, IFlippableStateProps} from './Flippable';
import {addFlippable, changeFlippableSide, removeFlippable} from './FlippableActions';
import {IFlippableState} from './FlippableReducers';

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

export const FlippableConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Flippable);
