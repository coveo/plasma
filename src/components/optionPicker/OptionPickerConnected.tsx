import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import {
  IOptionPickerOwnProps,
  IOptionPickerStateProps,
  IOptionPickerDispatchProps,
  OptionPicker,
  IOptionPickerProps
} from './OptionPicker';
import { IOptionPickerState } from './OptionPickerReducers';
import { addOptionPicker, removeOptionPicker, changeOptionPicker } from './OptionPickerActions';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: IOptionPickerOwnProps): IOptionPickerStateProps => {
  let item: IOptionPickerState = _.findWhere(state.optionPickers, { id: ownProps.id });

  return {
    activeLabel: item ? item.selectedLabel : ''
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IOptionPickerOwnProps): IOptionPickerDispatchProps => ({
    onRender: () => dispatch(addOptionPicker(ownProps.id)),
    onDestroy: () => dispatch(removeOptionPicker(ownProps.id)),
    onClick: (value: string, label: string) => dispatch(changeOptionPicker(ownProps.id, label, value))
  });

export const OptionPickerConnected: React.ComponentClass<IOptionPickerProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(OptionPicker);
