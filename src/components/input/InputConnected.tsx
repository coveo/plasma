import { IReactVaporState } from '../../ReactVapor';
import { IInputOwnProps, IInputStateProps, IInputDispatchProps, IInputProps, Input } from './Input';
import { IDispatch, ReduxUtils } from '../../utils/ReduxUtils';
import { addInput, removeInput, changeInputValue } from './InputActions';
import { connect } from 'react-redux';
import { findWhere } from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => {
  const input = findWhere(state.inputs, { id: ownProps.id });
  return {
    valid: input && input.valid,
    value: input && input.value,
    disabled: input && input.disabled,
  };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IInputOwnProps): IInputDispatchProps => ({
  onRender: (value: any, valid = true, disabled = false) => dispatch(addInput(ownProps.id, value, valid, disabled)),
  onDestroy: () => dispatch(removeInput(ownProps.id)),
  onChange: (value: any) => dispatch(changeInputValue(ownProps.id, value, ownProps.validate && ownProps.validate(value))),
});

export const InputConnected: React.ComponentClass<IInputProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Input);
