import { shallow, mount, ReactWrapper } from 'enzyme';
import { CalendarDay, IDay, ICalendarDayProps } from '../CalendarDay';
import { DateUtils } from '../../../utils/DateUtils';

import * as moment from 'moment';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Calendar day', () => {
  let newMonth = DateUtils.currentMonth < 11 ? DateUtils.currentMonth + 1 : 0;
  const DAY: IDay = {
    number: 2,
    isCurrentMonth: true,
    isToday: false,
    date: moment(new Date(2017, newMonth, 2))
  };

  const BASIC_CALENDAR_DAY_PROPS: ICalendarDayProps = {
    day: DAY,
    onClick: jasmine.createSpy('onClick')
  };

  describe('<CalendarDay />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <CalendarDay {...BASIC_CALENDAR_DAY_PROPS} />
        );
      }).not.toThrow();
    });
  });

  describe('<CalendarDay />', () => {
    let calendarDay: ReactWrapper<ICalendarDayProps, any>;

    beforeEach(() => {
      document.getElementById('App').innerHTML = '<table><tbody><tr id="AppTableRow"></tr></tbody></table>';

      calendarDay = mount(
        <CalendarDay {...BASIC_CALENDAR_DAY_PROPS} />,
        { attachTo: document.getElementById('AppTableRow') }
      );
    });

    afterEach(() => {
      calendarDay.unmount();
      calendarDay.detach();
    });

    it('should get the day as a prop', () => {
      let dayProp = calendarDay.props().day;

      expect(dayProp).toBeDefined();
      expect(dayProp).toEqual(DAY);
    });

    it('should display the number of the day', () => {
      expect(calendarDay.html()).toContain(DAY.number);
    });

    it('should have the class "other-month-date" is the isCurrentMonth of the day prop is set to false', () => {
      let dayFromOtherMonth: IDay = _.extend({}, DAY, { isCurrentMonth: false });
      let newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, { day: dayFromOtherMonth });

      expect(calendarDay.find('.other-month-date').length).toBe(0);

      calendarDay.setProps(newProps);

      expect(calendarDay.find('.other-month-date').length).toBe(1);
    });

    it('should have the class "todays-date" is the isToday of the day prop is set to true', () => {
      let today: IDay = _.extend({}, DAY, { isToday: true });
      let newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, { day: today });

      expect(calendarDay.find('.todays-date').length).toBe(0);

      calendarDay.setProps(newProps);

      expect(calendarDay.find('.todays-date').length).toBe(1);
    });

    it('should call onClick when clicking the day', () => {
      calendarDay.find('td').simulate('click');

      expect(BASIC_CALENDAR_DAY_PROPS.onClick).toHaveBeenCalled();
    });
  });
});
