import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {DATES_SEPARATOR, DateUtils} from '../../../utils/DateUtils';
import {DatePicker} from '../DatePicker';
import {
    DatesSelection,
    IDatesSelectionProps,
    LOWER_LIMIT_PLACEHOLDER,
    UPPER_LIMIT_PLACEHOLDER,
} from '../DatesSelection';

describe('Date picker', () => {

    describe('<DatesSelection />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <DatesSelection />,
                );
            }).not.toThrow();
        });
    });

    describe('<DatesSelection />', () => {
        let datesSelection: ReactWrapper<IDatesSelectionProps, any>;
        let datesSelectionInstance: DatesSelection;

        beforeEach(() => {
            datesSelection = mount(
                <DatesSelection />,
                {attachTo: document.getElementById('App')},
            );
            datesSelectionInstance = datesSelection.instance() as DatesSelection;
        });

        afterEach(() => {
            datesSelection.detach();
        });

        it('should display one <DatePicker /> by default and two if isRange prop is set to true', () => {
            expect(datesSelection.find('DatePicker').length).toBe(1);

            datesSelection.setProps({isRange: true});

            expect(datesSelection.find('DatePicker').length).toBe(2);
        });

        it('should display a separator between the two date pickers if isRange prop is set to true', () => {
            expect(datesSelection.find('.date-separator').length).toBe(0);

            datesSelection.setProps({isRange: true});

            expect(datesSelection.find('.date-separator').length).toBe(1);
        });

        it('should not add the class "mod-vertical" on the separator if the pickers are small', () => {
            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: false});
            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(false);
        });

        it('should add the class "mod-vertical" on the separator if the pickers are large', () => {
            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});
            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(true);

            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});
            expect(datesSelection.find('.date-separator').hasClass('mod-vertical')).toBe(true);
        });

        it('should have the classes "mod-inline" and "flex" if the pickers are small', () => {
            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: false});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(1);
        });

        it('should not have the classes "mod-inline" and "flex" if the pickers are large', () => {
            datesSelection.setProps({isRange: false, withTime: false, hasSetToNowButton: false});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);

            datesSelection.setProps({isRange: true, withTime: false, hasSetToNowButton: true});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);

            datesSelection.setProps({isRange: false, withTime: true, hasSetToNowButton: false});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);

            datesSelection.setProps({isRange: false, withTime: true, hasSetToNowButton: true});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);

            datesSelection.setProps({isRange: false, withTime: false, hasSetToNowButton: true});
            expect(datesSelection.find('.mod-inline.flex').length).toBe(0);
        });

        it('should call onDateChange with the date and whether or not the picker is the upper limit when calling the ' +
            'onChange prop on the picker', () => {
                const expectedDate: Date = new Date();
                const expectedIsUpperLimit: boolean = true;
                const onDateChangeSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateChange');

                datesSelection.find(DatePicker).first().props().onBlur(expectedDate, expectedIsUpperLimit);

                expect(onDateChangeSpy).toHaveBeenCalledWith(expectedDate, expectedIsUpperLimit);
            });

        it('should call onDateClick with and whether or not the picker is the upper limit when calling the onClick prop ' +
            'on the picker', () => {
                const expectedIsUpperLimit: boolean = true;
                const onDateClickSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateClick');

                datesSelection.find(DatePicker).first().props().onClick(expectedIsUpperLimit);

                expect(onDateClickSpy).toHaveBeenCalledWith(expectedIsUpperLimit);
            });

        it('should call onBlur prop if defined when calling onDateChange', () => {
            const onBlurSpy: jasmine.Spy = jasmine.createSpy('onBlur');

            expect(() => {
                datesSelectionInstance['onDateChange'].call(datesSelectionInstance, new Date(), false);
            }).not.toThrow();

            datesSelection.setProps({onBlur: onBlurSpy});
            datesSelectionInstance['onDateChange'].call(datesSelectionInstance, new Date(), false);

            expect(onBlurSpy).toHaveBeenCalled();
        });

        it('should not throw on date click if the onClick prop is not defined', () => {
            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');

            expect(() => {
                datesSelectionInstance['onDateClick'].call(datesSelectionInstance, false);
            }).not.toThrow();

            datesSelection.setProps({onClick: onClickSpy});
            datesSelectionInstance['onDateClick'].call(datesSelectionInstance, false);

            expect(onClickSpy).toHaveBeenCalled();
        });

        it('should call onRender prop if set when mounting', () => {
            const onRenderSpy: jasmine.Spy = jasmine.createSpy('onRender');

            expect(() => datesSelectionInstance.componentWillMount()).not.toThrow();

            datesSelection.unmount();
            datesSelection.setProps({onRender: onRenderSpy});
            datesSelection.mount();
            expect(onRenderSpy).toHaveBeenCalled();
        });

        it('should call onDestroy prop if set when will unmount', () => {
            const onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');

            expect(() => datesSelectionInstance.componentWillUnmount()).not.toThrow();

            datesSelection.setProps({onDestroy: onDestroySpy});
            datesSelection.unmount();
            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should display the lower limit placeholder sent as a prop or use the default one', () => {
            const expectedPlaceholder: string = 'Choisir une date';

            datesSelection.setProps({isRange: true});

            expect(datesSelection.html()).toContain(LOWER_LIMIT_PLACEHOLDER);

            datesSelection.setProps({isRange: true, lowerLimitPlaceholder: expectedPlaceholder});

            expect(datesSelection.html()).not.toContain(LOWER_LIMIT_PLACEHOLDER);
            expect(datesSelection.html()).toContain(expectedPlaceholder);
        });

        it('should display the upper limit placeholder sent as a prop or use the default one', () => {
            const expectedPlaceholder: string = 'Choisir une date';

            datesSelection.setProps({isRange: true});

            expect(datesSelection.html()).toContain(UPPER_LIMIT_PLACEHOLDER);

            datesSelection.setProps({isRange: true, upperLimitPlaceholder: expectedPlaceholder});

            expect(datesSelection.html()).not.toContain(UPPER_LIMIT_PLACEHOLDER);
            expect(datesSelection.html()).toContain(expectedPlaceholder);
        });

        it('should call onDateChange for each picker if the quick option has changed', () => {
            const onDateChangeSpy: jasmine.Spy = spyOn<any>(datesSelectionInstance, 'onDateChange');
            const now: Date = new Date();

            datesSelection.setProps({quickOption: now.toString()});

            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);

            datesSelection.setProps({quickOption: now.toString()});

            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);

            expect(onDateChangeSpy).toHaveBeenCalledTimes(1);

            datesSelection.setProps({quickOption: new Date(now.setHours(4, 4, 4, 4)).toString()});

            expect(onDateChangeSpy).toHaveBeenCalledTimes(2);

            datesSelection.setProps({quickOption: new Date().toString() + DATES_SEPARATOR + new Date().toString()});

            expect(onDateChangeSpy).toHaveBeenCalledTimes(4);
        });

        it('should call onBlur prop on blur of the date picker if the date is in the input is valid', () => {
            const onBlurSpy: jasmine.Spy = jasmine.createSpy('onBlur');

            expect(() => {
                datesSelection.find(DatePicker).props().onBlur(new Date(), false);
            }).not.toThrow();

            datesSelection.setProps({onBlur: onBlurSpy}).update();
            (datesSelection.find('input').instance() as any).value = DateUtils.getDateWithTimeString(new Date());
            datesSelection.find(DatePicker).props().onBlur(new Date(), false);

            expect(onBlurSpy).toHaveBeenCalledTimes(1);
        });
    });
});
