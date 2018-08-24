import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IOptionPickerProps, OptionPicker} from '../OptionPicker';
import {changeOptionPicker} from '../OptionPickerActions';
import {OptionPickerConnected} from '../OptionPickerConnected';
import {IOptionPickerState} from '../OptionPickerReducers';

describe('Option picker', () => {
    const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {
        id: 'option-picker',
        options: [
            {
                label: 'Option 1',
                value: () => 'optionValue',
            },
            {
                label: 'Option 2',
                value: () => '1238',
            },
        ],
    };

    describe('<OptionPickerConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let optionPicker: ReactWrapper<IOptionPickerProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <OptionPickerConnected {...OPTION_PICKER_BASIC_PROPS} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            optionPicker = wrapper.find(OptionPicker).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get an id as a prop', () => {
            const idProp = optionPicker.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(OPTION_PICKER_BASIC_PROPS.id);
        });

        it('should get the active label as a prop', () => {
            const activeLabelProp = optionPicker.props().activeLabel;

            expect(activeLabelProp).toBeDefined();
            expect(activeLabelProp).toBe('');
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = optionPicker.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = optionPicker.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on click as a prop', () => {
            const onChangeProp = optionPicker.props().onClick;

            expect(onChangeProp).toBeDefined();
        });

        it('should return an empty string for the activeLabel when the option picker does not exist in the state', () => {
            store.dispatch(clearState());
            wrapper.update();

            expect(_.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id})).toBeUndefined();
            expect(wrapper.find(OptionPicker).props().activeLabel).toBe('');
        });

        it('should return the activeLabel from the state when the option picker exists in the state', () => {
            const expectedSelectedValue: string = 'our value';
            const expectedSelectedLabel: string = 'our label';

            store.dispatch(changeOptionPicker(OPTION_PICKER_BASIC_PROPS.id, expectedSelectedLabel, expectedSelectedValue));
            wrapper.update();

            expect(wrapper.find(OptionPicker).props().activeLabel).toBe(expectedSelectedLabel);
        });

        it('should call onRender prop when mounted', () => {
            wrapper.unmount();
            store.dispatch(clearState());

            expect(store.getState().optionPickers.length).toBe(0);

            wrapper.mount();

            expect(store.getState().optionPickers.length).toBe(1);
        });

        it('should call onDestroy prop when will unmount', () => {
            wrapper.unmount();

            expect(store.getState().optionPickers.length).toBe(0);
        });

        it('should set the selected value to the one sent when calling the onClick prop', () => {
            let expectedSelectedValue: string = 'our value';
            let expectedSelectedLabel: string = 'our label';
            let optionPickerState: IOptionPickerState;

            optionPicker.props().onClick(expectedSelectedValue, expectedSelectedLabel);

            optionPickerState = _.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id});
            expect(optionPickerState.selectedValue).toBe(expectedSelectedValue);
            expect(optionPickerState.selectedLabel).toBe(expectedSelectedLabel);

            expectedSelectedValue = 'new value';
            expectedSelectedLabel = 'new label';

            optionPicker.props().onClick(expectedSelectedValue, expectedSelectedLabel);

            optionPickerState = _.findWhere(store.getState().optionPickers, {id: OPTION_PICKER_BASIC_PROPS.id});
            expect(optionPickerState.selectedValue).toBe(expectedSelectedValue);
            expect(optionPickerState.selectedLabel).toBe(expectedSelectedLabel);
        });
    });
});
