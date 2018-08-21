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
import {SelectConnected} from '../SelectConnected';
import {ISingleSelectProps, SingleSelectConnected} from '../SingleSelectConnected';

describe('Select', () => {
    describe('<SingleSelectConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let singleSelect: ReactWrapper<ISingleSelectProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'list-box-connected';

        const mountSingleSelect = (items: IItemBoxProps[] = [], props: Partial<ISingleSelectProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <SingleSelectConnected id={id} items={items} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            singleSelect = wrapper.find(SelectConnected).first();
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
                expect(() => mountSingleSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountSingleSelect();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });
        });

        it('should allow a custom placeholder', () => {
            const expectedPlaceholder = 'select thingy';

            mountSingleSelect([
                {value: 'a'},
                {value: 'b'},
            ], {placeholder: expectedPlaceholder});

            expect(singleSelect.html()).toContain(expectedPlaceholder);
        });

        it('should contain the selected value', () => {
            const selectedValue = 'dis 1';
            mountSingleSelect([
                {value: 'a'},
                {value: selectedValue, selected: true},
            ]);

            expect(singleSelect.html()).toContain(selectedValue);
        });

        it('should contain the display value when the selected value has one', () => {
            const selectedDisplayValue = 'dis 2';
            mountSingleSelect([
                {value: 'a'},
                {value: 'dis 1', displayValue: selectedDisplayValue, selected: true},
            ]);

            expect(singleSelect.html()).toContain(selectedDisplayValue);
        });

        it('should contain the selected item as a prop', () => {
            const selectedValue = 'dis 1';
            mountSingleSelect([
                {value: 'a'},
                {value: selectedValue, selected: true},
            ]);

            const value: string = singleSelect.find('.dropdown-selected-value').prop<string>('data-value');
            expect(value).toBe(selectedValue);
        });

        it('should set the toggleClasses prop if any on the dropdown-toggle', () => {
            mountSingleSelect([], {
                toggleClasses: 'some-class',
            });

            expect(singleSelect.find('.dropdown-toggle').hasClass('some-class')).toBe(true);
        });

        it('should disable the toggle button when disabled prop is set to true', () => {
            mountSingleSelect([], {
                disabled: true,
            } as any);

            expect(singleSelect.find('.dropdown-toggle').is('[disabled]')).toBe(true);
        });

        it('should contain the prepend and append in the button when selected', () => {
            const prepend = 'pre';
            const append = 'post';
            mountSingleSelect([
                {value: 'a', selected: true, prepend: {content: prepend}, append: {content: append}},
                {value: 'b', selected: false},
            ]);
            const buttonHTML = singleSelect.find('.dropdown-toggle').html();

            expect(buttonHTML).toContain(prepend);
            expect(buttonHTML).toContain(append);
        });

        it('should not contain the prepend and append in the button when not selected', () => {
            const prepend = 'pre';
            const append = 'post';
            mountSingleSelect([
                {value: 'a', selected: false, prepend: {content: 'pre'}, append: {content: 'post'}},
                {value: 'b', selected: true},
            ]);

            const buttonHTML = singleSelect.find('.dropdown-toggle').html();

            expect(buttonHTML).not.toContain(prepend);
            expect(buttonHTML).not.toContain(append);
        });

        it('should call with the selected option the onSelectOptionCallback prop when defined', () => {
            const onSelectOptionCallbackSpy = jasmine.createSpy('onSelectOptionCallback');

            mountSingleSelect([{value: 'a'}, {value: 'b'}], {onSelectOptionCallback: onSelectOptionCallbackSpy});

            singleSelect.find('.dropdown-toggle').simulate('click');
            singleSelect.find('.item-box').first().simulate('click');

            expect(onSelectOptionCallbackSpy).toHaveBeenCalledWith('a');
        });

        describe('keyboard events', () => {
            it('should not throw on keydown in the dropdown', () => {
                mountSingleSelect();

                const el = singleSelect.find('.dropdown-toggle');
                _.each(keyCode, (code) => {
                    expect(() => el.simulate('keydown', {keyCode: code})).not.toThrow();
                });
            });

            it('should open the dropdown when the user press enter on the button', () => {
                mountSingleSelect();

                expect(store.getState().selects[0].open).toBe(false);

                singleSelect.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().selects[0].open).toBe(true);
            });

            it('should close the dropdown when the user press escape on the button and the dropdown is open', () => {
                mountSingleSelect();

                expect(store.getState().selects[0].open).toBe(false);
                singleSelect.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});
                expect(store.getState().selects[0].open).toBe(false);

                singleSelect.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().selects[0].open).toBe(true);

                singleSelect.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});
                expect(store.getState().selects[0].open).toBe(false);
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

            it('should close the dropdown when the user click outside the dropdown and the dropdown is open', () => {
                mountSingleSelect();

                singleSelect.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});
                expect(store.getState().selects[0].open).toBe(true, '1');

                clickOnEl(singleSelect.find('.select-dropdown-container').getDOMNode());
                expect(store.getState().selects[0].open).toBe(true, '2');

                clickOnEl();
                expect(store.getState().selects[0].open).toBe(false, '3');
            });

            it('should not open the dropdown when the user click outside the dropdown', () => {
                mountSingleSelect();

                expect(store.getState().selects[0].open).toBe(false);

                clickOnEl();
                expect(store.getState().selects[0].open).toBe(false);
            });
        });
    });
});
