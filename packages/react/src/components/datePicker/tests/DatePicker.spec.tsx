import {mount, ReactWrapper, shallow} from 'enzyme';
import moment from 'moment';
import * as _ from 'underscore';

import {CalendarSelectionRuleType, ICalendarSelectionRule} from '../../calendar/Calendar';
import {DateUtils} from '../../../utils/DateUtils';
import {DatePicker, IDatePickerProps} from '../DatePicker';
import {DateLimits} from '../DatePickerActions';

describe('Date picker', () => {
    let DATE_PICKER_BASIC_PROPS: IDatePickerProps;

    beforeAll(() => {
        DATE_PICKER_BASIC_PROPS = {
            onClick: jest.fn(),
            onBlur: jest.fn(),
            placeholder: 'Pick a date',
        };
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<DatePicker {...DATE_PICKER_BASIC_PROPS} />);
        }).not.toThrow();
    });

    describe('<DatePicker />', () => {
        let datePicker: ReactWrapper<IDatePickerProps, any>;
        let datePickerInstance: DatePicker;

        beforeEach(() => {
            datePicker = mount(<DatePicker {...DATE_PICKER_BASIC_PROPS} />);
            datePickerInstance = datePicker.instance() as DatePicker;

            jest.clearAllMocks();
        });

        afterEach(() => {
            datePicker?.unmount();
        });

        it('should get what to do on blur as a prop', () => {
            const onBlurProp = datePicker.props().onBlur;

            expect(onBlurProp).toBeDefined();
        });

        it('should display a <SetToNowButton /> component if hasSetToNowButton prop is set to true', () => {
            const propsWithButton: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});

            expect(datePicker.find('SetToNowButton').length).toBe(0);

            datePicker.setProps(propsWithButton);

            expect(datePicker.find('SetToNowButton').length).toBe(1);
        });

        it('should display an <input /> element', () => {
            expect(datePicker.find('input').length).toBe(1);
        });

        it(
            'should have the class "picking-date" on the input if the picker is the lower limit and the lower limit is ' +
                'being selected or if the picker is the upper limit and the upper limit is being selected',
            () => {
                let newProps: IDatePickerProps;

                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: false});
                datePicker.setProps(newProps);
                datePicker.update();

                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: false});
                datePicker.setProps(newProps);
                datePicker.update();

                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: true});
                datePicker.setProps(newProps);
                datePicker.update();

                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: true});
                datePicker.setProps(newProps);
                datePicker.update();

                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);
            },
        );

        it('should have the classes "date-picked" on the input if we are not selecting the picker and there is a date set in the input', () => {
            expect(datePicker.find('input').hasClass('date-picked')).toBe(false);

            datePicker.setProps({...DATE_PICKER_BASIC_PROPS, date: new Date()});
            datePicker.setState({isSelected: true});
            datePicker.update();

            expect(datePicker.find('input').hasClass('date-picked')).toBe(true);

            datePicker.setProps({...DATE_PICKER_BASIC_PROPS, date: new Date(), color: 'white'});
            datePicker.update();

            datePicker.setProps({
                ...DATE_PICKER_BASIC_PROPS,
                date: new Date(),
                isSelecting: DateLimits.lower,
                upperLimit: false,
            });
            datePicker.update();

            expect(datePicker.find('input').hasClass('date-picked')).toBe(false);
        });

        it('should call setToToday when clicking the set to now button', () => {
            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});
            datePicker.setProps(withButtonProps);

            datePicker.find('button').simulate('click');

            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalled();
        });

        it('should change the input value to the current time when calling setToToday and withTime prop is set to true', () => {
            const expectedDate: Date = new Date();
            const withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {
                withTime: true,
                hasSetToNowButton: true,
            });
            datePicker.setProps(withTimeProps);

            expect(datePickerInstance['dateInput'].value).toBe('');

            datePicker.find('button').simulate('click');

            expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(expectedDate));
        });

        it('should change the input value to the current day when calling setToToday and withTime prop is set to false', () => {
            const expectedDate: Date = new Date();
            const withoutTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {
                withTime: false,
                hasSetToNowButton: true,
            });
            datePicker.setProps(withoutTimeProps);

            expect(datePickerInstance['dateInput'].value).toBe('');

            datePicker.find('button').simulate('click');

            expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(expectedDate));
        });

        it('should call onBlur when calling setToToday', () => {
            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});
            datePicker.setProps(withButtonProps);

            datePicker.find('button').simulate('click');

            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalled();
        });

        it('should call onBlur prop on handleChangeDate only if the input value is a valid date', () => {
            const onBlurSpy = jest.fn();
            const simpleDate: string = DateUtils.getSimpleDate(new Date());
            const newOnChangeSpyProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {onBlur: onBlurSpy});
            datePicker.setProps(newOnChangeSpyProps);

            datePickerInstance['dateInput'].value = 'this is not a date!';
            datePicker.find('input').simulate('blur');

            expect(onBlurSpy).not.toHaveBeenCalled();

            datePickerInstance['dateInput'].value = simpleDate;
            datePicker.find('input').simulate('blur');

            expect(onBlurSpy).toHaveBeenCalled();
        });

        it('should call the onBlur prop with a simple date if withTime prop is set to false', () => {
            const simpleDate: string = DateUtils.getSimpleDate(new Date());

            datePickerInstance['dateInput'].value = simpleDate;
            datePicker.find('input').simulate('blur');

            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalledWith(
                DateUtils.getDateFromSimpleDateString(simpleDate),
                DATE_PICKER_BASIC_PROPS.upperLimit,
            );
        });

        it('should call the onBlur prop with a full date if withTime prop is set to true', () => {
            const fullDate: string = DateUtils.getDateWithTimeString(new Date());
            const withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {withTime: true});
            datePicker.setProps(withTimeProps);

            datePickerInstance['dateInput'].value = fullDate;
            datePicker.find('input').simulate('blur');

            expect(withTimeProps.onBlur).toHaveBeenCalledWith(
                DateUtils.getDateFromTimeString(fullDate),
                withTimeProps.upperLimit,
            );
        });

        it(
            'should change the value of the date input when passing it a new date as prop that is different than the ' +
                'current one',
            () => {
                let newDate: Date = new Date();
                let dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate});
                datePicker.setProps(dateProps);

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));

                newDate = new Date(newDate.setHours(2, 2, 2, 2));
                dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate, withTime: true});
                datePicker.setProps(dateProps);

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(newDate));
            },
        );

        it('should set an empty value in the date input when passing it a null date as prop', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: null});
            datePicker.setProps(dateProps);

            expect(datePickerInstance['dateInput'].value).toBe('');
        });

        it('set an empty value in the date input when passing it an empty string date as prop', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: 'null'});
            datePicker.setProps(dateProps);

            expect(datePickerInstance['dateInput'].value).toBe('');
        });

        it('should call onClick prop with whether or not the date picker is for the upper limit on input focus', () => {
            datePicker.find('input').simulate('focus');

            expect(DATE_PICKER_BASIC_PROPS.onClick).toHaveBeenCalledWith(DATE_PICKER_BASIC_PROPS.upperLimit);
        });

        it('should call onBlur on input change', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date()});
            datePicker.setProps(dateProps);

            datePicker.find('input').prop<() => void>('onBlur')();

            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalled();
        });

        it('should not call onBlur when focusing the date picker', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});

            datePicker.setProps(dateProps);

            datePicker.simulate('focus');

            expect(DATE_PICKER_BASIC_PROPS.onBlur).not.toHaveBeenCalled();
        });

        describe('On calendar day click', () => {
            beforeEach(() => {
                const calendarDayElement: HTMLDivElement = document.createElement('div');
                calendarDayElement.setAttribute('id', 'CalendarDay');
                calendarDayElement.setAttribute('class', 'calendar-day');
                document.body.appendChild(calendarDayElement);
            });

            it('should not call handleChangeDate when clicking a calendar day', () => {
                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {
                    isSelecting: DateLimits.lower,
                });
                const handleChangeDateSpy = jest.spyOn<any, string>(datePickerInstance, 'handleChangeDate');

                datePicker.setProps(dateProps);

                document.createElement('div').setAttribute('id', 'CalendarDay');
                document.getElementById('CalendarDay').setAttribute('class', 'calendar-day');
                document.getElementById('CalendarDay').click();

                expect(handleChangeDateSpy).not.toHaveBeenCalled();
            });

            it('should not call prop onBlur when clicking a calendar day', () => {
                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {
                    isSelecting: DateLimits.lower,
                    onBlur: jest.fn(),
                });

                datePicker.setProps(dateProps);
                document.getElementById('CalendarDay').click();

                expect(dateProps.onBlur).not.toHaveBeenCalled();
            });

            it('updates the date based on the minimal range limit if the property is set', () => {
                const today: Date = new Date();
                const expectedDate: Date = moment(today).add(5, 'days').toDate();
                const withoutTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {
                    minimalRangeLimit: {days: 5},
                    hasSetToNowButton: true,
                    upperLimit: true,
                });
                datePicker.setProps(withoutTimeProps);

                expect(datePickerInstance['dateInput'].value).toBe('');

                datePicker.find('button').simulate('click');

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(expectedDate));
            });

            it('does not allow setting the date if the date is out of range', () => {
                const CALENDAR_ADVANCED_SELECTION_RULES: ICalendarSelectionRule[] = [
                    {
                        test: (date: Date) => date <= new Date() && date >= moment().subtract(2, 'weeks').toDate(), // is the date within the last two weeks
                        isFor: CalendarSelectionRuleType.all,
                    },
                    {
                        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end of your selection cannot be before the start of your selection
                        isFor: CalendarSelectionRuleType.upper,
                    },
                    {
                        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7, // You cannot select more than 7 days at a time
                        isFor: CalendarSelectionRuleType.lower,
                    },
                ];

                const onBlurSpy = jest.fn();
                const newOnChangeSpyProps: IDatePickerProps = {
                    ...DATE_PICKER_BASIC_PROPS,
                    onBlur: onBlurSpy,
                    selectionRules: CALENDAR_ADVANCED_SELECTION_RULES,
                    isSelecting: DateLimits.lower,
                };

                datePicker.setProps(newOnChangeSpyProps);

                const setPastDate = (daysAgo: number) => new Date(new Date().setDate(new Date().getDate() - daysAgo));

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(20));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(0);

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(15));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(0);

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(14));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(0);

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(13));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(1);

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(7));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(2);

                datePickerInstance['dateInput'].value = DateUtils.getSimpleDate(setPastDate(17));
                datePicker.find('input').simulate('blur');
                expect(onBlurSpy).toHaveBeenCalledTimes(2);
            });
        });
    });
});
