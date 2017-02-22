import { mount, ReactWrapper } from 'enzyme';
import { Store, Provider } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { ICalendarProps, Calendar, MONTH_PICKER_ID, YEAR_PICKER_ID } from '../Calendar';
import { CalendarConnected } from '../CalendarConnected';
import { changeOptionsCycle } from '../../optionsCycle/OptionsCycleActions';
import { OptionsCycleConnected } from '../../optionsCycle/OptionsCycleConnected';
import { DateUtils } from '../../../utils/DateUtils';
import {
  addDatePicker,
  selectDate,
  changeDatePickerUpperLimit,
  changeDatePickerLowerLimit, DateLimits
} from '../../datePicker/DatePickerActions';
import { addOptionPicker, changeOptionPicker } from '../../optionPicker/OptionPickerActions';
import * as _ from 'underscore';
import moment = require('moment');
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Calendar', () => {
  const CALENDAR_ID: string = 'calendar';
  const PICKER_ID: string = 'some-picker';

  describe('<CalendarConnected />', () => {
    let wrapper: ReactWrapper<any, any>;
    let calendar: ReactWrapper<ICalendarProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <CalendarConnected id={CALENDAR_ID} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      calendar = wrapper.find(Calendar).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get an id as a prop', () => {
      let idProp = calendar.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(CALENDAR_ID);
    });

    it('should get if it has a redux state as a prop', () => {
      let withReduxStateProp = calendar.props().withReduxState;

      expect(withReduxStateProp).toBeDefined();
      expect(withReduxStateProp).toBe(true);
    });

    it('should get the selected month as a prop', () => {
      let selectedMonthProp: number = calendar.props().selectedMonth;
      let expectedSelectedMonth: number = 3;

      expect(selectedMonthProp).toBeDefined();
      expect(selectedMonthProp).toBe(DateUtils.currentMonth);

      store.dispatch(changeOptionsCycle(CALENDAR_ID + MONTH_PICKER_ID, expectedSelectedMonth));
      selectedMonthProp = calendar.props().selectedMonth;

      expect(selectedMonthProp).toBe(expectedSelectedMonth);
    });

    it('should get the selected year as a prop', () => {
      let selectedYearProp: number = calendar.props().selectedYear;
      let expectedSelectedYear: number = 3;

      expect(selectedYearProp).toBeDefined();
      expect(selectedYearProp).toBe(10);

      store.dispatch(changeOptionsCycle(CALENDAR_ID + YEAR_PICKER_ID, expectedSelectedYear));
      selectedYearProp = calendar.props().selectedYear;

      expect(selectedYearProp).toBe(expectedSelectedYear);
    });

    it('should get the calendar selections as a prop', () => {
      let calendarSelectionProp = calendar.props().calendarSelection;

      expect(calendarSelectionProp).toBeDefined();
      expect(calendarSelectionProp).toEqual([]);

      store.dispatch(addDatePicker('any', false, 'any', CALENDAR_ID));

      calendarSelectionProp = calendar.props().calendarSelection;

      expect(calendarSelectionProp).toBeDefined();
      expect(calendarSelectionProp.length).toBe(1);
    });

    it('should get what to do on click as a prop', () => {
      let onClickProp = calendar.props().onClick;

      expect(onClickProp).toBeDefined();
    });

    it('should display two <OptionsCycleConnected /> (one for the month picker and the other for the year picker)', () => {
      expect(calendar.find(OptionsCycleConnected).length).toBe(2);
    });

    it('should set the selected value of the picker to an empty string when calling onClick and the limit selected ' +
      'is the upper one', () => {
        let pickerSelected: string = DateLimits.upper;

        store.dispatch(addDatePicker(PICKER_ID, false, 'any', CALENDAR_ID));
        store.dispatch(selectDate(PICKER_ID, pickerSelected));

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).selected).toBe(pickerSelected);

        calendar.props().onClick(PICKER_ID, true, new Date());

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).selected).toBe('');
      });

    it('should set the selected value of the picker to the upper limit when calling onClick and the limit selected ' +
      'is the lower one', () => {
        let pickerSelected: string = DateLimits.lower;

        store.dispatch(addDatePicker(PICKER_ID, false, 'any', CALENDAR_ID));
        store.dispatch(selectDate(PICKER_ID, pickerSelected));

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).selected).toBe(pickerSelected);

        calendar.props().onClick(PICKER_ID, false, new Date());

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).selected).toBe(DateLimits.upper);
      });

    it('should unselected any option from the option picker when calling onClick', () => {
      let pickerSelected: string = 'something-selected';
      let pickerLabelSelected: string = 'the label';

      store.dispatch(addOptionPicker(PICKER_ID));
      store.dispatch(changeOptionPicker(PICKER_ID, pickerLabelSelected, pickerSelected));

      expect(_.findWhere(store.getState().optionPickers, { id: PICKER_ID }).selectedValue).toBe(pickerSelected);
      expect(_.findWhere(store.getState().optionPickers, { id: PICKER_ID }).selectedLabel).toBe(pickerLabelSelected);

      calendar.props().onClick(PICKER_ID, false, new Date());

      expect(_.findWhere(store.getState().optionPickers, { id: PICKER_ID }).selectedValue).toBe('');
      expect(_.findWhere(store.getState().optionPickers, { id: PICKER_ID }).selectedLabel).toBe('');
    });

    it('should change the upper limit to the end of the day selected if the onClick was called on an upper limit',
      () => {
        let currentUpperLimit: Date = moment(new Date()).add(10, 'day').toDate();
        let newLimit: Date = moment(new Date()).add(5, 'day').toDate();

        store.dispatch(addDatePicker(PICKER_ID, true, 'any', CALENDAR_ID));
        store.dispatch(changeDatePickerUpperLimit(PICKER_ID, currentUpperLimit));

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).upperLimit).toBe(currentUpperLimit);

        calendar.props().onClick(PICKER_ID, true, newLimit);

        expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).upperLimit)
          .toEqual(moment(newLimit).endOf('day').toDate());
      });

    it('should change the lower limit if the onClick was called on a lower limit', () => {
      let currentLowerLimit: Date = moment(new Date()).add(10, 'day').toDate();
      let newLimit: Date = moment(new Date()).subtract(5, 'day').toDate();

      store.dispatch(addDatePicker(PICKER_ID, true, 'any', CALENDAR_ID));
      store.dispatch(changeDatePickerLowerLimit(PICKER_ID, currentLowerLimit));

      expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).lowerLimit).toBe(currentLowerLimit);

      calendar.props().onClick(PICKER_ID, false, newLimit);

      expect(_.findWhere(store.getState().datePickers, { id: PICKER_ID }).lowerLimit).toBe(newLimit);
    });

    it('should change the selected month and year if one of the calendar selection changed a limit', () => {
      let secondYear: number = 1;
      let monthId: string = CALENDAR_ID + MONTH_PICKER_ID;
      let yearId: string = CALENDAR_ID + YEAR_PICKER_ID;

      store.dispatch(changeOptionsCycle(monthId, 13));
      store.dispatch(changeOptionsCycle(yearId, secondYear));

      store.dispatch(addDatePicker(PICKER_ID, true, 'any', CALENDAR_ID));
      store.dispatch(changeDatePickerLowerLimit(PICKER_ID, moment().endOf('hour').toDate()));

      expect(_.findWhere(store.getState().optionsCycles, { id: monthId }).currentOption).toBe(DateUtils.currentMonth);
      expect(_.findWhere(store.getState().optionsCycles, { id: yearId }).currentOption).not.toBe(secondYear);

      store.dispatch(changeOptionsCycle(monthId, 13));
      store.dispatch(changeOptionsCycle(yearId, secondYear));

      store.dispatch(addDatePicker(PICKER_ID, true, 'any', CALENDAR_ID));
      store.dispatch(changeDatePickerUpperLimit(PICKER_ID, moment().endOf('year').toDate()));

      expect(_.findWhere(store.getState().optionsCycles, { id: monthId }).currentOption).toBe(11);
      expect(_.findWhere(store.getState().optionsCycles, { id: yearId }).currentOption).not.toBe(secondYear);
    });
  });
});
