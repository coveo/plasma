import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IInputDispatchProps, IInputOwnProps, IInputStateProps} from '../input/Input';
import {Checkbox, ICheckboxProps} from './Checkbox';
import {addCheckbox, ICheckboxActionPayload, removeCheckbox, toggleCheckbox} from './CheckboxActions';
import {ICheckboxState} from './CheckboxReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IInputOwnProps): IInputStateProps => {
    const checkbox: ICheckboxState = _.findWhere(state.checkboxes, {id: ownProps.id});
    return {
        checked: checkbox && checkbox.checked,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void, ownProps: IInputOwnProps): IInputDispatchProps => {
    return {
        onRender: () => dispatch(addCheckbox(ownProps.id, ownProps.defaultChecked)),
        onDestroy: () => dispatch(removeCheckbox(ownProps.id)),
        onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(toggleCheckbox(ownProps.id)),
    };
};

export const CheckboxConnected: React.ComponentClass<ICheckboxProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
