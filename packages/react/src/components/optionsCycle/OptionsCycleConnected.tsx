import {connect} from 'react-redux';

import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {
    IOptionsCycleConnectedOwnProps,
    IOptionsCycleDispatchProps,
    IOptionsCycleStateProps,
    OptionsCycle,
} from './OptionsCycle';
import {addOptionsCycle, changeOptionsCycle, removeOptionsCycle} from './OptionsCycleActions';
import {OptionsCycleSelectors} from './OptionsCycleSelectors';

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

export const OptionsCycleConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(OptionsCycle);
