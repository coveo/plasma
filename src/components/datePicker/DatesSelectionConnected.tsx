import {
  DatesSelection,
  IDatesSelectionProps,
  IDatesSelectionOwnProps,
  IDatesSelectionStateProps,
  IDatesSelectionDispatchProps
} from './DatesSelection';
import {
  addDatePicker,
  removeDatePicker,
  changeDatePickerUpperLimit,
  changeDatePickerLowerLimit, selectDate, DateLimits
} from './DatePickerActions';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IDatePickerState } from './DatePickerReducers';
import { IOptionPickerState } from '../optionsPicker/OptionPickerReducers';
import { changeOptionPicker } from '../optionsPicker/OptionPickerActions';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: IDatesSelectionOwnProps): IDatesSelectionStateProps => {
  let item: IDatePickerState = _.findWhere(state.datePickers, { id: ownProps.id });
  let optionPicker: IOptionPickerState = _.findWhere(state.optionPickers, { id: ownProps.id });

  return {
    lowerLimit: item ? item.lowerLimit : new Date(),
    upperLimit: item ? item.upperLimit : new Date(),
    quickOption: optionPicker ? optionPicker.selectedValue : '',
    isSelecting: item ? item.selected : ''
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IDatesSelectionOwnProps): IDatesSelectionDispatchProps => ({
    onRender: () => dispatch(addDatePicker(ownProps.id, ownProps.isRange, ownProps.color, ownProps.calendarId)),
    onDestroy: () => dispatch(removeDatePicker(ownProps.id)),
    onChange: (date: Date, isUpperLimit: boolean, optionPicker = false) => {
      if (isUpperLimit) {
        dispatch(changeDatePickerUpperLimit(ownProps.id, date));
      } else {
        dispatch(changeDatePickerLowerLimit(ownProps.id, date));
      }

      if (!optionPicker) {
        dispatch(changeOptionPicker(ownProps.id, ''));
      }
    },
    onClick: (isUpperLimit: boolean) => dispatch(selectDate(ownProps.id, (isUpperLimit ? DateLimits.upper : DateLimits.lower)))
  });

export const DatesSelectionConnected: React.ComponentClass<IDatesSelectionProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(DatesSelection);
