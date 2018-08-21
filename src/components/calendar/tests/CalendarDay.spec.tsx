import {mount, ReactWrapper, shallow} from 'enzyme';
import * as moment from 'moment';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {DateUtils} from '../../../utils/DateUtils';
import {CalendarDay, ICalendarDayProps, IDay} from '../CalendarDay';

describe('Calendar day', () => {
    const newMonth = DateUtils.currentMonth < 11 ? DateUtils.currentMonth + 1 : 0;
    const DAY: IDay = {
        number: 2,
        isCurrentMonth: true,
        isToday: false,
        date: moment(new Date(2017, newMonth, 2)),
        isSelectable: true,
    };

    const BASIC_CALENDAR_DAY_PROPS: ICalendarDayProps = {
        day: DAY,
        onClick: jasmine.createSpy('onClick'),
        onSelectUnselectable: jasmine.createSpy('onSelectUnselectable'),
    };

    describe('<CalendarDay />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <CalendarDay {...BASIC_CALENDAR_DAY_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<CalendarDay />', () => {
        let calendarDay: ReactWrapper<ICalendarDayProps, any>;
        let calendarDayInstance: CalendarDay;

        beforeEach(() => {
            document.getElementById('App').innerHTML = '<table><tbody><tr id="AppTableRow"></tr></tbody></table>';

            calendarDay = mount(
                <CalendarDay {...BASIC_CALENDAR_DAY_PROPS} />,
                {attachTo: document.getElementById('AppTableRow')},
            );
            calendarDayInstance = calendarDay.instance() as CalendarDay;
        });

        afterEach(() => {
            calendarDay.detach();
        });

        it('should get the day as a prop', () => {
            const dayProp = calendarDay.props().day;

            expect(dayProp).toBeDefined();
            expect(dayProp).toEqual(DAY);
        });

        it('should get what to do onClick as a prop', () => {
            const onClickProp = calendarDay.props().onClick;

            expect(onClickProp).toBeDefined;
        });

        it('should display the number of the day', () => {
            expect(calendarDay.html()).toContain(DAY.number.toString());
        });

        it('should have the class "other-month-date" is the isCurrentMonth of the day prop is set to false', () => {
            const dayFromOtherMonth: IDay = _.extend({}, DAY, {isCurrentMonth: false});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: dayFromOtherMonth});

            expect(calendarDay.find('.other-month-date').length).toBe(0);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.other-month-date').length).toBe(1);
        });

        it('should have the class "todays-date" is the isToday of the day prop is set to true', () => {
            const today: IDay = _.extend({}, DAY, {isToday: true});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: today});

            expect(calendarDay.find('.todays-date').length).toBe(0);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.todays-date').length).toBe(1);
        });

        it('should have the classes "selected-date" and "bg-${color}" when the day is selected', () => {
            const selectedDate: IDay = _.extend({}, DAY, {isSelected: true, color: 'pink'});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: selectedDate});

            expect(calendarDay.find('.selected-date').length).toBe(0);
            expect(calendarDay.find('span').props().className).not.toContain('bg-');

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.selected-date').length).toBe(1, '.selected-date');
            expect(calendarDay.find('span').props().className).toContain('bg-');
            expect(calendarDay.find('.bg-pink').length).toBe(1, '.bg-pink');
        });

        it('should have the class "lower-limit" if the day is selected and isLowerLimit', () => {
            const lowerLimitDay: IDay = _.extend({}, DAY, {isLowerLimit: true, isSelected: true});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: lowerLimitDay});

            expect(calendarDay.find('.lower-limit').length).toBe(0);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.lower-limit').length).toBe(1);
        });

        it('should have the class "upper-limit" if the day is selected isUpperLimit', () => {
            const upperLimitDay: IDay = _.extend({}, DAY, {isUpperLimit: true, isSelected: true});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: upperLimitDay});

            expect(calendarDay.find('.upper-limit').length).toBe(0);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.upper-limit').length).toBe(1);
        });

        it('should have the class "un-selectable" if the day is not selectable', () => {
            const unSelectableDay: IDay = _.extend({}, DAY, {isSelectable: false});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: unSelectableDay});

            expect(calendarDay.find('.un-selectable').length).toBe(0);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('.un-selectable').length).toBe(1);
        });

        it('should add another span if the day is selected and both isLowerLimit and upperLimit', () => {
            const limitDay: IDay = _.extend({}, DAY, {isLowerLimit: true, isUpperLimit: true, isSelected: true});
            const newProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: limitDay});

            expect(calendarDay.find('span').length).toBe(1);

            calendarDay.setProps(newProps);

            expect(calendarDay.find('span').length).toBe(2);
        });

        it('should call handleClick when clicking the day', () => {
            const handleClickSpy: jasmine.Spy = spyOn<any>(calendarDayInstance, 'handleClick');

            calendarDay.find('td').simulate('click');

            expect(handleClickSpy).toHaveBeenCalled();
        });

        it('should call onClick when clicking a selectable day', () => {
            const unSelectableDay: IDay = _.extend({}, DAY, {isSelectable: false});
            const unSelectableDayProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: unSelectableDay});

            calendarDay.find('td').simulate('click');

            expect(BASIC_CALENDAR_DAY_PROPS.onClick).toHaveBeenCalledTimes(1);

            calendarDay.setProps(unSelectableDayProps);

            calendarDay.find('td').simulate('click');

            expect(BASIC_CALENDAR_DAY_PROPS.onClick).toHaveBeenCalledTimes(1);
        });

        it('should call onSelectUnselectable when the day has been selected, but is unselectable at the same time', () => {
            const unSelectableDay: IDay = _.extend({}, DAY, {isSelectable: false, isUpperLimit: true, isSelected: true});
            const unSelectableDayProps: ICalendarDayProps = _.extend({}, BASIC_CALENDAR_DAY_PROPS, {day: unSelectableDay, onSelectUnselectable: jasmine.createSpy('onSelectUnselectable')});

            calendarDay.setProps(unSelectableDayProps);

            expect(unSelectableDayProps.onSelectUnselectable).toHaveBeenCalledTimes(1);
        });
    });
});
