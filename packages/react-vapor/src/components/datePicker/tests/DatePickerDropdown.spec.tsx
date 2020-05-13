import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {DateUtils} from '../../../utils/DateUtils';
import {Button} from '../../button/Button';
import {Drop} from '../../drop/Drop';
import {DatePickerBox} from '../DatePickerBox';
import {
    DatePickerDropdown,
    DEFAULT_APPLY_DATE_LABEL,
    DEFAULT_CANCEL_DATE_LABEL,
    DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
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
        withDrop: true,
    };

    describe('<DatePickerDropdown />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallow(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />);
                wrapper.unmount();
            }).not.toThrow();
        });
    });

    describe('<DatePickerDropdown />', () => {
        let datePickerDropdown: ShallowWrapper<IDatePickerDropdownProps>;
        let datePickerDropdownInstance: DatePickerDropdown;
        let datePicker: IDatePickerState;

        const now: Date = new Date();
        const then: Date = new Date(new Date().setDate(new Date().getDate() + 1));

        beforeEach(() => {
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

        const shallowComponent = (props?: Partial<IDatePickerDropdownProps>) => {
            datePickerDropdown = shallowWithState(
                <DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} {...props} />,
                {}
            );
            datePickerDropdownInstance = datePickerDropdown.instance() as DatePickerDropdown;
        };

        it('should get the dates selection boxes as a prop', () => {
            shallowComponent();
            const datesSelectionBoxesProps = datePickerDropdownInstance.props.datesSelectionBoxes;

            expect(datesSelectionBoxesProps).toBeDefined();
            expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_DROPDOWN_BASIC_PROPS.datesSelectionBoxes);
        });

        it('should not display a <DatePickerBox /> if it is not opened and prop renderDatePickerWhenClosed is false', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                renderDatePickerWhenClosed: false,
            });
            shallowComponent(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(0);
        });

        it('should display a <DatePickerBox /> if it is not opened but prop renderDatePickerWhenClosed is true', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                open: false,
                renderDatePickerWhenClosed: true,
            });
            shallowComponent(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
        });

        it('should display a <DatePickerBox /> if it is opened regardless of whether prop renderDatePickerWhenClosed is true or false', () => {
            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
                renderDatePickerWhenClosed: false,
            });
            shallowComponent(props);

            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);
        });

        it('should disable the dropdown button when readonly props is truthy', () => {
            shallowComponent({
                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,
                readonly: true,
            });
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );
            const button = dropContentWrapper.find('button.dropdown-toggle');

            expect(datePickerDropdownInstance.props.readonly).toBeTruthy();
            expect(button.props().disabled).toBeTruthy();
        });

        it('should have the class "open" if the isOpened prop is set to true', () => {
            shallowComponent({
                isOpened: true,
            });
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.find('.dropdown-wrapper').hasClass('open')).toBe(true);
        });

        it('should not have the class "open" if the isOpened prop is set to false', () => {
            shallowComponent({
                isOpened: false,
            });
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.find('.dropdown-wrapper').hasClass('open')).toBe(false);
        });

        it('should display the label passed as a prop or use the default one', () => {
            const expectedLabel: string = 'This is the date picker dropdown label';
            shallowComponent({label: expectedLabel});
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.contains(expectedLabel)).toBe(true);
        });

        it('should display the default label', () => {
            shallowComponent({});
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.contains(DEFAULT_DATE_PICKER_DROPDOWN_LABEL)).toBe(true);
        });

        it('should display the dates from the date picker if the datePicker prop is set', () => {
            const formattedNow: string = DateUtils.getSimpleDate(now);
            const formattedThen: string = DateUtils.getSimpleDate(then);
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

            const propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                datePicker: newDatePicker,
            });

            shallowComponent(propsWithDatePicker);
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.find('.dropdown-selected-value').text()).toContain(formattedNow);
            expect(dropContentWrapper.find('.dropdown-selected-value').text()).toContain(formattedThen);
        });

        it('should display the dates from the date picker if the datePicker prop is set in readonly', () => {
            const formattedNow: string = DateUtils.getSimpleDate(now);
            const formattedThen: string = DateUtils.getSimpleDate(then);
            const toLabel: string = 'à';
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

            const propsWithDatePicker: IDatePickerDropdownProps = {
                datePicker: newDatePicker,
                toLabel,
                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,
                readonly: true,
            };

            shallowComponent(propsWithDatePicker);
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.html()).toContain(formattedNow);
            expect(dropContentWrapper.html()).toContain(formattedThen);
            expect(dropContentWrapper.html()).toContain(toLabel);
        });

        it('should display the date from the date picker with time on the label if the first dateSelectionBox is with time', () => {
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

            shallowComponent(newProps);
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.find('.dropdown-selected-value').html()).toContain(
                DateUtils.getDateWithTimeString(rightNow)
            );
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
            shallowComponent(newProps);
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );
            expect(dropContentWrapper.find('.dropdown-selected-value').text()).toContain('EMPTY_LABEL');
        });

        it('should not display the to-label and the upperlimit if it is equal to the lower limit', () => {
            const start = moment()
                .startOf('day')
                .toDate();
            const end = moment()
                .endOf('day')
                .toDate();
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
            const propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                datePicker,
            });
            shallowComponent(propsWithDatePicker);
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );

            expect(dropContentWrapper.find('.dropdown-selected-value').text()).toBe(formattedNow);
            expect(dropContentWrapper.find('.to-label').length).toBe(0);
        });

        it('should call onClick when clicking the dropdown toggle', () => {
            const onClickSpy = jasmine.createSpy();
            shallowComponent({
                onClick: onClickSpy,
            });
            const dropContentWrapper = shallowWithState(
                datePickerDropdown
                    .find(Drop)
                    .props()
                    .renderOpenButton(() => '') as any,
                {}
            );
            dropContentWrapper
                .find('.dropdown-toggle')
                .props()
                .onClick({} as any);
            expect(onClickSpy).toHaveBeenCalled();
        });

        it('should not set a click listener to handleDocumentClick if it has the readonly prop', () => {
            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');
            shallow(
                <DatePickerDropdown
                    {...DATE_PICKER_DROPDOWN_BASIC_PROPS}
                    onDocumentClick={jasmine.createSpy('click')}
                    readonly
                />
            );

            expect(addEventListenerSpy).not.toHaveBeenCalled();
        });

        it('should set a click listener to handleDocumentClick if it does not have the readonly prop', () => {
            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');
            shallow(
                <DatePickerDropdown
                    {...DATE_PICKER_DROPDOWN_BASIC_PROPS}
                    onDocumentClick={jasmine.createSpy('click')}
                />
            );

            expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onDestroy prop if set when will unmount', () => {
            const onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');
            const onDestroyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                onDestroy: onDestroySpy,
            });

            shallowComponent(onDestroyProps);

            datePickerDropdown.unmount();
            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should display a footer with two button if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
            });
            shallowComponent(propsIsOpened);

            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);
            expect(datePickerBoxWrapper.find(Button).length).toBe(2);
        });

        it('should display the default label on apply if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
            });
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened);
            shallowComponent(newProps);

            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);
            expect(
                datePickerBoxWrapper
                    .find(Button)
                    .first()
                    .props().name
            ).toContain(DEFAULT_APPLY_DATE_LABEL);
        });

        it('should display the apply label passed as a prop if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
            });
            const applyLabel: string = 'appliquer';
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {applyLabel});
            shallowComponent(newProps);

            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

            expect(
                datePickerBoxWrapper
                    .find(Button)
                    .first()
                    .props().name
            ).toContain(applyLabel);
        });

        it('should display the cancel default label if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
            });
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened);
            shallowComponent(newProps);

            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);
            expect(
                datePickerBoxWrapper
                    .find(Button)
                    .last()
                    .props().name
            ).toContain(DEFAULT_CANCEL_DATE_LABEL);
        });

        it('should display the cancel label passed as a prop if the dropdown is opened', () => {
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
            });
            const cancelLabel: string = 'annuler';
            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {cancelLabel});
            shallowComponent(newProps);

            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);
            expect(
                datePickerBoxWrapper
                    .find(Button)
                    .last()
                    .props().name
            ).toContain(cancelLabel);
        });

        it('should call onApply when clicking on the apply button', () => {
            const handleApplySpy: jasmine.Spy = jasmine.createSpy('onApply');
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
                onApply: handleApplySpy,
            });
            shallowComponent(propsIsOpened);
            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

            datePickerBoxWrapper
                .find(Button)
                .first()
                .props()
                .onClick();

            expect(handleApplySpy).toHaveBeenCalled();
        });

        it('should call onBeforeApply when clicking on the apply button', () => {
            const handleApplySpy: jasmine.Spy = jasmine.createSpy('onBeforeApply');
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
                onBeforeApply: handleApplySpy,
            });
            shallowComponent(propsIsOpened);
            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

            datePickerBoxWrapper
                .find(Button)
                .first()
                .props()
                .onClick();

            expect(handleApplySpy).toHaveBeenCalled();
        });

        it('should call onCancel when clicking on the cancel button', () => {
            const handleCancelSpy: jasmine.Spy = jasmine.createSpy('handleCancel');
            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                isOpened: true,
                onCancel: handleCancelSpy,
            });

            shallowComponent(propsIsOpened);
            const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

            datePickerBoxWrapper
                .find(Button)
                .last()
                .props()
                .onClick();

            expect(handleCancelSpy).toHaveBeenCalled();
        });

        it(
            'should call onCancel prop with current month and current year when there is no applied lower limit ' +
                'when calling handleCancel',
            () => {
                const onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');
                const newProps: Partial<IDatePickerDropdownProps> = {
                    initiallyUnselected: true,
                    id: 'some-date-picker',
                    onCancel: onCancelSpy,
                    years: [DateUtils.currentYear.toString()],
                    isOpened: true,
                };
                shallowComponent(newProps);
                const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);
                datePickerBoxWrapper
                    .find(Button)
                    .last()
                    .props()
                    .onClick();

                expect(onCancelSpy).toHaveBeenCalledWith(DateUtils.currentMonth, 0, true);
            }
        );

        it('should call onClear prop if set when calling handleClear', () => {
            const onClearSpy: jasmine.Spy = jasmine.createSpy('onClear');
            const onClearProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                onClear: onClearSpy,
            });
            shallowComponent(onClearProps);
            datePickerDropdown
                .find(DatePickerBox)
                .props()
                .onClear();

            expect(onClearSpy).toHaveBeenCalled();
        });

        it('should render a Drop', () => {
            const wrapper = shallowWithState(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />, {});
            expect(wrapper.find(Drop).length).toBe(1);
        });

        describe('with a range limit defined in the <DatePicker/>', () => {
            let datePickerDropdownWithRangeLimit: IDatePickerDropdownProps;

            const changeDatePickerState = (newState?: Partial<IDatePickerState>) => {
                datePickerDropdownWithRangeLimit = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                    datePicker: _.extend(
                        {},
                        datePicker,
                        {
                            isRange: true,
                            rangeLimit: {
                                weeks: 1,
                                days: 1,
                                hours: 1,
                                message: 'test',
                            },
                        },
                        newState
                    ),
                });
            };

            it('should disabled the primary button if the the inputLowerLimit has exceeded the range limit with the inputUpperLimit', () => {
                const date: Date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                changeDatePickerState({
                    inputLowerLimit: new Date(),
                    inputUpperLimit: date,
                });

                shallowComponent(datePickerDropdownWithRangeLimit);
                const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

                expect(
                    datePickerBoxWrapper
                        .find(Button)
                        .first()
                        .props().enabled
                ).toBe(false);
                expect(
                    datePickerBoxWrapper
                        .find(Button)
                        .first()
                        .props().tooltip
                ).toBe('test');
            });

            it('should enabled the primary button if the the inputLowerLimit does not exceeded the range limit with the inputUpperLimit', () => {
                const date: Date = new Date();
                date.setHours(date.getHours() + 1);
                changeDatePickerState({
                    inputLowerLimit: new Date(),
                    inputUpperLimit: date,
                });
                shallowComponent(datePickerDropdownWithRangeLimit);
                const datePickerBoxWrapper = shallow(datePickerDropdown.find(DatePickerBox).props().footer);

                expect(
                    datePickerBoxWrapper
                        .find(Button)
                        .first()
                        .props().enabled
                ).toBe(true);
            });
        });
    });
});
