import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {SelectedOption} from '../../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {IMultiSelectProps, MultiSelectConnected} from '../MultiSelectConnected';
import {SelectConnected} from '../SelectConnected';

describe('Select', () => {
    describe('<MultiSelectConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let multiSelect: ReactWrapper<IMultiSelectProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'list-box-connected';

        const mountMultiSelect = (items: IItemBoxProps[] = [], props: Partial<IMultiSelectProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectConnected id={id} items={items} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            multiSelect = wrapper.find(SelectConnected).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountMultiSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountMultiSelect();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });
        });

        it('should allow a custom placeholder', () => {
            const expectedPlaceholder = 'select thingy';

            mountMultiSelect([
                {value: 'a'},
                {value: 'b'},
            ], {placeholder: expectedPlaceholder});

            expect(multiSelect.html()).toContain(expectedPlaceholder);
        });

        it('should contains a the selected value', () => {
            const selectedValue = 'dis 1';
            mountMultiSelect([
                {value: 'a'},
                {value: selectedValue, selected: true},
            ]);

            expect(multiSelect.html()).toContain(selectedValue);
        });

        it('should contains the display value when the selected value has one', () => {
            const selectedDisplayValue = 'dis 2';
            mountMultiSelect([
                {value: 'a'},
                {value: 'dis 1', displayValue: selectedDisplayValue, selected: true},
            ]);

            expect(multiSelect.html()).toContain(selectedDisplayValue);
        });

        it('should contains a SelectedOption for every selected item', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            expect(multiSelect.find(SelectedOption).length).toBe(2);
            expect(multiSelect.find(SelectedOption).at(0).props().value).toBe(firstSelected);
            expect(multiSelect.find(SelectedOption).at(1).props().value).toBe(secondSelected);
        });

        it('should disable the dropdown if there is no options', () => {
            mountMultiSelect([]);

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);
        });

        it('should not disable the dropdown if one of the options is not is selected', () => {
            mountMultiSelect([
                {value: 'a', selected: false},
                {value: 'b', selected: true},
            ]);

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBeUndefined();
        });

        it('should disable the dropdown when every option is selected', () => {
            mountMultiSelect([
                {value: 'a', selected: true},
                {value: 'b', selected: true},
            ]);

            expect(multiSelect.find('.multiselect-add').prop('disabled')).toBe(true);
        });

        it('should remove the selected item when a X on SelectedOption is clicked', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            let state = _.findWhere(store.getState().listBoxes, {id});
            expect(state.selected).toEqual([firstSelected, secondSelected]);

            multiSelect.find(SelectedOption).at(0).find('.remove-option').simulate('click');

            state = _.findWhere(store.getState().listBoxes, {id});
            expect(state.selected).toEqual([secondSelected]);
        });

        it('should remove all selected items when the clear button is clicked', () => {
            const firstSelected = 'dis 1';
            const secondSelected = 'dis two';

            mountMultiSelect([
                {value: 'a'},
                {value: firstSelected, selected: true},
                {value: secondSelected, selected: true},
            ]);

            let state = _.findWhere(store.getState().listBoxes, {id});
            expect(state.selected).toEqual([firstSelected, secondSelected]);

            multiSelect.find('.remove-all-selected-options').simulate('click');

            state = _.findWhere(store.getState().listBoxes, {id});
            expect(state.selected).toEqual([]);
        });
    });
});
