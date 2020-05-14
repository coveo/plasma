import {mount, ReactWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {keyCode} from '../../../utils/InputUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {clearListBoxOption} from '../../listBox/ListBoxActions';
import {SelectConnected} from '../SelectConnected';
import {SelectSelector} from '../SelectSelector';
import {ISingleSelectOwnProps, ISingleSelectProps, SingleSelectConnected} from '../SingleSelectConnected';

describe('Select', () => {
    describe('<SingleSelectConnected />', () => {
        let singleSelect: ReactWrapper<ISingleSelectProps>;
        let select: ReactWrapper<ISingleSelectOwnProps>;
        let store: Store<IReactVaporState>;

        const id: string = 'list-box-connected';

        const mountSingleSelect = (
            items: IItemBoxProps[] = [],
            props: Partial<ISingleSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = {}
        ) => {
            singleSelect = mount(<SingleSelectConnected id={id} items={items} {...props} />, {
                attachTo: document.getElementById('App'),
                context: {store},
            });
            select = singleSelect.find(SelectConnected).first();
        };

        const getIsOpen = () => SelectSelector.getSelectOpened(store.getState(), {id});

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            singleSelect.detach();
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountSingleSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountSingleSelect();
                expect(() => singleSelect.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
                singleSelect.unmount();

                expect(store.getState().selects.length).toBe(0);
            });
        });

        it('should allow a custom placeholder', () => {
            const expectedPlaceholder = 'select thingy';

            mountSingleSelect([{value: 'a'}, {value: 'b'}], {placeholder: expectedPlaceholder});

            expect(select.html()).toContain(expectedPlaceholder);
        });

        it('should contain the selected value', () => {
            const selectedValue = 'dis 1';
            mountSingleSelect([{value: 'a'}, {value: selectedValue, selected: true}]);

            expect(select.html()).toContain(selectedValue);
        });

        it('should contain the display value when the selected value has one', () => {
            const selectedDisplayValue = 'dis 2';
            mountSingleSelect([{value: 'a'}, {value: 'dis 1', displayValue: selectedDisplayValue, selected: true}]);

            expect(select.html()).toContain(selectedDisplayValue);
        });

        it('should contain the selected item as a prop', () => {
            const selectedValue = 'dis 1';
            mountSingleSelect([{value: 'a'}, {value: selectedValue, selected: true}]);

            const value: string = select.find('.dropdown-selected-value').prop<string>('data-value');
            expect(value).toBe(selectedValue);
        });

        it('should set the toggleClasses prop if any on the dropdown-toggle', () => {
            mountSingleSelect([], {
                toggleClasses: 'some-class',
            });

            expect(select.find('.dropdown-toggle').hasClass('some-class')).toBe(true);
        });

        it('should disable the toggle button when disabled prop is set to true', () => {
            mountSingleSelect([], {
                disabled: true,
            } as any);

            expect(select.find('.dropdown-toggle').is('[disabled]')).toBe(true);
        });

        it('should contain the toggle prepend in the toggle (button) if defined', () => {
            const expectedPrepend = <span>{'some prepended text'}</span>;
            mountSingleSelect([], {buttonPrepend: expectedPrepend});

            expect(
                select
                    .find('.dropdown-toggle')
                    .children()
                    .first()
                    .equals(expectedPrepend)
            ).toBe(true);
        });

        it('should contain the prepend and append in the button when selected', () => {
            const prepend = 'pre';
            const append = 'post';
            mountSingleSelect([
                {value: 'a', selected: true, prepend: {content: prepend}, append: {content: append}},
                {value: 'b', selected: false},
            ]);
            const buttonHTML = select.find('.dropdown-toggle').html();

            expect(buttonHTML).toContain(prepend);
            expect(buttonHTML).toContain(append);
        });

        it('should have a clear icon when a value selected and canClear is true', () => {
            mountSingleSelect([{value: 'a', selected: true}], {canClear: true});

            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(true);
            expect(select.find('.btn-append').exists()).toBe(true);
        });

        it('should not have a clear icon when a value selected and canClear is undefined', () => {
            mountSingleSelect([{value: 'a', selected: true}]);

            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);
            expect(select.find('.btn-append').exists()).toBe(false);
        });

        it('should not have a clear icon when no value is selected and canClear is true', () => {
            mountSingleSelect([{value: 'a', selected: false}], {canClear: true});

            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);
            expect(select.find('.btn-append').exists()).toBe(false);
        });

        it('should not have a clear icon when disabled is true even if canClear is true', () => {
            mountSingleSelect([{value: 'a', selected: false}], {canClear: true, disabled: true});

            expect(select.find('.dropdown-toggle').hasClass('mod-append')).toBe(false);
            expect(select.find('.btn-append').exists()).toBe(false);
        });

        it('should clear the selected value when the deselect is clicked', () => {
            const spy = spyOn(store, 'dispatch').and.callThrough();
            mountSingleSelect([{value: 'a', selected: true}], {canClear: true});

            select
                .find('.btn-append')
                .first()
                .simulate('click');
            expect(spy).toHaveBeenCalledWith(clearListBoxOption(id));
        });

        it('should display the selectedDisplayValue if defined in the button for the selected item', () => {
            const selectedDisplayValue = 'Another selected value bites the dust';
            mountSingleSelect([
                {value: 'a', selected: true, selectedDisplayValue},
                {value: 'b', selected: false},
            ]);
            const buttonHTML = select.find('.dropdown-toggle').html();

            expect(buttonHTML).toContain(selectedDisplayValue);
        });

        it('should not contain the prepend and append in the button when not selected', () => {
            const prepend = 'pre';
            const append = 'post';
            mountSingleSelect([
                {value: 'a', selected: false, prepend: {content: 'pre'}, append: {content: 'post'}},
                {value: 'b', selected: true},
            ]);

            const buttonHTML = select.find('.dropdown-toggle').html();

            expect(buttonHTML).not.toContain(prepend);
            expect(buttonHTML).not.toContain(append);
        });

        it('should call with the selected option the onSelectOptionCallback prop when defined', () => {
            const onSelectOptionCallbackSpy = jasmine.createSpy('onSelectOptionCallback');

            mountSingleSelect([{value: 'a'}, {value: 'b'}], {onSelectOptionCallback: onSelectOptionCallbackSpy});

            select.find('.dropdown-toggle').simulate('click');
            select
                .find('.item-box')
                .first()
                .simulate('click');

            expect(onSelectOptionCallbackSpy).toHaveBeenCalledWith('a');
        });

        describe('keyboard events', () => {
            it('should not throw on keydown in the dropdown', () => {
                mountSingleSelect();

                const el = select.find('.dropdown-toggle');
                _.each(keyCode, (code) => {
                    expect(() => el.simulate('keydown', {keyCode: code})).not.toThrow();
                });
            });

            it('should open the dropdown when the user press enter on the button', () => {
                mountSingleSelect();

                expect(getIsOpen()).toBe(false);

                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});
                expect(getIsOpen()).toBe(true);
            });

            it('should close the dropdown when the user press escape on the button and the dropdown is open', () => {
                mountSingleSelect();

                expect(getIsOpen()).toBe(false, 0);
                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});
                expect(getIsOpen()).toBe(false, 1);

                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.enter});
                expect(getIsOpen()).toBe(true, 2);

                select.find('.dropdown-toggle').simulate('keyup', {keyCode: keyCode.escape});
                expect(getIsOpen()).toBe(false, 3);
            });
        });

        describe('footer props', () => {
            it('should pass the footer prop to <SelectConnected/>', () => {
                const footer: React.ReactElement = <span id="some-footer"> 👢 </span>;
                const mountedSingleSelect = mount(
                    <SingleSelectConnected id={id} items={[{value: 'a', selected: false}]} footer={footer} />,
                    {
                        attachTo: document.getElementById('App'),
                        context: {store},
                    }
                );
                expect(mountedSingleSelect.find('#some-footer').matchesElement(footer)).toBeTruthy();
                mountedSingleSelect.unmount();
            });
        });

        it('should render the custom button prop content as toggle if it is specified', () => {
            const CustomButton = () => <span>🍄🍄🍄🍄🍄🍄</span>;
            const component = shallowWithState(
                <SingleSelectConnected id={id} items={[{value: 'a', selected: false}]} customButton={CustomButton} />,
                {}
            ).dive();
            expect(component.prop('button')).toBe(CustomButton);
        });
    });
});
