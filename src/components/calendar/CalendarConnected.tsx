import {
  ICalendarStateProps,
  ICalendarProps,
  Calendar,
  MONTH_PICKER_ID,
  YEAR_PICKER_ID,
  ICalendarOwnProps,
  ICalendarDispatchProps
} from './Calendar';
import { changeDatePickerUpperLimit, changeDatePickerLowerLimit, selectDate } from '../datePicker/DatePickerActions';
import { changeOptionPicker } from '../optionPicker/OptionPickerActions';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';
import { changeOptionsCycle } from '../optionsCycle/OptionsCycleActions';

const mapStateToProps = (state: IReactVaporState, ownProps: ICalendarOwnProps): ICalendarStateProps => {
  let selectedMonth = _.findWhere(state.optionsCycles, { id: ownProps.id + MONTH_PICKER_ID });
  let selectedYear = _.findWhere(state.optionsCycles, { id: ownProps.id + YEAR_PICKER_ID });

  return {
    withReduxState: true,
    selectedMonth: selectedMonth ? selectedMonth.currentOption : 0,
    selectedYear: selectedYear ? selectedYear.currentOption : 0,
    calendarSelection: _.where(state.datePickers, { calendarId: ownProps.id })
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: ICalendarOwnProps): ICalendarDispatchProps => ({
    onClick: (pickerId: string, isUpperLimit: boolean, value: Date) => {
      dispatch(selectDate(pickerId, ''));
      dispatch(changeOptionPicker(pickerId, '', ''));
      if (isUpperLimit) {
        dispatch(changeDatePickerUpperLimit(pickerId, value));
      } else {
        dispatch(changeDatePickerLowerLimit(pickerId, value));
      }
    },
    onDateChange: (pickerId: string, newValue: number) => dispatch(changeOptionsCycle(pickerId, newValue))
  });

export const CalendarConnected: React.ComponentClass<ICalendarProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Calendar);
