import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IInputDispatchProps, IInputOwnProps, IInputStateProps} from '../input/Input';
import {Checkbox, ICheckboxProps} from './Checkbox';
import {addCheckbox, ICheckboxActionPayload, removeCheckbox, toggleCheckbox} from './CheckboxActions';
import {CheckboxSelectors} from './CheckboxSelectors';

const mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => ({
    checked: CheckboxSelectors.getIsSelected(state, {id: ownProps.id}),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void,
    ownProps: IInputOwnProps
): IInputDispatchProps => {
    return {
        onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),
        onDestroy: () => dispatch(removeCheckbox(ownProps.id)),
        onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),
    };
};

export const CheckboxConnected: React.ComponentClass<ICheckboxProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Checkbox);
