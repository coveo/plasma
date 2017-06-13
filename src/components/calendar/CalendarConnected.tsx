import {
  Calendar,
  ICalendarDispatchProps,
  ICalendarOwnProps,
  ICalendarProps,
  ICalendarStateProps,
  MONTH_PICKER_ID,
  YEAR_PICKER_ID
} from './Calendar';
import {
  changeDatePickerLowerLimit,
  changeDatePickerUpperLimit,
  DateLimits,
  resetDatePickers,
  selectDate
} from '../datePicker/DatePickerActions';
import { changeOptionPicker } from '../optionPicker/OptionPickerActions';
import { changeOptionsCycle } from '../optionsCycle/OptionsCycleActions';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';
import * as moment from 'moment';

const mapStateToProps = (state: IReactVaporState, ownProps: ICalendarOwnProps): ICalendarStateProps => {
  const selectedMonth = _.findWhere(state.optionsCycles, { id: ownProps.id + MONTH_PICKER_ID });
  const selectedYear = _.findWhere(state.optionsCycles, { id: ownProps.id + YEAR_PICKER_ID });

  return {
    withReduxState: true,
    selectedMonth: selectedMonth ? selectedMonth.currentOption : 0,
    selectedYear: selectedYear ? selectedYear.currentOption : 0,
    calendarSelection: _.where(state.datePickers, { calendarId: ownProps.id }),
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: ICalendarOwnProps): ICalendarDispatchProps => ({
    onClick: (pickerId: string, isUpperLimit: boolean, value: Date) => {
      dispatch(selectDate(pickerId, ''));
      dispatch(changeOptionPicker(pickerId, '', ''));
      if (!value) {
        dispatch(resetDatePickers(pickerId));
      } else {
        if (isUpperLimit) {
          dispatch(changeDatePickerUpperLimit(pickerId, moment(value).endOf('day').toDate()));
        } else {
          dispatch(changeDatePickerLowerLimit(pickerId, value));
          dispatch(selectDate(pickerId, DateLimits.upper));
        }
      }
    },
    onDateChange: (pickerId: string, newValue: number) => dispatch(changeOptionsCycle(pickerId, newValue)),
  });

export const CalendarConnected: React.ComponentClass<ICalendarProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Calendar);
