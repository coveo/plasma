import { connect } from 'react-redux';
import * as _ from 'underscore';
import { IReactVaporState } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { IInputDispatchProps } from '../input/Input';
import { Checkbox, ICheckboxProps } from './Checkbox';
import { ICheckboxState } from './CheckboxReducers';
import {
  addGroupedCheckbox,
  IGroupableCheckboxActionPayload,
  removeGroupedCheckbox,
  toggleGroupedCheckbox,
} from './GroupableCheckboxActions';
import { IGroupableCheckboxesState } from './GroupableCheckboxReducers';

export interface IGroupableCheckboxOwnProps extends ICheckboxProps {
  isParent?: boolean;
  parentId?: string;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IGroupableCheckboxOwnProps): ICheckboxProps => {
  const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state.groupableCheckboxes, { parentId: ownProps.parentId || ownProps.id });
  if (groupableCheckboxesState) {
    const checkbox: ICheckboxState = ownProps.isParent ? groupableCheckboxesState.parent : _.findWhere(groupableCheckboxesState.checkboxes, {id: ownProps.id});
    return {
      checked: checkbox && checkbox.checked,
      indeterminate: ownProps.isParent && groupableCheckboxesState.nbSelected > 0 &&
                     groupableCheckboxesState.nbSelected < groupableCheckboxesState.total,
    };
  }

  return {
    checked: ownProps.checked || false,
    indeterminate: false,
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IGroupableCheckboxActionPayload>) => void, ownProps: IGroupableCheckboxOwnProps): IInputDispatchProps => {
  return {
    onRender: () => dispatch(addGroupedCheckbox(ownProps.id, ownProps.defaultChecked, ownProps.parentId, !!ownProps.isParent)),
    onDestroy: () => dispatch(removeGroupedCheckbox(ownProps.id, ownProps.parentId)),
    onClick: () => dispatch(toggleGroupedCheckbox(ownProps.id, ownProps.parentId, !!ownProps.isParent)),
  };
};

export const GroupableCheckboxConnected: React.ComponentClass<IGroupableCheckboxOwnProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
