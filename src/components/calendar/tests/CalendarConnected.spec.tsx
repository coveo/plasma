import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Provider } from 'react-redux';
import { ICalendarProps, Calendar, MONTH_PICKER_ID, YEAR_PICKER_ID } from '../Calendar';
import { CalendarConnected } from '../CalendarConnected';
import { changeOptionsCycle } from '../../optionsCycle/OptionsCycleActions';
import { OptionsCycleConnected } from '../../optionsCycle/OptionsCycleConnected';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Calendar', () => {
  const CALENDAR_ID: string = 'calendar';

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
      expect(selectedMonthProp).toBe(0);

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

    it('should display two <OptionsCycleConnected /> (one for the month picker and the other for the year picker)', () => {
      expect(calendar.find(OptionsCycleConnected).length).toBe(2);
    });
  });
});
