import {connect} from 'react-redux';
import {WithDirtyActions} from '../../hoc/withDirty/withDirtyActions';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {IInputDispatchProps, IInputOwnProps, IInputProps, IInputStateProps, Input} from './Input';
import {addInput, changeInputValue, removeInput} from './InputActions';
import {InputSelectors} from './InputSelectors';

const mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => {
    const input = InputSelectors.getInput(state, {id: ownProps.id});
    return {
        valid: input && input.valid,
        value: input && input.value,
        disabled: input && input.disabled,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IInputOwnProps): IInputDispatchProps => ({
    onRender: (value: string = '', valid = true, disabled = false) =>
        dispatch(addInput(ownProps.id, value, valid, disabled)),
    onDestroy: () => dispatch(removeInput(ownProps.id)),
    onChange: (value: string, valid = true) => {
        dispatch(changeInputValue(ownProps.id, value, valid));
        dispatch(WithDirtyActions.toggle(ownProps.id, !!valid));
    },
});

export const InputConnected: React.ComponentClass<IInputProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Input);
