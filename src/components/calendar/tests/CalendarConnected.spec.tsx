import {mount, ReactWrapper} from 'enzyme';
import * as moment from 'moment';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {DateUtils} from '../../../utils/DateUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {
    addDatePicker,
    changeDatePickerLowerLimit,
    changeDatePickerUpperLimit,
    DateLimits,
    selectDate,
} from '../../datePicker/DatePickerActions';
import {IDatePickerState} from '../../datePicker/DatePickerReducers';
import {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';
import {changeOptionsCycle} from '../../optionsCycle/OptionsCycleActions';
import {OptionsCycleConnected} from '../../optionsCycle/OptionsCycleConnected';
import {Calendar, ICalendarProps, MONTH_PICKER_ID, YEAR_PICKER_ID} from '../Calendar';
import {CalendarConnected} from '../CalendarConnected';

describe('Calendar', () => {
    const CALENDAR_ID: string = 'calendar';
    const PICKER_ID: string = 'some-picker';
    const DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE = addDatePicker(PICKER_ID, false, undefined, 'any', CALENDAR_ID);
    const DEFAULT_ADD_DATE_PICKER_WITH_RANGE = addDatePicker(PICKER_ID, true, undefined, 'any', CALENDAR_ID);

    describe('<CalendarConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let calendar: ReactWrapper<ICalendarProps, any>;
        let store: Store<IReactVaporState>;

        const mountComponent = (props = {}) => {
            if (wrapper && wrapper.length) {
                wrapper.unmount();
            }
            wrapper = mount(
                <Provider store={store}>
                    <CalendarConnected id={CALENDAR_ID} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            calendar = wrapper.find(Calendar).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();

            mountComponent();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get an id as a prop', () => {
            const idProp = calendar.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(CALENDAR_ID);
        });

        it('should get if it has a redux state as a prop', () => {
            const withReduxStateProp = calendar.props().withReduxState;

            expect(withReduxStateProp).toBeDefined();
            expect(withReduxStateProp).toBe(true);
        });

        it('should get the selected month as a prop', () => {
            const selectedMonthProp: number = calendar.props().selectedMonth;
            const expectedSelectedMonth: number = 3;

            expect(selectedMonthProp).toBeDefined();
            expect(selectedMonthProp).toBe(DateUtils.currentMonth);

            store.dispatch(changeOptionsCycle(CALENDAR_ID + MONTH_PICKER_ID, expectedSelectedMonth));
            wrapper.update();

            expect(wrapper.find(Calendar).props().selectedMonth).toBe(expectedSelectedMonth);
        });

        it('should get the selected year as a prop', () => {
            const selectedYearProp: number = calendar.props().selectedYear;
            const expectedSelectedYear: number = 3;

            expect(selectedYearProp).toBeDefined();
            expect(selectedYearProp).toBe(10);

            store.dispatch(changeOptionsCycle(CALENDAR_ID + YEAR_PICKER_ID, expectedSelectedYear));
            wrapper.update();

            expect(wrapper.find(Calendar).props().selectedYear).toBe(expectedSelectedYear);
        });

        it('should get the calendar selections as a prop', () => {
            const calendarSelectionProp = calendar.props().calendarSelection;

            expect(calendarSelectionProp).toBeDefined();
            expect(calendarSelectionProp).toEqual([]);

            store.dispatch(addDatePicker('any', false, undefined, 'any', CALENDAR_ID));
            wrapper.update();

            expect(wrapper.find(Calendar).props().calendarSelection.length).toBe(1);
        });

        it('should get what to do on click as a prop', () => {
            const onClickProp = calendar.props().onClick;

            expect(onClickProp).toBeDefined();
        });

        it('should get what to do on date change as a prop', () => {
            const onDateChangeProp = calendar.props().onDateChange;

            expect(onDateChangeProp).toBeDefined();
        });

        it('should get what to do on select unselectable as a prop', () => {
            const onSelectUnselectableProp = calendar.props().onSelectUnselectable;

            expect(onSelectUnselectableProp).toBeDefined();
        });

        it('should display two <OptionsCycleConnected /> (one for the month picker and the other for the year picker)', () => {
            expect(calendar.find(OptionsCycleConnected).length).toBe(2);
        });

        it('should set the selected value of the picker to an empty string when calling onClick on a date range picker ' +
            'and the limit selected is the upper one', () => {
                const pickerSelected: string = DateLimits.upper;

                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
                store.dispatch(selectDate(PICKER_ID, pickerSelected));

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);

                calendar.props().onClick(PICKER_ID, true, new Date());

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');
            });

        it('should set the selected value of the picker to the upper limit when calling onClick on a date range picker ' +
            'and the limit selected is the lower one', () => {
                const pickerSelected: string = DateLimits.lower;

                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
                store.dispatch(selectDate(PICKER_ID, pickerSelected));

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);

                calendar.props().onClick(PICKER_ID, false, new Date());

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(DateLimits.upper);
            });

        it('should set the selected value of the picker to an empty string when calling onClick on a standard date picker ' +
            'and the limit selected is the lower one', () => {
                const pickerSelected: string = DateLimits.lower;

                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE);
                store.dispatch(selectDate(PICKER_ID, pickerSelected));

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(pickerSelected);

                calendar.props().onClick(PICKER_ID, false, new Date());

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');
            });

        it('should reset the date picker if on click is called without a value', () => {
            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITHOUT_RANGE);
            store.dispatch(selectDate(PICKER_ID, DateLimits.lower));

            calendar.props().onClick(PICKER_ID, false, new Date());

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBeDefined();

            calendar.props().onClick(PICKER_ID, false, null);

            const datePicker: IDatePickerState = _.findWhere(store.getState().datePickers, {id: PICKER_ID});

            expect(datePicker.lowerLimit).toBe(datePicker.appliedLowerLimit);
            expect(datePicker.selected).toBe('');
        });

        it('should unselected any option from the option picker when calling onClick', () => {
            const pickerSelected: string = 'something-selected';
            const pickerLabelSelected: string = 'the label';

            store.dispatch(addOptionPicker(PICKER_ID));
            store.dispatch(changeOptionPicker(PICKER_ID, pickerLabelSelected, pickerSelected));

            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedValue).toBe(pickerSelected);
            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedLabel).toBe(pickerLabelSelected);

            calendar.props().onClick(PICKER_ID, false, new Date());

            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedValue).toBe('');
            expect(_.findWhere(store.getState().optionPickers, {id: PICKER_ID}).selectedLabel).toBe('');
        });

        it('should change the upper limit to the end of the day selected if the onClick was called on an upper limit',
            () => {
                const currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();
                const newLimit: Date = moment(new Date()).add(5, 'day').toDate();

                store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
                store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);

                calendar.props().onClick(PICKER_ID, true, newLimit);

                expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit)
                    .toEqual(moment(newLimit).endOf('day').toDate());
            });

        it('should change the lower limit if the onClick was called on a lower limit', () => {
            const currentLowerLimit: Date = moment(new Date()).add(10, 'day').toDate();
            const newLimit: Date = moment(new Date()).subtract(5, 'day').toDate();

            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerLowerLimit(PICKER_ID, currentLowerLimit));

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBe(currentLowerLimit);

            calendar.props().onClick(PICKER_ID, false, newLimit);

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).lowerLimit).toBe(newLimit);
        });

        it('should change the upper limit if the onClick was called on a lower limit and isLinkedToDateRange prop is false', () => {
            const currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();
            const newLimit: Date = moment(new Date()).subtract(5, 'day').toDate();

            mountComponent({isLinkedToDateRange: false});
            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);

            calendar.props().onClick(PICKER_ID, false, newLimit);

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(newLimit);
        });

        it('should not change the upper limit if onClick was called on a lower limit and isLinkedToDateRange prop is undefined', () => {
            const currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();
            const newLimit: Date = moment(new Date()).subtract(5, 'day').toDate();

            mountComponent({isLinkedToDateRange: undefined});
            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);

            calendar.props().onClick(PICKER_ID, false, newLimit);

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);
        });

        it('should not change the upper limit if onClick was called on a lower limit and isLinkedToDateRange prop is true', () => {
            const currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();
            const newLimit: Date = moment(new Date()).subtract(5, 'day').toDate();

            mountComponent({isLinkedToDateRange: true});
            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);

            calendar.props().onClick(PICKER_ID, false, newLimit);

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);
        });

        it('should change the selected month and year if one of the calendar selection changed a limit', () => {
            const secondYear: number = 1;
            const monthId: string = CALENDAR_ID + MONTH_PICKER_ID;
            const yearId: string = CALENDAR_ID + YEAR_PICKER_ID;

            store.dispatch(changeOptionsCycle(monthId, 13));
            store.dispatch(changeOptionsCycle(yearId, secondYear));

            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerLowerLimit(PICKER_ID, moment().endOf('hour').toDate()));

            expect(_.findWhere(store.getState().optionsCycles, {id: monthId}).currentOption).toBe(DateUtils.currentMonth);
            expect(_.findWhere(store.getState().optionsCycles, {id: yearId}).currentOption).not.toBe(secondYear);

            store.dispatch(changeOptionsCycle(monthId, 13));
            store.dispatch(changeOptionsCycle(yearId, secondYear));

            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, moment().endOf('year').toDate()));

            expect(_.findWhere(store.getState().optionsCycles, {id: monthId}).currentOption).toBe(11);
            expect(_.findWhere(store.getState().optionsCycles, {id: yearId}).currentOption).not.toBe(secondYear);
        });

        it('should set the upper limit to null and select the upper limit if an unselectable day has been selected', () => {
            // this can legitimately happen only under the following conditions: when a rule for range length is set, a both limits are set
            // then a new lower limit that exceeds the range length is being set

            const currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();

            store.dispatch(DEFAULT_ADD_DATE_PICKER_WITH_RANGE);
            store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(currentUpperLimit);
            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe('');

            calendar.props().onSelectUnselectable(PICKER_ID);

            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).upperLimit).toBe(null);
            expect(_.findWhere(store.getState().datePickers, {id: PICKER_ID}).selected).toBe(DateLimits.upper);
        });
    });
});
