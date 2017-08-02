import {
  DatesSelection,
  IDatesSelectionDispatchProps,
  IDatesSelectionOwnProps,
  IDatesSelectionProps,
  IDatesSelectionStateProps
} from './DatesSelection';
import {
  addDatePicker,
  changeDatePickerLowerLimit,
  changeDatePickerUpperLimit,
  DateLimits,
  removeDatePicker,
  selectDate
} from './DatePickerActions';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IDatePickerState } from './DatePickerReducers';
import { IOptionPickerState } from '../optionPicker/OptionPickerReducers';
import { changeOptionPicker } from '../optionPicker/OptionPickerActions';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: IDatesSelectionOwnProps): IDatesSelectionStateProps => {
  const item: IDatePickerState = _.findWhere(state.datePickers, { id: ownProps.id });
  const optionPicker: IOptionPickerState = _.findWhere(state.optionPickers, { id: ownProps.id });

  return {
    lowerLimit: item ? item.lowerLimit : new Date(),
    upperLimit: item ? item.upperLimit : new Date(),
    quickOption: optionPicker && optionPicker.selectedValue,
    isSelecting: item && item.selected,
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IDatesSelectionOwnProps): IDatesSelectionDispatchProps => ({
    onRender: () => {
      dispatch(addDatePicker(ownProps.id,
        ownProps.isRange,
        ownProps.color,
        ownProps.calendarId));
    },
    onDestroy: () => dispatch(removeDatePicker(ownProps.id)),
    onChange: (date: Date, isUpperLimit: boolean, optionPicker = false) => {
      if (isUpperLimit) {
        dispatch(changeDatePickerUpperLimit(ownProps.id, date));
      } else {
        dispatch(changeDatePickerLowerLimit(ownProps.id, date));
        if (!ownProps.isRange) { dispatch(changeDatePickerUpperLimit(ownProps.id, date)); }
      }

      if (!optionPicker) {
        dispatch(changeOptionPicker(ownProps.id, '', ''));
      }
    },
    onClick: (isUpperLimit: boolean) => {
      dispatch(selectDate(ownProps.id, (isUpperLimit ? DateLimits.upper : DateLimits.lower)));
    },
    onBlur: () => dispatch(selectDate(ownProps.id, '')),
  });

export const DatesSelectionConnected: React.ComponentClass<IDatesSelectionProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(DatesSelection);
