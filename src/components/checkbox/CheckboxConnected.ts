import { IInputOwnProps, IInputStateProps, IInputDispatchProps, IInputProps } from '../input/Input';
import * as _ from 'underscore';
import { ICheckboxState } from './CheckboxReducers';
import { IReactVaporState } from '../../ReactVapor';
import { addCheckbox, removeCheckbox, ICheckboxActionPayload, toggleCheckbox } from './CheckboxActions';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';
import { Checkbox } from './Checkbox';

const mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => {
  const checkbox: ICheckboxState = _.findWhere(state.checkboxes, { id: ownProps.id });
  return {
    checked: checkbox ? checkbox.checked : false
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void, ownProps: IInputOwnProps): IInputDispatchProps => {
  return {
    onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),
    onDestroy: () => dispatch(removeCheckbox(ownProps.id)),
    onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),
  };
};

export const CheckboxConnected: React.ComponentClass<IInputProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
