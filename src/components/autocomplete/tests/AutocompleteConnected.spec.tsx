import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {keyCode} from '../../../utils/InputUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {AutocompleteConnected, IAutocompleteProps} from '../AutocompleteConnected';

describe('Autocomplete', () => {
    describe('<AutocompleteConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let autocomplete: ReactWrapper<IAutocompleteProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'autocomplete-connected';

        const mountAutocomplete = (items: IItemBoxProps[] = [], otherProps: Partial<IAutocompleteProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <AutocompleteConnected id={id} items={items} {...otherProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            autocomplete = wrapper.find(AutocompleteConnected).first();
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
                expect(() => mountAutocomplete()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountAutocomplete();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the autocomplete to the state when mounted', () => {
                expect(store.getState().autocompletes.length).toBe(0);

                mountAutocomplete();

                expect(store.getState().autocompletes.length).toBe(1);
            });

            it('should remove the autocomplete from the state when the component unmount', () => {
                mountAutocomplete();

                expect(store.getState().autocompletes.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().autocompletes.length).toBe(0);
            });
        });

        it('should contains a the selected value', () => {
            const selectedValue = 'dis 1';
            mountAutocomplete([
                {value: 'a'},
                {value: selectedValue, selected: true},
            ]);

            expect(autocomplete.html()).toContain(selectedValue);
        });

        it('should contains the display value when the selected value has one', () => {
            const selectedDisplayValue = 'dis 2';
            mountAutocomplete([
                {value: 'a'},
                {value: 'dis 1', displayValue: selectedDisplayValue, selected: true},
            ]);

            expect(autocomplete.html()).toContain(selectedDisplayValue);
        });

        it('should contains the selected item as a prop', () => {
            const selectedValue = 'dis 1';
            mountAutocomplete([
                {value: 'a'},
                {value: selectedValue, selected: true},
            ]);

            const value: string = autocomplete.find('input').prop<string>('value');
            expect(value).toBe(selectedValue);
        });

        it('should open the autocomplete when the user focus on the input', () => {
            mountAutocomplete();

            expect(store.getState().autocompletes[0].open).toBe(false);

            autocomplete.find('input').simulate('focus');
            expect(store.getState().autocompletes[0].open).toBe(true);
        });

        it('should filter the visible values with custom function', () => {
            const spy = jasmine.createSpy('matchFilter').and.callFake(() => false);
            mountAutocomplete([{value: 'a'}, {value: 'b'}], {
                // Take the value twice and make it uppercase
                matchFilter: spy,
            });

            autocomplete.find('input')
                .simulate('focus')
                .simulate('change', {target: {value: 'anything'}});

            expect(spy).toHaveBeenCalled();
        });

        describe('keyboard events', () => {
            it('should not throw on keydown in the autocomplete', () => {
                mountAutocomplete();

                const el = autocomplete.find('input');
                _.each(keyCode, (code) => {
                    expect(() => el.simulate('keydown', {keyCode: code})).not.toThrow();
                });
            });

            it('should change the value when the user types in the input', () => {
                const expectedValue = 'blou blou';
                mountAutocomplete();

                autocomplete.find('input').simulate('change', {target: {value: expectedValue}});
                expect(store.getState().autocompletes[0].value).toBe(expectedValue);
            });

            it('should open the autocomplete when the user press enter on the input', () => {
                mountAutocomplete();

                expect(store.getState().autocompletes[0].open).toBe(false);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().autocompletes[0].open).toBe(true);
            });

            it('should close the autocomplete when the user press escape on the input and the autocomplete is open', () => {
                mountAutocomplete();

                expect(store.getState().autocompletes[0].open).toBe(false);
                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});
                expect(store.getState().autocompletes[0].open).toBe(false);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().autocompletes[0].open).toBe(true);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});
                expect(store.getState().autocompletes[0].open).toBe(false);
            });

            it('should open the autocomplete when the user press down arrow or up arrow the input', () => {
                mountAutocomplete();

                expect(store.getState().autocompletes[0].open).toBe(false);
                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow});
                expect(store.getState().autocompletes[0].open).toBe(true);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.escape});
                expect(store.getState().autocompletes[0].open).toBe(false);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.upArrow});
                expect(store.getState().autocompletes[0].open).toBe(true);
            });

            it('should change the value when the user press enter and a value is active', () => {
                const expectedValue = 'b';
                mountAutocomplete([
                    {value: 'a'},
                    {value: expectedValue},
                    {value: 'c'},
                ]);

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow}); // select a
                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.downArrow}); // select expectedValue
                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});

                expect(store.getState().autocompletes[0].value).toBe(expectedValue);
            });

            it('should not change the value if no item is active', () => {
                mountAutocomplete([
                    {value: 'a'},
                    {value: 'b'},
                    {value: 'c'},
                ]);

                expect(autocomplete.prop('active')).toBeUndefined();
                autocomplete.find('input').simulate('focus').simulate('keyup', {keyCode: keyCode.enter});

                expect(autocomplete.prop('active')).toBeUndefined();
                expect(store.getState().autocompletes[0].value).toBe('');
            });
        });

        describe('click handler', () => {
            beforeEach(() => {
                const otherElement: HTMLDivElement = document.createElement('div');
                otherElement.setAttribute('id', 'other');
                document.body.appendChild(otherElement);
            });

            afterEach(() => document.getElementById('other').remove());

            const clickOnEl = (el: Element = document.getElementById('other')) => {
                const evt = new MouseEvent('mousedown', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: 20,
                });
                el.dispatchEvent(evt);
            };

            it('should close the autocomplete when the user click outside the autocomplete and the autocomplete is open', () => {
                mountAutocomplete();

                autocomplete.find('input').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().autocompletes[0].open).toBe(true, '1');

                clickOnEl(autocomplete.find('.autocomplete-list-container').getDOMNode());
                expect(store.getState().autocompletes[0].open).toBe(true, '2');

                clickOnEl();
                expect(store.getState().autocompletes[0].open).toBe(false, '3');
            });

            it('should not open the autocomplete when the user click outside the autocomplete', () => {
                mountAutocomplete();

                expect(store.getState().autocompletes[0].open).toBe(false);

                clickOnEl();
                expect(store.getState().autocompletes[0].open).toBe(false);
            });
        });
    });
});
