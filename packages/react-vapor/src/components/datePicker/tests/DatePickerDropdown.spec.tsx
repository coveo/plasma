import {mount, ReactWrapper, shallow} from 'enzyme';
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {DateUtils} from '../../../utils/DateUtils';
import {Button} from '../../button/Button';
import {ModalFooter} from '../../modal/ModalFooter';
import {DatePickerBox} from '../DatePickerBox';
import {
    DatePickerDropdown,
    DEFAULT_APPLY_DATE_LABEL,
    DEFAULT_CANCEL_DATE_LABEL,
    DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
    DEFAULT_TO_LABEL,
    IDatePickerDropdownProps,
} from '../DatePickerDropdown';
import {IDatePickerState} from '../DatePickerReducers';

describe('Date picker', () => {
    const DATE_PICKER_DROPDOWN_BASIC_PROPS: IDatePickerDropdownProps = {
        datesSelectionBoxes: [
            {
                title: 'The first box',
            },
        ],
    };

    describe('<DatePickerDropdown />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<DatePickerDropdown />', () => {
        let datePickerDropdown: ReactWrapper<IDatePickerDropdownProps>;
        let datePickerDropdownInstance: DatePickerDropdown;
        let datePicker: IDatePickerState;

        const now: Date = new Date();
        const then: Date = new Date(new Date().setDate(new Date().getDate() + 1));

        beforeEach(() => {
            datePickerDropdown = mount(
                <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
            datePickerDropdownInstance = datePickerDropdown.instance() as DatePickerDropdown;
            datePicker = {
                id: 'id',
                calendarId: 'calendarId',
                color: 'color',
                lowerLimit: now,
                upperLimit: then,
                isRange: false,
                isClearable: false,
                selected: '',
                appliedLowerLimit: now,
                appliedUpperLimit: then,
                inputLowerLimit: now,
                inputUpperLimit: then,
                simple: false,
            };
        });

        afterEach(() => {
            datePickerDropdown.detach();
        });

        it('should get the dates selection boxes as a prop', () => {
            const datesSelectionBoxesProps = datePickerDropdown.props().datesSelectionBoxes;

            expect(datesSelectionBoxesProps).toBeDefined();
            expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_DROPDOWN_BASIC_PROPS.datesSelectionBoxes);
        });

        it('should not display a <DatePickerBox /> if it is not opened and prop renderDatePickerWhenClosed is false', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {renderDatePickerWhenClosed: false});
            datePickerDropdown.setProps(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(0);
        });

        it('should display a <DatePickerBox /> if it is not opened but prop renderDatePickerWhenClosed is true', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {open: false, renderDatePickerWhenClosed: true});
            datePickerDropdown.setProps(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
        });

        it('should display a <DatePickerBox /> if it is opened regardless of whether prop renderDatePickerWhenClosed is true or false', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true, renderDatePickerWhenClosed: false});
            datePickerDropdown.setProps(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
        });

        it('should only display an input if it has the readonly prop', () => {
            datePickerDropdown.setProps({
                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,
                readonly: true,
            });

            expect(datePickerDropdown.find('.date-picker-dropdown').length).toBe(0);
            expect(datePickerDropdown.find('Input').length).toBe(1);
        });

        it('should have the class "open" if the isOpened prop is set to true', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});

            expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(false);

            datePickerDropdown.setProps(propsIsOpened);

            expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(true);
        });

        it('should display the label passed as a prop or use the default one', () => {
            const expectedLabel: string = 'This is the date picker dropdown label';
            const propsWithLabel: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {label: expectedLabel});

            expect(datePickerDropdown.html()).toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);

            datePickerDropdown.setProps(propsWithLabel);

            expect(datePickerDropdown.html()).not.toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);
            expect(datePickerDropdown.html()).toContain(expectedLabel);
        });

        it('should display the dates from the date picker if the datePicker prop is set', () => {
            const formattedNow: string = DateUtils.getSimpleDate(now);
            const formattedThen: string = DateUtils.getSimpleDate(then);
            const toLabel: string = 'à';
            let propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {datePicker});

            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedNow);
            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);
            expect(datePickerDropdown.find('.to-label').length).toBe(0);

            datePickerDropdown.setProps(propsWithDatePicker);

            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);
            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);
            expect(datePickerDropdown.find('.to-label').length).toBe(0);

            const newDatePicker = {
                id: 'id',
                calendarId: 'calendarId',
                color: 'color',
                lowerLimit: now,
                upperLimit: then,
                isRange: true,
                isClearable: false,
                selected: '',
                appliedLowerLimit: now,
                appliedUpperLimit: then,
                inputLowerLimit: now,
                inputUpperLimit: then,
                simple: false,
            };
            propsWithDatePicker = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {datePicker: newDatePicker});
            datePickerDropdown.setProps(propsWithDatePicker);

            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);
            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedThen);
            expect(datePickerDropdown.find('.to-label').text()).toContain(DEFAULT_TO_LABEL);

            propsWithDatePicker = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {datePicker: newDatePicker, toLabel});
            datePickerDropdown.setProps(propsWithDatePicker);

            expect(datePickerDropdown.find('.to-label').text()).not.toContain(DEFAULT_TO_LABEL);
            expect(datePickerDropdown.find('.to-label').text()).toContain(toLabel);
        });

        it('should display the dates from the date picker if the datePicker prop is set in readonly', () => {
            const formattedNow: string = DateUtils.getSimpleDate(now);
            const formattedThen: string = DateUtils.getSimpleDate(then);
            const toLabel: string = 'à';

            let propsWithDatePicker: IDatePickerDropdownProps = {
                datePicker,
                toLabel,
                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,
                readonly: true,
            };

            datePickerDropdown.setProps(propsWithDatePicker).mount();

            expect(datePickerDropdown.html()).toContain(formattedNow);
            expect(datePickerDropdown.html()).not.toContain(formattedThen);
            expect(datePickerDropdown.html()).not.toContain(toLabel);

            const newDatePicker = {
                id: 'id',
                calendarId: 'calendarId',
                color: 'color',
                lowerLimit: now,
                upperLimit: then,
                isRange: true,
                isClearable: false,
                selected: '',
                appliedLowerLimit: now,
                appliedUpperLimit: then,
                inputLowerLimit: now,
                inputUpperLimit: then,
                simple: false,
            };
            propsWithDatePicker = {
                toLabel,
                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,
                readonly: true,
                datePicker: newDatePicker,
            };
            datePickerDropdown.setProps(propsWithDatePicker);

            expect(datePickerDropdown.html()).toContain(formattedNow);
            expect(datePickerDropdown.html()).toContain(formattedThen);
            expect(datePickerDropdown.html()).toContain(toLabel);
        });

        it('should display the date from the date picker with time on the label if the first dateSelectionBox is with time',
            () => {
                const rightNow: Date = new Date();
                const newProps: IDatePickerDropdownProps = {
                    datesSelectionBoxes: [
                        {
                            title: 'The first box',
                            withTime: true,
                        },
                    ],
                    datePicker: {
                        id: 'id',
                        calendarId: 'calendarId',
                        color: 'color',
                        lowerLimit: rightNow,
                        upperLimit: rightNow,
                        isRange: true,
                        isClearable: false,
                        selected: '',
                        appliedLowerLimit: rightNow,
                        appliedUpperLimit: rightNow,
                        inputLowerLimit: rightNow,
                        inputUpperLimit: then,
                        simple: false,
                    },
                };

                datePickerDropdown.setProps(newProps);

                expect(datePickerDropdown.find('.dropdown-selected-value').html()).toContain(DateUtils.getDateWithTimeString(rightNow));
            });

        it('should display the label props if date picker is clearable and nothing is selected', () => {
            const newDatePicker: IDatePickerState = {
                id: 'id',
                calendarId: 'calendarId',
                color: 'color',
                lowerLimit: null,
                upperLimit: null,
                isRange: true,
                isClearable: true,
                selected: '',
                appliedLowerLimit: null,
                appliedUpperLimit: null,
                inputLowerLimit: null,
                inputUpperLimit: null,
                simple: false,
            };
            const newProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                datePicker: newDatePicker,
                label: 'EMPTY_LABEL',
                isClearable: true,
            });
            datePickerDropdown.setProps(newProps);
            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain('EMPTY_LABEL');
        });

        it('should not display the to-label and the upperlimit if it is equal to the lower limit', () => {
            const start = moment().startOf('day').toDate();
            const end = moment().endOf('day').toDate();
            const formattedNow: string = DateUtils.getSimpleDate(start);
            datePicker = {
                id: 'id',
                calendarId: 'calendarId',
                color: 'color',
                lowerLimit: start,
                upperLimit: end,
                isRange: true,
                isClearable: false,
                selected: '',
                appliedLowerLimit: start,
                appliedUpperLimit: end,
                inputLowerLimit: start,
                inputUpperLimit: end,
                simple: false,
            };
            const propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {datePicker});
            datePickerDropdown.setProps(propsWithDatePicker);

            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toBe(formattedNow);
            expect(datePickerDropdown.find('.to-label').length).toBe(0);
        });

        it('should call handleClick when clicking the dropdown toggle', () => {
            const handleClickSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleClick');

            datePickerDropdown.find('.dropdown-toggle').simulate('click');

            expect(handleClickSpy).toHaveBeenCalled();
        });

        it('should call onClick prop if set when calling handleClick', () => {
            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');
            const onClickProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onClick: onClickSpy});

            expect(() => {
                datePickerDropdownInstance['handleClick'].call(datePickerDropdownInstance);
            }).not.toThrow();

            datePickerDropdown.setProps(onClickProps);
            datePickerDropdownInstance['handleClick'].call(datePickerDropdownInstance);

            expect(onClickSpy).toHaveBeenCalled();
        });

        it('should not set a click listener to handleDocumentClick if it has the readonly prop', () => {
            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');

            datePickerDropdown = mount(
                <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} readonly />,
                {attachTo: document.getElementById('App')},
            );

            expect(addEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should set a click listener to handleDocumentClick if it does not have the readonly prop', () => {
            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');

            datePickerDropdown = mount(
                <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );

            expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
        });

        it('should trigger onDocumentClick dispatch on mount and remove it on unmount if prop onDocumentClick is set and isOpened is true', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onDocumentClick: onDocumentClickSpy, isOpened: true});

            datePickerDropdown.mount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            datePickerDropdown.unmount();
            datePickerDropdown.setProps(newDropdownProps);
            datePickerDropdown.mount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);

            datePickerDropdown.unmount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);
        });

        it('should not trigger onDocumentClick dispatch on mount if prop onDocumentClick is set and isOpened is false', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onDocumentClick: onDocumentClickSpy, isOpened: false});

            datePickerDropdown.mount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            datePickerDropdown.unmount();
            datePickerDropdown.setProps(newDropdownProps);
            datePickerDropdown.mount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            datePickerDropdown.unmount();
            document.getElementById('App').click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();
        });

        it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {
            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onDocumentClick: onDocumentClickSpy, isOpened: true});

            datePickerDropdown = mount(
                <DatePickerDropdown {...newDropdownProps} />,
                {attachTo: document.getElementById('App')},
            );

            (document.getElementsByClassName('dropdown-wrapper')[0] as HTMLDivElement).click();
            expect(onDocumentClickSpy).not.toHaveBeenCalled();

            document.getElementById('App').click();
            expect(onDocumentClickSpy).toHaveBeenCalled();
        });

        it('should call onRender prop if set when mounting', () => {
            const onRenderSpy: jasmine.Spy = jasmine.createSpy('onRender');
            const onRenderProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onRender: onRenderSpy});

            expect(() => datePickerDropdownInstance.componentWillMount()).not.toThrow();

            datePickerDropdown.unmount();
            datePickerDropdown.setProps(onRenderProps);
            datePickerDropdown.mount();
            expect(onRenderSpy).toHaveBeenCalled();
        });

        it('should call onDestroy prop if set when will unmount', () => {
            const onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
            const onDestroyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onDestroy: onDestroySpy});

            expect(() => datePickerDropdownInstance.componentWillUnmount()).not.toThrow();

            datePickerDropdown.setProps(onDestroyProps);
            datePickerDropdown.unmount();
            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should display a footer with two button if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});
            datePickerDropdown.setProps(propsIsOpened);

            expect(datePickerDropdown.find(ModalFooter).length).toBe(1);
            expect(datePickerDropdown.find(ModalFooter).find(Button).length).toBe(2);
        });

        it('should display the apply label passed as a prop or use the default one if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});
            datePickerDropdown.setProps(propsIsOpened);

            const applyLabel: string = 'appliquer';
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {applyLabel});

            expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().name).toContain(DEFAULT_APPLY_DATE_LABEL);

            datePickerDropdown.setProps(newProps);

            expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().name).not.toContain(DEFAULT_APPLY_DATE_LABEL);
            expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().name).toContain(applyLabel);
        });

        it('should display the cancel label passed as a prop or use the default one if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});
            datePickerDropdown.setProps(propsIsOpened);

            const cancelLabel: string = 'annuler';
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {cancelLabel});

            expect(datePickerDropdown.find(ModalFooter).find(Button).last().props().name).toContain(DEFAULT_CANCEL_DATE_LABEL);

            datePickerDropdown.setProps(newProps);

            expect(datePickerDropdown.find(ModalFooter).find(Button).last().props().name).not.toContain(DEFAULT_CANCEL_DATE_LABEL);
            expect(datePickerDropdown.find(ModalFooter).find(Button).last().props().name).toContain(cancelLabel);
        });

        it('should call handleApply when clicking on the apply button', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});
            datePickerDropdown.setProps(propsIsOpened);

            const handleApplySpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleApply');

            datePickerDropdown.find(ModalFooter).find('button').first().simulate('click');

            expect(handleApplySpy).toHaveBeenCalled();
        });

        it('should call handleCancel when clicking on the cancel button', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {isOpened: true});
            datePickerDropdown.setProps(propsIsOpened);

            const handleCancelSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleCancel');

            datePickerDropdown.find(ModalFooter).find('button').last().simulate('click');

            expect(handleCancelSpy).toHaveBeenCalled();
        });

        it('should call onApply prop if set when calling handleApply', () => {
            const onBeforeApplySpy: jasmine.Spy = jasmine.createSpy('onBeforeApply');
            const onBeforeApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS,
                {onBeforeApply: onBeforeApplySpy});

            expect(() => {
                datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);
            }).not.toThrow();

            datePickerDropdown.setProps(onBeforeApplyProps);
            datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);

            expect(onBeforeApplySpy).toHaveBeenCalled();
        });

        it('should call onApply prop if set when calling handleApply', () => {
            const onApplySpy: jasmine.Spy = jasmine.createSpy('onApply');
            const onApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onApply: onApplySpy});

            expect(() => {
                datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);
            }).not.toThrow();

            datePickerDropdown.setProps(onApplyProps);
            datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);

            expect(onApplySpy).toHaveBeenCalled();
        });

        it('should call onCancel prop if set when calling handleCancel', () => {
            const onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');
            const onCancelProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onCancel: onCancelSpy});

            expect(() => {
                datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);
            }).not.toThrow();

            datePickerDropdown.setProps(onCancelProps);
            datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);

            expect(onCancelSpy).toHaveBeenCalled();
        });

        it('should call onCancel prop with current month and current year when there is no applied lower limit ' +
            'when calling handleCancel', () => {
                const onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');
                const newProps: Partial<IDatePickerDropdownProps> = {
                    initiallyUnselected: true,
                    id: 'some-date-picker',
                    onCancel: onCancelSpy,
                    years: [DateUtils.currentYear.toString()],
                    isOpened: true,
                };
                datePickerDropdown.setProps(_.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {...newProps}));

                datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);

                expect(onCancelSpy).toHaveBeenCalledWith(DateUtils.currentMonth, 0, true);
            });

        it('should call handleClear when calling the onClear prop of the date picker box', () => {
            const handleClearSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleClear');

            datePickerDropdown.find(DatePickerBox).props().onClear();

            expect(handleClearSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onClear prop if set when calling handleClear', () => {
            const onClearSpy: jasmine.Spy = jasmine.createSpy('onClear');
            const onClearProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onClear: onClearSpy});

            expect(() => {
                datePickerDropdownInstance['handleClear'].call(datePickerDropdownInstance);
            }).not.toThrow();

            datePickerDropdown.setProps(onClearProps);
            datePickerDropdownInstance['handleClear'].call(datePickerDropdownInstance);

            expect(onClearSpy).toHaveBeenCalled();
        });

        it('should have class "on-right" on menu if onRight prop is set to true', () => {
            const expectedClass: string = 'on-right';
            const onRightProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {onRight: true});

            expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(false);

            datePickerDropdown.setProps(onRightProps);

            expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(true);
        });

        describe('with a range limit defined in the <DatePicker/>', () => {
            let datePickerDropdownWithRangeLimit: IDatePickerDropdownProps;

            const changeDatePickerState = (newState?: Partial<IDatePickerState>) => {
                datePickerDropdownWithRangeLimit = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS,
                    {
                        datePicker: _.extend({}, datePicker, {
                            isRange: true,
                            rangeLimit: {
                                weeks: 1,
                                days: 1,
                                hours: 1,
                                message: 'test',
                            },
                        }, newState),
                    });

                datePickerDropdown.setProps(datePickerDropdownWithRangeLimit);
                datePickerDropdown = datePickerDropdown.update();
            };

            it('should disabled the primary button if the the inputLowerLimit has exceeded the range limit with the inputUpperLimit', () => {
                const date: Date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                changeDatePickerState({
                    inputLowerLimit: new Date(),
                    inputUpperLimit: date,
                });

                expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().enabled).toBe(false);
                expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().tooltip).toBe('test');
            });

            it('should enabled the primary button if the the inputLowerLimit does not exceeded the range limit with the inputUpperLimit', () => {
                const date: Date = new Date();
                date.setHours(date.getHours() + 1);
                changeDatePickerState({
                    inputLowerLimit: new Date(),
                    inputUpperLimit: date,
                });

                expect(datePickerDropdown.find(ModalFooter).find(Button).first().props().enabled).toBe(true);
            });
        });
    });
});
