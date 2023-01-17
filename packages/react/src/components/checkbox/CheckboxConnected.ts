import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {IInputDispatchProps, IInputOwnProps, IInputStateProps} from '../input/Input.js';
import {Checkbox} from './Checkbox.js';
import {addCheckbox, ICheckboxActionPayload, removeCheckbox, toggleCheckbox} from './CheckboxActions.js';
import {CheckboxSelectors} from './CheckboxSelectors.js';

const mapStateToProps = (state: PlasmaState, ownProps: IInputOwnProps): IInputStateProps => ({
    checked: CheckboxSelectors.getIsSelected(state, {id: ownProps.id}),
    disabled: CheckboxSelectors.getIsDisabled(state, {id: ownProps.id}),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void,
    ownProps: IInputOwnProps
): IInputDispatchProps => ({
    onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),
    onDestroy: () => dispatch(removeCheckbox(ownProps.id)),
    onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),
});

/**
 * @deprecated Use Mantine Checkbox instead: https://mantine.dev/core/checkbox/
 */
export const CheckboxConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
