import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../../ReactVapor';
import {keyCode} from '../../../../utils/InputUtils';
import {clearState} from '../../../../utils/ReduxUtils';
import {TestUtils} from '../../../../utils/TestUtils';
import {UUID} from '../../../../utils/UUID';
import {IDropdownSearchProps} from '../../DropdownSearch';
import {
    addCustomSelectedOption,
    applyFilterDropdownSearch,
    closeDropdownSearch,
    openDropdownSearch,
    updateOptionsDropdownSearch,
} from '../../DropdownSearchActions';
import {defaultSelectedOptionPlaceholder} from '../../DropdownSearchReducers';
import {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch';
import {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearchConnected';

describe('MultiSelectDropdownSearch', () => {

    const id: string = UUID.generate();

    describe('<MultiSelectDropdownSearchConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let multiSelectDropdownSearchConnected: ReactWrapper<IDropdownSearchProps, any>;
        let store: Store<IReactVaporState>;

        const defaultOptions = [{value: 'a'}, {value: 'b'}];

        const props: IDropdownSearchProps = {
            id: id,
            defaultOptions: defaultOptions,
        };

        const renderMultiSelectDropdownSearchConnected = (currentProps: IDropdownSearchProps) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectDropdownSearchConnected {...currentProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            multiSelectDropdownSearchConnected = wrapper.find(MultiSelectDropdownSearch).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        describe('mount and unmount', () => {

            beforeEach(() => {
                renderMultiSelectDropdownSearchConnected(props);
            });

            it('should add a new dropdownSearch state in the store when mounted', () => {
                wrapper.unmount();
                store.dispatch(clearState());
                expect(store.getState().dropdownSearch.length).toBe(0);

                wrapper.mount();
                expect(store.getState().dropdownSearch.length).toBe(1);
            });

            it('should call onDestroy prop when will unmount', () => {
                wrapper.unmount();
                expect(store.getState().dropdownSearch.length).toBe(0);
            });
        });

        describe('mapDispatchToProps', () => {

            beforeEach(() => {
                renderMultiSelectDropdownSearchConnected(props);
            });

            it('should get what to do on destroy as a prop', () => {
                const onDestroyProp = multiSelectDropdownSearchConnected.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on onMount as a prop', () => {
                const onMountProp = multiSelectDropdownSearchConnected.props().onMount;

                expect(onMountProp).toBeDefined();
            });

            it('should get what to do on onBlur as a prop', () => {
                const onBlurProp = multiSelectDropdownSearchConnected.props().onBlur;

                expect(onBlurProp).toBeDefined();
            });

            it('should get what to do on onOptionClick as a prop', () => {
                const onOptionClickProp = multiSelectDropdownSearchConnected.props().onOptionClick;

                expect(onOptionClickProp).toBeDefined();
            });

            it('should get what to do on onCustomOptionClick as a prop', () => {
                const onCustomOptionClickProp = multiSelectDropdownSearchConnected.props().onCustomOptionClick;

                expect(onCustomOptionClickProp).toBeDefined();
            });

            it('should get what to do on onFilterTextChange as a prop', () => {
                const onFilterClickProp = multiSelectDropdownSearchConnected.props().onFilterTextChange;

                expect(onFilterClickProp).toBeDefined();
            });

            it('should get what to do on onKeyDownFilterBox as a prop', () => {
                const onKeyDownFilterBox = multiSelectDropdownSearchConnected.props().onKeyDownFilterBox;

                expect(onKeyDownFilterBox).toBeDefined();
            });

            it('should get what to do on onRemoveSelectedOption as a prop', () => {
                const onRemoveSelectedOption = multiSelectDropdownSearchConnected.props().onRemoveSelectedOption;

                expect(onRemoveSelectedOption).toBeDefined();
            });

            it('should get what to do on onRemoveAllSelectedOptions as a prop', () => {
                const onRemoveAllSelectedOptions = multiSelectDropdownSearchConnected.props().onRemoveAllSelectedOptions;

                expect(onRemoveAllSelectedOptions).toBeDefined();
            });

            it('should toggle the close dropdown on blur', () => {
                const dropdown = wrapper.find('.dropdown');

                store.dispatch(closeDropdownSearch(id, []));

                multiSelectDropdownSearchConnected.props().onBlur([]);

                expect(dropdown.hasClass('open')).toBe(false);
            });

            it('should open the dropdown on focus', () => {
                store.dispatch(closeDropdownSearch(id, []));
                wrapper.update();

                wrapper.find(MultiSelectDropdownSearch).props().onFocus();
                wrapper.update();

                expect(wrapper.find('.open').length).toBe(1);
            });

            it('should add the selected value in the state on click an option', () => {
                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));
                store.dispatch(openDropdownSearch(id));

                wrapper.find('li span').first().simulate('mouseDown');

                const selectedOption = store.getState().dropdownSearch[0].options[0];
                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);
                expect(selectedOption.value).toBe('test 1');
            });

            it('should add the filterText in the state on onFilterTextChange', () => {
                const filter: string = 't';
                expect(store.getState().dropdownSearch[0].filterText).toBe('');

                multiSelectDropdownSearchConnected.props().onFilterTextChange(filter);
                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
            });

            it('should add a custom option on custom option click', () => {
                const filterText: string = 'filter_text';
                multiSelectDropdownSearchConnected.props().onCustomOptionClick(filterText);

                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();
            });

            it('should update filterText on key down', () => {
                const enterKeyCode: number = keyCode.enter;
                const filterText: string = 'custom value';

                store.dispatch(applyFilterDropdownSearch(id, filterText));

                multiSelectDropdownSearchConnected.props().onKeyDownFilterBox(enterKeyCode);

                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();
            });

            it('should remove selected option', () => {
                const selectedOptionValue = 'value';

                store.dispatch(addCustomSelectedOption(id, selectedOptionValue));

                multiSelectDropdownSearchConnected.props().onRemoveSelectedOption(selectedOptionValue);

                expect(_.find(store.getState().dropdownSearch[0].options, {value: selectedOptionValue})).toBeUndefined();
            });

            it('should remove all selected option', () => {
                const selectedOptionValue1 = 'value_1';
                const selectedOptionValue2 = 'value_2';

                store.dispatch(addCustomSelectedOption(id, selectedOptionValue1));
                store.dispatch(addCustomSelectedOption(id, selectedOptionValue2));

                multiSelectDropdownSearchConnected.props().onRemoveAllSelectedOptions();

                expect(_.where(store.getState().dropdownSearch[0].options, {selected: true}).length).toBe(0);
            });
        });
    });
});
