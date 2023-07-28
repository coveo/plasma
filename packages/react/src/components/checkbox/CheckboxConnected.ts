import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IInputDispatchProps, IInputOwnProps, IInputStateProps} from '../input/Input';
import {Checkbox} from './Checkbox';
import {addCheckbox, ICheckboxActionPayload, removeCheckbox, toggleCheckbox} from './CheckboxActions';
import {CheckboxSelectors} from './CheckboxSelectors';

const mapStateToProps = (state: PlasmaState, ownProps: IInputOwnProps): IInputStateProps => ({
    checked: CheckboxSelectors.getIsSelected(state, {id: ownProps.id}),
    disabled: CheckboxSelectors.getIsDisabled(state, {id: ownProps.id}),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void,
    ownProps: IInputOwnProps,
): IInputDispatchProps => ({
    onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),
    onDestroy: () => dispatch(removeCheckbox(ownProps.id)),
    onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),
});

/**
 * @deprecated Use Mantine Checkbox instead: https://mantine.dev/core/checkbox/
 */
export const CheckboxConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
