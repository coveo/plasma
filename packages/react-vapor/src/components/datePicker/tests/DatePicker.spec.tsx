import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {DateUtils} from '../../../utils/DateUtils';
import {DatePicker, DEFAULT_DATE_PICKER_COLOR, IDatePickerProps} from '../DatePicker';
import {DateLimits} from '../DatePickerActions';

describe('Date picker', () => {
    const DATE_PICKER_BASIC_PROPS: IDatePickerProps = {
        onClick: jasmine.createSpy('onClick'),
        onBlur: jasmine.createSpy('onBlur'),
        placeholder: 'Pick a date',
    };

    describe('<DatePicker />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <DatePicker {...DATE_PICKER_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<DatePicker />', () => {
        let datePicker: ReactWrapper<IDatePickerProps, any>;
        let datePickerInstance: DatePicker;

        beforeEach(() => {
            datePicker = mount(
                <DatePicker {...DATE_PICKER_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
            datePickerInstance = datePicker.instance() as DatePicker;
        });

        afterEach(() => {
            datePicker.detach();
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

        it('should have a class "border-COLOR_PROP" on the input or "border-DEFAULT_COLOR" if the color prop is not set',
            () => {
                const propsWithColor: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {color: 'blood'});

                expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);

                datePicker.setProps(propsWithColor);

                expect(datePicker.find('input').hasClass(`border-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
                expect(datePicker.find('input').hasClass(`border-${propsWithColor.color}`)).toBe(true);
            });

        it('should have the class "picking-date" on the input if the picker is the lower limit and the lower limit is ' +
            'being selected or if the picker is the upper limit and the upper limit is being selected', () => {
                let newProps: IDatePickerProps;

                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: false});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: false});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.upper, upperLimit: true});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('picking-date')).toBe(true);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, upperLimit: true});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('picking-date')).toBe(false);
            });

        it('should have the classes "date-picked" and "bg-COLOR_PROP" or "bg-DEFAULT_COLOR" on the input if we are not' +
            ' selecting the picker and there is a date set in the input', () => {
                let newProps: IDatePickerProps;

                expect(datePicker.find('input').hasClass('date-picked')).toBe(false);
                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date()});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('date-picked')).toBe(true);
                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(true);

                newProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date(), color: 'white'});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
                expect(datePicker.find('input').hasClass(`bg-${newProps.color}`)).toBe(true);

                newProps =
                    _.extend({}, DATE_PICKER_BASIC_PROPS, {date: new Date(), isSelecting: DateLimits.lower, upperLimit: false});
                datePicker.setProps(newProps);
                expect(datePicker.find('input').hasClass('date-picked')).toBe(false);
                expect(datePicker.find('input').hasClass(`bg-${DEFAULT_DATE_PICKER_COLOR}`)).toBe(false);
            });

        it('should call setToToday when clicking the set to now button', () => {
            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});
            const setToNowSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'setToToday');
            datePicker.setProps(withButtonProps);

            datePicker.find('button').simulate('click');

            expect(setToNowSpy).toHaveBeenCalled();
        });

        it('should change the input value to the current time when calling setToToday and withTime prop is set to true',
            () => {
                const expectedDate: Date = new Date();
                const withTimeProps: IDatePickerProps =
                    _.extend({}, DATE_PICKER_BASIC_PROPS, {withTime: true, hasSetToNowButton: true});
                datePicker.setProps(withTimeProps);

                expect(datePickerInstance['dateInput'].value).toBe('');

                jasmine.clock().install();
                jasmine.clock().mockDate(expectedDate);
                datePicker.find('button').simulate('click');

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(expectedDate));
                jasmine.clock().uninstall();
            });

        it('should change the input value to the current day when calling setToToday and withTime prop is set to false',
            () => {
                const expectedDate: Date = new Date();
                const withoutTimeProps: IDatePickerProps =
                    _.extend({}, DATE_PICKER_BASIC_PROPS, {withTime: false, hasSetToNowButton: true});
                datePicker.setProps(withoutTimeProps);

                expect(datePickerInstance['dateInput'].value).toBe('');

                jasmine.clock().install();
                jasmine.clock().mockDate(expectedDate);
                datePicker.find('button').simulate('click');

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(expectedDate));
                jasmine.clock().uninstall();
            });

        it('should call handleChange when calling setToToday', () => {
            const withButtonProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {hasSetToNowButton: true});
            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');
            datePicker.setProps(withButtonProps);

            datePicker.find('button').simulate('click');

            expect(handleChangeSpy).toHaveBeenCalled();
        });

        it('should call onBlur prop on handleChangeDate only if the input value is a valid date', () => {
            const onBlurSpy = jasmine.createSpy('newSpy');
            const simpleDate: string = DateUtils.getSimpleDate(new Date());
            const newOnChangeSpyProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {onBlur: onBlurSpy});
            datePicker.setProps(newOnChangeSpyProps);

            datePickerInstance['dateInput'].value = 'this is not a date!';
            datePickerInstance['handleChangeDate'].call(datePickerInstance);

            expect(onBlurSpy).not.toHaveBeenCalled();

            datePickerInstance['dateInput'].value = simpleDate;
            datePickerInstance['handleChangeDate'].call(datePickerInstance);

            expect(onBlurSpy).toHaveBeenCalled();
        });

        it('should call the onBlur prop with a simple date if withTime prop is set to false', () => {
            const simpleDate: string = DateUtils.getSimpleDate(new Date());

            datePickerInstance['dateInput'].value = simpleDate;
            datePickerInstance['handleChangeDate'].call(datePickerInstance);

            expect(DATE_PICKER_BASIC_PROPS.onBlur).toHaveBeenCalledWith(DateUtils.getDateFromSimpleDateString(simpleDate),
                DATE_PICKER_BASIC_PROPS.upperLimit);
        });

        it('should call the onBlur prop with a full date if withTime prop is set to true', () => {
            const fullDate: string = DateUtils.getDateWithTimeString(new Date());
            const withTimeProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {withTime: true});
            datePicker.setProps(withTimeProps);

            datePickerInstance['dateInput'].value = fullDate;
            datePickerInstance['handleChangeDate'].call(datePickerInstance);

            expect(withTimeProps.onBlur).toHaveBeenCalledWith(DateUtils.getDateFromTimeString(fullDate),
                withTimeProps.upperLimit);
        });

        it('should change the value of the date input when passing it a new date as prop that is different than the ' +
            'current one', () => {
                let newDate: Date = new Date();
                let dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate});
                datePicker.setProps(dateProps);

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));

                dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate, withTime: true});
                datePicker.setProps(dateProps);

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getSimpleDate(newDate));

                newDate = new Date(newDate.setHours(2, 2, 2, 2));
                dateProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: newDate, withTime: true});
                datePicker.setProps(dateProps);

                expect(datePickerInstance['dateInput'].value).toBe(DateUtils.getDateWithTimeString(newDate));
            });

        it('should set an empty value in the date input when passing it a null date as prop', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {date: null});
            datePicker.setProps(dateProps);

            expect(datePickerInstance['dateInput'].value).toBe('');
        });

        it('should call onClick prop with whether or not the date picker is for the upper limit on input click', () => {
            datePicker.find('input').simulate('click');

            expect(DATE_PICKER_BASIC_PROPS.onClick).toHaveBeenCalledWith(DATE_PICKER_BASIC_PROPS.upperLimit);
        });

        it('should call handleChangeDate on input change', () => {
            const handleChangeDateSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');

            datePicker.find('input').simulate('blur');

            expect(handleChangeDateSpy).toHaveBeenCalled();
        });

        it('should call handleChangeDate when clicking elsewhere than the date picker or a calendar day', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});
            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');

            datePicker.setProps(dateProps);

            document.getElementById('App').click();
            expect(handleChangeSpy).toHaveBeenCalledTimes(1);

            datePicker.unmount();
            document.getElementById('App').click();
            expect(handleChangeSpy).toHaveBeenCalledTimes(1);
        });

        it('should not call handleChange when clicking the date picker', () => {
            const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});
            const handleChangeSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');

            datePicker.setProps(dateProps);

            datePicker.simulate('click');
            expect(handleChangeSpy).not.toHaveBeenCalled();
        });

        describe('On calendar day click', () => {
            beforeEach(() => {
                const calendarDayElement: HTMLDivElement = document.createElement('div');
                calendarDayElement.setAttribute('id', 'CalendarDay');
                calendarDayElement.setAttribute('class', 'calendar-day');
                document.body.appendChild(calendarDayElement);
            });

            it('should not call handleChangeDate when clicking a calendar day', () => {
                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower});
                const handleChangeDateSpy: jasmine.Spy = spyOn<any>(datePickerInstance, 'handleChangeDate');

                datePicker.setProps(dateProps);

                document.createElement('div').setAttribute('id', 'CalendarDay');
                document.getElementById('CalendarDay').setAttribute('class', 'calendar-day');
                document.getElementById('CalendarDay').click();

                expect(handleChangeDateSpy).not.toHaveBeenCalled();
            });

            it('should not call prop onBlur when clicking a calendar day', () => {
                const dateProps: IDatePickerProps = _.extend({}, DATE_PICKER_BASIC_PROPS, {isSelecting: DateLimits.lower, onBlur: jasmine.createSpy('onBlur')});

                datePicker.setProps(dateProps);
                document.getElementById('CalendarDay').click();

                expect(dateProps.onBlur).not.toHaveBeenCalled();
            });
        });
    });
});
