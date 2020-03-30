import moment from 'moment';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {
    changeDatePickerLowerLimit,
    changeDatePickerUpperLimit,
    DateLimits,
    resetDatePickers,
    selectDate,
} from '../datePicker/DatePickerActions';
import {resetOptionPickers} from '../optionPicker/OptionPickerActions';
import {changeOptionsCycle} from '../optionsCycle/OptionsCycleActions';
import {
    Calendar,
    ICalendarDispatchProps,
    ICalendarOwnProps,
    ICalendarProps,
    ICalendarStateProps,
    MONTH_PICKER_ID,
    YEAR_PICKER_ID,
} from './Calendar';

const mapStateToProps = (state: IReactVaporState, ownProps: ICalendarOwnProps): ICalendarStateProps => {
    const selectedMonth = _.findWhere(state.optionsCycles, {id: ownProps.id + MONTH_PICKER_ID});
    const selectedYear = _.findWhere(state.optionsCycles, {id: ownProps.id + YEAR_PICKER_ID});

    return {
        withReduxState: true,
        selectedMonth: selectedMonth ? selectedMonth.currentOption : 0,
        selectedYear: selectedYear ? selectedYear.currentOption : 0,
        calendarSelection: _.where(state.datePickers, {calendarId: ownProps.id}),
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ICalendarOwnProps
): ICalendarDispatchProps => ({
    onClick: (pickerId: string, isUpperLimit: boolean, value: Date) => {
        dispatch(resetOptionPickers(pickerId));
        if (value && isUpperLimit) {
            dispatch(
                changeDatePickerUpperLimit(
                    pickerId,
                    moment(value)
                        .endOf('day')
                        .toDate()
                )
            );
        } else if (value) {
            dispatch(changeDatePickerLowerLimit(pickerId, value));

            // mirror upper limit to lower limit if not linked with a date range
            // this will cause the selected lower limit date to display in the calendar right after selection of the lower limit date
            if (!_.isUndefined(ownProps.isLinkedToDateRange) && !ownProps.isLinkedToDateRange) {
                dispatch(changeDatePickerUpperLimit(pickerId, value));
                dispatch(selectDate(pickerId, DateLimits.lower));
            }
        } else {
            dispatch(resetDatePickers(pickerId));
        }
    },
    onSelectUnselectable: (pickerId: string) => {
        dispatch(changeDatePickerUpperLimit(pickerId, null));
        dispatch(selectDate(pickerId, DateLimits.upper));
    },
    onDateChange: (pickerId: string, newValue: number) => dispatch(changeOptionsCycle(pickerId, newValue)),
});

export const CalendarConnected: React.ComponentClass<ICalendarProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Calendar);
