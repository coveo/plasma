import {IReactVaporState} from '../../ReactVapor';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ICalendarStateProps, ICalendarProps, Calendar, MONTH_PICKER_ID, YEAR_PICKER_ID} from './Calendar';
import {connect} from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState): ICalendarStateProps => {
  let selectedMonth = _.findWhere(state.optionsCycles, {id: MONTH_PICKER_ID});
  let selectedYear = _.findWhere(state.optionsCycles, {id: YEAR_PICKER_ID});

  return {
    withReduxState: true,
    selectedMonth: selectedMonth ? selectedMonth.currentOption : 0,
    selectedYear: selectedYear ? selectedYear.currentOption : 0
  };
};

const mapDispatchToProps = () => ({});

export const CalendarConnected: React.ComponentClass<ICalendarProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Calendar);
