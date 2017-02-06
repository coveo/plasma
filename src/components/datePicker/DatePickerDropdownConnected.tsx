import {
  IDatePickerDropdownProps,
  DatePickerDropdown,
  IDatePickerDropdownDispatchProps,
  IDatePickerDropdownOwnProps,
  IDatePickerDropdownStateProps
} from './DatePickerDropdown';
import { addDropdown, removeDropdown, toggleDropdown, closeDropdown } from '../dropdown/DropdownActions';
import { IDropdownState } from '../dropdown/DropdownReducers';
import { applyDatePicker, resetDatePickers } from './DatePickerActions';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {resetOptionPickers} from '../optionsPicker/OptionPickerActions';

const mapStateToProps = (state: IReactVaporState, ownProps: IDatePickerDropdownOwnProps): IDatePickerDropdownStateProps => {
  let item: IDropdownState = _.findWhere(state.dropdowns, { id: ownProps.id });

  return {
    isOpened: item && item.opened,
    withReduxState: true
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: IDatePickerDropdownOwnProps): IDatePickerDropdownDispatchProps => ({
  onRender: () => dispatch(addDropdown(ownProps.id)),
  onDestroy: () => dispatch(removeDropdown(ownProps.id)),
  onClick: () => dispatch(toggleDropdown(ownProps.id)),
  onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),
  onApply: () => {
    dispatch(applyDatePicker(ownProps.id));
    dispatch(closeDropdown(ownProps.id));
  },
  onCancel: () => {
    dispatch(resetDatePickers(ownProps.id));
    dispatch(resetOptionPickers(ownProps.id));
    dispatch(closeDropdown(ownProps.id));
  }
});

export const DatePickerDropdownConnected: React.ComponentClass<IDatePickerDropdownProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(DatePickerDropdown);
