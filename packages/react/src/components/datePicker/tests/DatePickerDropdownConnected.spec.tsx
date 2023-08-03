import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {createTestAppContainer, getStoreMock, removeTestAppContainer, TestUtils} from '../../../utils/tests/TestUtils';
import {Button} from '../../button/Button';
import {DEFAULT_YEARS, MONTH_PICKER_ID, YEAR_PICKER_ID} from '../../calendar/Calendar';
import {DefaultGroupIds, DropActions} from '../../drop/redux/DropActions';
import {DropSelectors} from '../../drop/redux/DropReducers';
import {closeDropdown, toggleDropdown} from '../../dropdown/DropdownActions';
import {ModalFooter} from '../../modal/ModalFooter';
import {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';
import {addOptionsCycle, changeOptionsCycle} from '../../optionsCycle/OptionsCycleActions';
import {addDatePicker, applyDatePicker, changeDatePickerLowerLimit, DateLimits} from '../DatePickerActions';
import {DatePickerBox} from '../DatePickerBox';
import {DatePickerDropdown, IDatePickerDropdownOwnProps, IDatePickerDropdownProps} from '../DatePickerDropdown';
import {DatePickerDropdownConnected} from '../DatePickerDropdownConnected';
import {IDatePickerState} from '../DatePickerReducers';

describe('Date picker', () => {
    describe('<DatePickerDropdownConnected', () => {
        const DATE_PICKER_DROPDOWN_BASIC_PROPS: IDatePickerDropdownProps = {
            id: 'dropdown',
            datesSelectionBoxes: [],
        };

        describe('with <Drop />', () => {
            let store: ReturnType<typeof getStoreMock>;
            let wrapper: ReactWrapper;
            const mountComponent = (props?: IDatePickerDropdownOwnProps) => {
                store = getStoreMock();
                return mount(
                    <Provider store={store}>
                        <DatePickerDropdownConnected {...DATE_PICKER_DROPDOWN_BASIC_PROPS} withDrop {...props} />
                    </Provider>,
                );
            };

            it('should call isOpen from the DropSelector', () => {
                const spy = jest.spyOn(DropSelectors, 'isOpen');
                mountComponent();

                expect(spy).toHaveBeenCalled();
            });

            it('should close the drop if the props withDrop is enable on onClose', () => {
                jest.spyOn(DropSelectors, 'isOpen').mockReturnValue(true);

                wrapper = mountComponent();
                const wrapperFooter = shallow(wrapper.find(DatePickerBox).props().footer);
                wrapperFooter.find(Button).last().props().onClick();

                expect(store.getActions()).toContainEqual(
                    DropActions.toggle(DATE_PICKER_DROPDOWN_BASIC_PROPS.id, DefaultGroupIds.default, false),
                );
            });

            it('should close the drop if the props withDrop is enable on onApply', () => {
                jest.spyOn(DropSelectors, 'isOpen').mockReturnValue(true);

                wrapper = mountComponent();
                const wrapperFooter = shallow(wrapper.find(DatePickerBox).props().footer);
                wrapperFooter.find(Button).first().props().onClick();

                expect(store.getActions()).toContainEqual(
                    DropActions.toggle(DATE_PICKER_DROPDOWN_BASIC_PROPS.id, DefaultGroupIds.default, false),
                );
            });
        });

        describe('with Dropdown', () => {
            let wrapper: ReactWrapper<any, any>;
            let datePickerDropdown: ReactWrapper<IDatePickerDropdownProps, any>;
            let store: Store<PlasmaState>;

            const mountWithProps = (props: IDatePickerDropdownProps) => {
                wrapper = mount(
                    <Provider store={store}>
                        <DatePickerDropdownConnected {...props} />
                    </Provider>,
                );
                datePickerDropdown = wrapper.find(DatePickerDropdown).first();
            };

            beforeEach(() => {
                store = TestUtils.buildStore();

                createTestAppContainer();
                mountWithProps(DATE_PICKER_DROPDOWN_BASIC_PROPS);
            });

            afterEach(() => {
                removeTestAppContainer();
                store.dispatch(clearState());
            });

            it('should get an id as a prop', () => {
                const idProp = datePickerDropdown.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(DATE_PICKER_DROPDOWN_BASIC_PROPS.id);
            });

            it('should get if it is opened as a prop', () => {
                const isOpenedProp = datePickerDropdown.props().isOpened;

                expect(isOpenedProp).toBeDefined();
                expect(isOpenedProp).toBe(false);
            });

            it('should get the date picker as a prop', () => {
                const datePickerProp = datePickerDropdown.props().datePicker;

                expect(datePickerProp).toBeDefined();
                expect(datePickerProp).toBe(null);
            });

            it('should get if it has a redux state as a prop', () => {
                const withReduxStateProp = datePickerDropdown.props().withReduxState;

                expect(withReduxStateProp).toBeDefined();
                expect(withReduxStateProp).toBe(true);
            });

            it('should get what to do on render as a prop', () => {
                const view = datePickerDropdown.props().onRender;

                expect(view).toBeDefined();
            });

            it('should get what to do on destroy as a prop', () => {
                const onDestroyProp = datePickerDropdown.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on click as a prop', () => {
                const onClickProp = datePickerDropdown.props().onClick;

                expect(onClickProp).toBeDefined();
            });

            it('should get what to do on apply as a prop', () => {
                const onApplyProp = datePickerDropdown.props().onApply;

                expect(onApplyProp).toBeDefined();
            });

            it('should get what to do on cancel as a prop', () => {
                const onCancelProp = datePickerDropdown.props().onCancel;

                expect(onCancelProp).toBeDefined();
            });

            it('should get what to do on document click as a prop', () => {
                const onDocumentClickProp = datePickerDropdown.props().onDocumentClick;

                expect(onDocumentClickProp).toBeDefined();
            });

            it('should get what to do on clear as a prop', () => {
                const onClearProp = datePickerDropdown.props().onClear;

                expect(onClearProp).toBeDefined();
            });

            it('should return isOpen if the dropdown is opened', () => {
                store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));
                wrapper.update();

                expect(wrapper.find(DatePickerDropdown).props().isOpened).toBe(true);

                store.dispatch(closeDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));
                wrapper.update();

                expect(wrapper.find(DatePickerDropdown).props().isOpened).toBe(false);
            });

            it('should return the first date picker with the id starting with the dropdown id for the datePicker prop', () => {
                const firstDatePickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                store.dispatch(addDatePicker(firstDatePickerId, false));
                store.dispatch(addDatePicker(DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '32', false));
                store.dispatch(addDatePicker('1', false));
                wrapper.update();

                expect(wrapper.find(DatePickerDropdown).props().datePicker.id).toBe(firstDatePickerId);
            });

            it('should call onRender prop when mounted', () => {
                wrapper.unmount();
                store.dispatch(clearState());

                expect(store.getState().dropdowns.length).toBe(0);

                wrapper.mount();

                expect(store.getState().dropdowns.length).toBe(1);
            });

            it('should call onDestroy prop when will unmount', () => {
                wrapper.unmount();

                expect(store.getState().dropdowns.length).toBe(0);
            });

            it('should clear the selected limits of the dropdown when calling onClear prop', () => {
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                store.dispatch(addDatePicker(pickerId, true, undefined, 'some-calendar-id', undefined, true));

                datePickerDropdown.props().onClear();
                const datePickerState: IDatePickerState = _.findWhere(store.getState().datePickers, {id: pickerId});

                expect(datePickerState.lowerLimit).toBeNull();
                expect(datePickerState.upperLimit).toBeNull();
                expect(datePickerState.inputLowerLimit).toBeNull();
                expect(datePickerState.inputUpperLimit).toBeNull();
                expect(datePickerState.selected).toBe(DateLimits.lower);
            });

            it('should toggle the open property of the dropdown when calling the onClick prop', () => {
                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    false,
                );

                datePickerDropdown.props().onClick(datePickerDropdown.props().datePicker);

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    true,
                );
            });

            it(`should select the date picker's lower limit when calling the onClick prop`, () => {
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';

                store.dispatch(addDatePicker(pickerId, false));
                wrapper.update();
                datePickerDropdown = wrapper.find(DatePickerDropdown);

                expect(_.findWhere(store.getState().datePickers, {id: pickerId}).selected).toBe('');

                datePickerDropdown.props().onClick(datePickerDropdown.props().datePicker);

                expect(_.findWhere(store.getState().datePickers, {id: pickerId}).selected).toBe(DateLimits.lower);
            });

            it('should close the dropdown menu when calling onDocumentClick prop', () => {
                store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    true,
                );

                datePickerDropdown.props().onDocumentClick();

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    false,
                );
            });

            it('should apply the dates when calling onApply prop', () => {
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 20));

                store.dispatch(addDatePicker(pickerId, false));
                store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));

                datePickerDropdown.props().onApply();

                expect(_.findWhere(store.getState().datePickers, {id: pickerId}).appliedLowerLimit).toEqual(
                    newLowerLimit,
                );
            });

            it('should reset the dates when calling onCancel prop', () => {
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 20));

                store.dispatch(addDatePicker(pickerId, false));
                store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));

                datePickerDropdown.props().onCancel(0, 0, true);

                const datePicker: IDatePickerState = _.findWhere(store.getState().datePickers, {id: pickerId});

                expect(datePicker.appliedLowerLimit).not.toEqual(newLowerLimit);
                expect(datePicker.lowerLimit).toEqual(datePicker.appliedLowerLimit);
            });

            it('should close the dropdown when calling onApply prop', () => {
                store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    true,
                );

                datePickerDropdown.props().onApply();

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    false,
                );
            });

            it('should close the dropdown when calling onCancel prop', () => {
                store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    true,
                );

                datePickerDropdown.props().onCancel(1, 1, true);

                expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(
                    false,
                );
            });

            it('should reset the option picker when calling onCancel prop', () => {
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                const newValue: string = 'selected value';
                const newLabel: string = 'a label';

                store.dispatch(addOptionPicker(pickerId));
                store.dispatch(changeOptionPicker(pickerId, newLabel, newValue));

                expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe(newValue);
                expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedLabel).toBe(newLabel);

                datePickerDropdown.props().onCancel(1, 1, true);

                expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe('');
                expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedLabel).toBe('');
            });

            it('should reset the month when calling onCancel prop', () => {
                const cycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;

                store.dispatch(addOptionsCycle(cycleId));
                store.dispatch(changeOptionsCycle(cycleId, 7));

                datePickerDropdown.props().onCancel(1, 1, true);

                expect(_.findWhere(store.getState().optionsCycles, {id: cycleId}).currentOption).toBe(1);
            });

            it('should reset the year when calling onCancel prop', () => {
                const cycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;

                store.dispatch(addOptionsCycle(cycleId));
                store.dispatch(changeOptionsCycle(cycleId, 0));

                datePickerDropdown.props().onCancel(1, 1, true);

                expect(_.findWhere(store.getState().optionsCycles, {id: cycleId}).currentOption).toBe(1);
            });

            it("should reset the month to the datepicker's lower limit when calling onCancelProp", () => {
                const propsIsOpen: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                    isOpened: true,
                });
                mountWithProps(propsIsOpen);

                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 700));
                const yearCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;
                const monthCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;

                store.dispatch(addDatePicker(pickerId, false, undefined));
                store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));
                store.dispatch(applyDatePicker(pickerId));

                store.dispatch(addOptionsCycle(monthCycleId));
                store.dispatch(addOptionsCycle(yearCycleId));

                store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));

                datePickerDropdown.find(ModalFooter).find(Button).first().simulate('click');

                expect(_.findWhere(store.getState().optionsCycles, {id: monthCycleId}).currentOption).toBe(
                    newLowerLimit.getMonth(),
                );

                expect(_.findWhere(store.getState().optionsCycles, {id: yearCycleId}).currentOption).toBe(
                    DEFAULT_YEARS.indexOf(newLowerLimit.getFullYear().toString()),
                );
            });

            it('should not reset anything if the date picker dropdown is already closed', () => {
                const monthCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;
                const yearCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;
                const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';
                const newValue: string = 'selected value';
                const newLabel: string = 'a label';
                const expectedValue: number = 7;

                store.dispatch(addOptionsCycle(monthCycleId));
                store.dispatch(changeOptionsCycle(monthCycleId, expectedValue));

                store.dispatch(addOptionsCycle(yearCycleId));
                store.dispatch(changeOptionsCycle(yearCycleId, expectedValue));

                store.dispatch(addOptionPicker(pickerId));
                store.dispatch(changeOptionPicker(pickerId, newLabel, newValue));

                datePickerDropdown.props().onCancel(1, 1, false);

                expect(_.findWhere(store.getState().optionsCycles, {id: monthCycleId}).currentOption).toBe(
                    expectedValue,
                );

                expect(_.findWhere(store.getState().optionsCycles, {id: yearCycleId}).currentOption).toBe(
                    expectedValue,
                );

                expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe(newValue);
            });

            it('should display a <DatePickerBox /> with a "withReduxState" prop set to true when the dropdown is opened', () => {
                const propsIsOpen: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {
                    isOpened: true,
                });
                mountWithProps(propsIsOpen);

                expect(datePickerDropdown.find(DatePickerBox).props().withReduxState).toBe(true);
            });
        });

        it('goes to the next month when clicking on the next month arrow', async () => {
            const user = userEvent.setup({delay: null});
            jest.useFakeTimers().setSystemTime(new Date(2000, 0, 1));

            render(<DatePickerDropdownConnected id={'dropdown'} datesSelectionBoxes={[]} />);

            await user.click((await screen.findAllByRole('button', {name: /arrowHeadRight/i}))[0]);

            expect(screen.getByText(/february/i)).toBeVisible();
            expect(screen.getByText(/2000/i)).toBeVisible();

            jest.useRealTimers();
        });
    });
});
