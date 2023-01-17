import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../../PlasmaState.js';
import {keyCode} from '../../../../utils/InputUtils.js';
import {clearState} from '../../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../../utils/tests/TestUtils.js';
import {UUID} from '../../../../utils/UUID.js';
import {IDropdownSearchProps} from '../../DropdownSearch.js';
import {
    addCustomSelectedOption,
    applyFilterDropdownSearch,
    closeDropdownSearch,
    openDropdownSearch,
    updateOptionsDropdownSearch,
} from '../../DropdownSearchActions.js';
import {defaultSelectedOptionPlaceholder} from '../../DropdownSearchReducers.js';
import {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch.js';
import {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearchConnected.js';

describe('MultiSelectDropdownSearch', () => {
    const id: string = UUID.generate();

    describe('<MultiSelectDropdownSearchConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let multiSelectDropdownSearchConnected: ReactWrapper<IDropdownSearchProps, any>;
        let store: Store<PlasmaState>;

        const defaultOptions = [{value: 'a'}, {value: 'b'}];

        const props: IDropdownSearchProps = {
            id: id,
            defaultOptions: defaultOptions,
        };

        const renderMultiSelectDropdownSearchConnected = (currentProps: IDropdownSearchProps) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectDropdownSearchConnected {...currentProps} />
                </Provider>
            );
            multiSelectDropdownSearchConnected = wrapper.find(MultiSelectDropdownSearch).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        describe('mount and unmount', () => {
            it('should add a new dropdownSearch state in the store when mounted', () => {
                renderMultiSelectDropdownSearchConnected(props);

                wrapper.unmount();
                store.dispatch(clearState());

                expect(store.getState().dropdownSearch.length).toBe(0);

                wrapper.mount();

                expect(store.getState().dropdownSearch.length).toBe(1);
            });

            it('should call onDestroy prop when will unmount', () => {
                renderMultiSelectDropdownSearchConnected(props);

                wrapper.unmount();

                expect(store.getState().dropdownSearch.length).toBe(0);
            });
        });

        describe('mapDispatchToProps', () => {
            it('should get what to do on destroy as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onDestroyProp = multiSelectDropdownSearchConnected.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on onMount as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onMountProp = multiSelectDropdownSearchConnected.props().onMount;

                expect(onMountProp).toBeDefined();
            });

            it('should get what to do on onBlur as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onBlurProp = multiSelectDropdownSearchConnected.props().onBlur;

                expect(onBlurProp).toBeDefined();
            });

            it('should get what to do on onOptionClick as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onOptionClickProp = multiSelectDropdownSearchConnected.props().onOptionClick;

                expect(onOptionClickProp).toBeDefined();
            });

            it('should get what to do on onCustomOptionClick as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onCustomOptionClickProp = multiSelectDropdownSearchConnected.props().onCustomOptionClick;

                expect(onCustomOptionClickProp).toBeDefined();
            });

            it('should get what to do on onFilterTextChange as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onFilterClickProp = multiSelectDropdownSearchConnected.props().onFilterTextChange;

                expect(onFilterClickProp).toBeDefined();
            });

            it('should get what to do on onKeyDownFilterBox as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onKeyDownFilterBox = multiSelectDropdownSearchConnected.props().onKeyDownFilterBox;

                expect(onKeyDownFilterBox).toBeDefined();
            });

            it('should get what to do on onRemoveSelectedOption as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onRemoveSelectedOption = multiSelectDropdownSearchConnected.props().onRemoveSelectedOption;

                expect(onRemoveSelectedOption).toBeDefined();
            });

            it('should get what to do on onRemoveAllSelectedOptions as a prop', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const onRemoveAllSelectedOptions =
                    multiSelectDropdownSearchConnected.props().onRemoveAllSelectedOptions;

                expect(onRemoveAllSelectedOptions).toBeDefined();
            });

            it('should toggle the close dropdown on blur', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const dropdown = wrapper.find('.dropdown');

                store.dispatch(closeDropdownSearch(id, []));

                multiSelectDropdownSearchConnected.props().onBlur([]);

                expect(dropdown.hasClass('open')).toBe(false);
            });

            it('should open the dropdown on focus', () => {
                renderMultiSelectDropdownSearchConnected(props);

                store.dispatch(closeDropdownSearch(id, []));
                wrapper.update();

                wrapper.find(MultiSelectDropdownSearch).props().onFocus();
                wrapper.update();

                expect(wrapper.find('.open').length).toBe(1);
            });

            it('should add the selected value in the state on click an option', () => {
                renderMultiSelectDropdownSearchConnected(props);

                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));
                store.dispatch(openDropdownSearch(id));

                wrapper.find('li span').first().simulate('mouseDown');

                const selectedOption = store.getState().dropdownSearch[0].options[0];

                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);
                expect(selectedOption.value).toBe('test 1');
            });

            it('should add the filterText in the state on onFilterTextChange', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const filter: string = 't';

                expect(store.getState().dropdownSearch[0].filterText).toBe('');

                multiSelectDropdownSearchConnected.props().onFilterTextChange(filter);

                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
            });

            it('should add a custom option on custom option click', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const filterText: string = 'filter_text';
                multiSelectDropdownSearchConnected.props().onCustomOptionClick(filterText);

                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();
            });

            it('should update filterText on key down', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const enterKeyCode: number = keyCode.enter;
                const filterText: string = 'custom value';

                store.dispatch(applyFilterDropdownSearch(id, filterText));

                multiSelectDropdownSearchConnected.props().onKeyDownFilterBox(enterKeyCode);

                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();
            });

            it('should remove selected option', () => {
                renderMultiSelectDropdownSearchConnected(props);

                const selectedOptionValue = 'value';

                store.dispatch(addCustomSelectedOption(id, selectedOptionValue));

                multiSelectDropdownSearchConnected.props().onRemoveSelectedOption(selectedOptionValue);

                expect(
                    _.find(store.getState().dropdownSearch[0].options, {value: selectedOptionValue})
                ).toBeUndefined();
            });

            it('should remove all selected option', () => {
                renderMultiSelectDropdownSearchConnected(props);

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
