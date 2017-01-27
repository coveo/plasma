import { shallow, mount, ReactWrapper } from 'enzyme';
import { CalendarDay, IDay, ICalendarDayProps } from '../CalendarDay';
import * as moment from 'moment';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
import createSpy = jasmine.createSpy;
/* tslint:enable:no-unused-variable */

describe('Calendar day', () => {
  const DAY: IDay = {
    number: 2,
    isCurrentMonth: true,
    isToday: false,
    date: moment(new Date(2017, 2, 2))
  };

  describe('<CalendarDay />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <CalendarDay day={DAY} />
        );
      }).not.toThrow();
    });
  });

  describe('<CalendarDay />', () => {
    let calendarDay: ReactWrapper<ICalendarDayProps, any>;

    beforeEach(() => {
      document.getElementById('App').innerHTML = '<table><tbody><tr id="AppTableRow"></tr></tbody></table>';

      calendarDay = mount(
        <CalendarDay day={DAY} />,
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

      expect(calendarDay.find('.other-month-date').length).toBe(0);

      calendarDay.setProps({ day: dayFromOtherMonth });

      expect(calendarDay.find('.other-month-date').length).toBe(1);
    });

    it('should have the class "todays-date" is the isToday of the day prop is set to true', () => {
      let today: IDay = _.extend({}, DAY, { isToday: true });

      expect(calendarDay.find('.todays-date').length).toBe(0);

      calendarDay.setProps({ day: today });

      expect(calendarDay.find('.todays-date').length).toBe(1);
    });

    it('should not throw on click if the onClick prop is not set', () => {
      expect(() => {
        calendarDay.find('td').simulate('click');
      }).not.toThrow();
    });

    it('should call onClick when clicking the day if the prop is set', () => {
      let onClickSpy: jasmine.Spy = createSpy('onClick');

      calendarDay.setProps({ day: DAY, onClick: onClickSpy });

      calendarDay.find('td').simulate('click');

      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
