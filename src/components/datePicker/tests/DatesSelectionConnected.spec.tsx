import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';
import {changeDatePickerLowerLimit, changeDatePickerUpperLimit, DateLimits, selectDate} from '../DatePickerActions';
import {DatesSelection, IDatesSelectionProps} from '../DatesSelection';
import {DatesSelectionConnected} from '../DatesSelectionConnected';

describe('Date picker', () => {
    describe('<DatesSelectionConnected />', () => {
        const DATES_SELECTION_ID: string = 'dates-selection';
        const NOW: Date = new Date();

        let wrapper: ReactWrapper<any, any>;
        let datesSelection: ReactWrapper<IDatesSelectionProps, any>;
        let store: Store<IReactVaporState>;

        const mountComponent = (props = {}) => {
            if (wrapper && wrapper.length) {
                wrapper.unmount();
            }
            wrapper = mount(
                <Provider store={store}>
                    <DatesSelectionConnected id={DATES_SELECTION_ID} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            wrapper.update();
            datesSelection = wrapper.find(DatesSelection).first();
        };

        beforeEach(() => {
            jasmine.clock().install();
            jasmine.clock().mockDate(NOW);
            store = TestUtils.buildStore();

            mountComponent();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
            jasmine.clock().uninstall();
        });

        it('should get an id as a prop', () => {
            const idProp = datesSelection.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(DATES_SELECTION_ID);
        });

        it('should get the lower limit as a prop', () => {
            const lowerLimitProp = datesSelection.props().lowerLimit;

            expect(lowerLimitProp).toBeDefined();
        });

        it('should get the upper limit as a prop', () => {
            const upperLimitProp = datesSelection.props().upperLimit;

            expect(upperLimitProp).toBeDefined();
        });

        it('should get the quick option as a prop', () => {
            const quickOptionProp = datesSelection.props().quickOption;

            expect(quickOptionProp).toBeDefined();
            expect(quickOptionProp).toBe('');
        });

        it('should get if one of the pricker is being selected as a prop', () => {
            const isSelectingProp = datesSelection.props().isSelecting;

            expect(isSelectingProp).toBeDefined();
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = datesSelection.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = datesSelection.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on blur as a prop', () => {
            const onBlurProp = datesSelection.props().onBlur;

            expect(onBlurProp).toBeDefined();
        });

        it('should get what to do on change as a prop', () => {
            const onClickProp = datesSelection.props().onClick;

            expect(onClickProp).toBeDefined();
        });

        it('should return the current date for the lower limit when the date picker does not exist in the state', () => {
            store.dispatch(clearState());
            wrapper.update();

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();
            expect(wrapper.find(DatesSelection).props().lowerLimit).toEqual(NOW);
        });

        it('should return the current date for the upper limit when the date picker does not exist in the state', () => {
            store.dispatch(clearState());
            wrapper.update();

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();
            expect(wrapper.find(DatesSelection).props().upperLimit).toEqual(NOW);
        });

        it('should return an empty string for the picker selected when the date picker does not exist in the state', () => {
            store.dispatch(clearState());
            wrapper.update();

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID})).toBeUndefined();
            expect(wrapper.find(DatesSelection).props().isSelecting).toBe('');
        });

        it('should return the lower limit from the state when the date picker exists in the state', () => {
            const expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));

            store.dispatch(changeDatePickerLowerLimit(DATES_SELECTION_ID, expectedValue));
            wrapper.update();

            expect(wrapper.find(DatesSelection).props().lowerLimit).toBe(expectedValue);
        });

        it('should return the upper limit from the state when the date picker exists in the state', () => {
            const expectedValue: Date = new Date(new Date().setHours(11, 1, 11, 1));

            store.dispatch(changeDatePickerUpperLimit(DATES_SELECTION_ID, expectedValue));
            wrapper.update();

            expect(wrapper.find(DatesSelection).props().upperLimit).toBe(expectedValue);
        });

        it('should return the picker selected when the date picker exists in the state', () => {
            const expectedValue: string = 'one limit';

            store.dispatch(selectDate(DATES_SELECTION_ID, expectedValue));
            wrapper.update();

            expect(wrapper.find(DatesSelection).props().isSelecting).toBe(expectedValue);
        });

        it('should return the selected value if the option picker exists in the state', () => {
            const expectedValue: string = 'this option';

            store.dispatch(addOptionPicker(DATES_SELECTION_ID));
            store.dispatch(changeOptionPicker(DATES_SELECTION_ID, 'this label', expectedValue));
            wrapper.update();

            expect(wrapper.find(DatesSelection).props().quickOption).toBe(expectedValue);
        });

        it('should call onRender prop when mounted', () => {
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().datePickers.length).toBe(0);

            wrapper.mount();

            expect(store.getState().datePickers.length).toBe(1);
        });

        it('should call onDestroy prop when will unmount', () => {
            wrapper.unmount();

            expect(store.getState().datePickers.length).toBe(0);
        });

        it('should set the selected picker to the one sent when calling the onClick prop', () => {
            let expectedValue: string = DateLimits.upper;

            datesSelection.props().onClick(true);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(expectedValue);

            expectedValue = DateLimits.lower;

            datesSelection.props().onClick(false);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(expectedValue);
        });

        it('should change the lower limit in the state when calling the onBlur prop with the lower limit', () => {
            const expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));

            datesSelection.props().onBlur(expectedValue, false);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).lowerLimit).toBe(expectedValue);
        });

        it('should change the upper limit in the state to the new lower limit date when calling the onBlur prop with the lower limit when isRange prop is false', () => {
            mountComponent({isRange: false});
            const expectedValue: Date = new Date(new Date().setHours(5, 5, 5, 5));

            datesSelection.props().onBlur(expectedValue, false);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit).toBe(expectedValue);
        });

        it('should not change the upper limit in the state when calling the onBlur prop with the lower limit when isRange prop is true', () => {
            mountComponent({isRange: true});
            const newValue: Date = new Date(new Date().setHours(5, 5, 5, 5));
            const expectedValue: Date = _.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit;

            datesSelection.props().onBlur(newValue, false);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).upperLimit).toBe(expectedValue);
        });

        it('should deselect the quick option when calling onBlur prop if the call does not come from the option picker',
            () => {
                const expectedValue: string = 'anything';
                const expectedLabel: string = 'something';

                store.dispatch(addOptionPicker(DATES_SELECTION_ID));
                store.dispatch(changeOptionPicker(DATES_SELECTION_ID, expectedLabel, expectedValue));

                datesSelection.props().onBlur(new Date(), true, true);

                expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedValue).toBe(expectedValue);
                expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedLabel).toBe(expectedLabel);

                datesSelection.props().onBlur(new Date(), true, false);
                expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedValue).toBe('');
                expect(_.findWhere(store.getState().optionPickers, {id: DATES_SELECTION_ID}).selectedLabel).toBe('');
            });

        it('should remove the selected limit on blur if the lowerLimit input has changed', () => {
            store.dispatch(selectDate(DATES_SELECTION_ID, DateLimits.lower));

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(DateLimits.lower);

            datesSelection.props().onBlur(new Date(), false);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe('');
        });

        it('should remove the selected limit on blur if the upperLimit input has changed', () => {
            store.dispatch(selectDate(DATES_SELECTION_ID, DateLimits.upper));

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe(DateLimits.upper);

            datesSelection.props().onBlur(new Date(), true);

            expect(_.findWhere(store.getState().datePickers, {id: DATES_SELECTION_ID}).selected).toBe('');
        });
    });
});
