import { shallow, mount, ReactWrapper } from 'enzyme';
import { Calendar, ICalendarProps, DEFAULT_DAYS, DEFAULT_MONTHS, DEFAULT_YEARS } from '../Calendar';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
import { OptionsCycle, IOptionsCycleProps } from '../../optionsCycle/OptionsCycle';
import { DateUtils } from '../../../utils/DateUtils';
/* tslint:enable:no-unused-variable */

describe('Calendar', () => {

  describe('<Calendar />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Calendar />
        );
      }).not.toThrow();
    });
  });

  describe('<Calendar />', () => {
    let calendar: ReactWrapper<ICalendarProps, any>;

    beforeEach(() => {
      calendar = mount(
        <Calendar />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      calendar.unmount();
      calendar.detach();
    });

    it('should display 2 <OptionsCycle /> (one for the month and the other for the year)', () => {
      expect(calendar.find('OptionsCycle').length).toBe(2);
    });

    it('should display a <TableHeader />', () => {
      expect(calendar.find('TableHeader').length).toBe(1);
    });

    it('should display the days set as props or the default ones', () => {
      let days: string[] = [
        'lun',
        'mar',
        'mer',
        'jeu',
        'ven',
        'sam',
        'dim'
      ];

      _.each(DEFAULT_DAYS, (day: string) => {
        expect(calendar.html()).toContain(day);
      });

      calendar.setProps({ days });

      _.each(days, (day: string) => {
        expect(calendar.html()).toContain(day);
      });
    });

    it('should send the months sent as props or the default ones to the month picker <OptionsCycle />', () => {
      let months: string[] = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre'
      ];
      let monthPicker: ReactWrapper<IOptionsCycleProps, any> = calendar.find(OptionsCycle).first();

      expect(monthPicker.props().options).toEqual(DEFAULT_MONTHS);

      calendar.setProps({ months });

      expect(monthPicker.props().options).toEqual(months);
    });

    it('should send the years sent as props or the default ones to the year picker <OptionsCycle />', () => {
      let years: string[] = [
        '2015',
        '2016',
        '2017'
      ];
      let yearPicker: ReactWrapper<IOptionsCycleProps, any> = calendar.find(OptionsCycle).last();

      expect(yearPicker.props().options).toEqual(DEFAULT_YEARS);

      calendar.setProps({ years });

      expect(yearPicker.props().options).toEqual(years);
    });

    it('should use the startingMonth prop to set the month picker at the desired month or use the current one', () => {
      let startingMonth: number = 5;

      expect(calendar.html()).toContain(DEFAULT_MONTHS[DateUtils.currentMonth]);

      calendar.unmount();
      calendar = mount(
        <Calendar startingMonth={startingMonth} />,
        { attachTo: document.getElementById('App') }
      );

      expect(calendar.html()).toContain(DEFAULT_MONTHS[startingMonth]);
    });

    it('should use the startingYear prop to set the year picker at the desired year or use the current one', () => {
      let startingYear: number = 2;

      expect(calendar.html()).toContain(DateUtils.currentYear);

      calendar.unmount();
      calendar = mount(
        <Calendar startingYear={startingYear} />,
        { attachTo: document.getElementById('App') }
      );

      expect(calendar.html()).toContain(DEFAULT_YEARS[startingYear]);
    });

    it('should start the week on the startingDay sent as prop or simply use the first one (assumed to be Sunday)', () => {
      let startingDay: number = 3;
      let firstDayOfSecondWeek: number = parseInt(calendar.find('tbody').find('tr').at(1).find('td').first().text());

      expect(calendar.find('th').first().html()).toContain(DEFAULT_DAYS[0]);
      expect(new Date(DateUtils.currentYear, DateUtils.currentMonth, firstDayOfSecondWeek).getDay()).toBe(0);

      calendar.setProps({ startingDay });
      firstDayOfSecondWeek = parseInt(calendar.find('tbody').find('tr').at(1).find('td').first().text());

      expect(calendar.find('th').first().html()).toContain(DEFAULT_DAYS[startingDay]);
      expect(new Date(DateUtils.currentYear, DateUtils.currentMonth, firstDayOfSecondWeek).getDay()).toBe(startingDay);

      _.each(DEFAULT_DAYS, (day: string) => {
        expect(calendar.html()).toContain(day);
      });
    });
  });
});
