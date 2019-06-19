import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    Flippable,
    IFlippableDispatchProps,
    IFlippableOwnProps,
    IFlippableProps,
    IFlippableStateProps,
} from './Flippable';
import {addFlippable, changeFlippableSide, removeFlippable} from './FlippableActions';
import {IFlippableState} from './FlippableReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFlippableOwnProps): IFlippableStateProps => {
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

export const FlippableConnected: React.ComponentClass<IFlippableProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Flippable);
