import {ComponentType} from 'react';
import {connect} from 'react-redux';

import {IReduxActionsPayload, PlasmaState} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {
    IOptionsCycleConnectedOwnProps,
    IOptionsCycleDispatchProps,
    IOptionsCycleOwnProps,
    IOptionsCycleStateProps,
    OptionsCycle,
} from './OptionsCycle.js';
import {addOptionsCycle, changeOptionsCycle, removeOptionsCycle} from './OptionsCycleActions.js';
import {OptionsCycleSelectors} from './OptionsCycleSelectors.js';

const mapStateToProps = (state: PlasmaState, ownProps: IOptionsCycleConnectedOwnProps): IOptionsCycleStateProps => ({
    currentOption: OptionsCycleSelectors.getCurrentOption(state, {id: ownProps.id, startAt: ownProps.startAt}),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IOptionsCycleConnectedOwnProps
): IOptionsCycleDispatchProps => ({
    onRender: () => dispatch(addOptionsCycle(ownProps.id, ownProps.startAt)),
    onDestroy: () => dispatch(removeOptionsCycle(ownProps.id)),
    onChange: (index: number) => dispatch(changeOptionsCycle(ownProps.id, index)),
});

/**
 * @deprecated Use Mantine instead
 */
export const OptionsCycleConnected: ComponentType<IOptionsCycleOwnProps & IOptionsCycleConnectedOwnProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(OptionsCycle);
