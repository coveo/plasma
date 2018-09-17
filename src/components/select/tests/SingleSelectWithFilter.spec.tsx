import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {keyCode} from '../../../utils/InputUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {filterThrough} from '../../filterBox/FilterBoxActions';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {selectListBoxOption, setActiveListBoxOption} from '../../listBox/ListBoxActions';
import {IMultiSelectProps} from '../MultiSelectConnected';
import {toggleSelect} from '../SelectActions';
import {SingleSelectWithFilter} from '../SelectComponents';
import {SelectConnected} from '../SelectConnected';

describe('Select', () => {
    describe('<SingleSelectWithFilter/>', () => {
        let wrapper: ReactWrapper<any, any>;
        let singleSelect: ReactWrapper<IMultiSelectProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'single-select-with-filter';

        const mountSingleSelect = (items: IItemBoxProps[] = [], matchFilter: (filterValue: string, item: IItemBoxProps) => boolean = undefined) => {
            wrapper = mount(
                <Provider store={store}>
                    <SingleSelectWithFilter id={id} items={items} matchFilter={matchFilter} />
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

        beforeAll(() => {
            TestUtils.makeDebounceStatic();
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

        it('should hide items when they do not match the filter', () => {
            const items = [
                {value: 'a'},
                {value: 'b', selected: true},
                {value: 'c'},
            ];

            mountSingleSelect(items);
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect.find(SelectConnected).props().items
                .every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });

        it('should not show items that are already hidden', () => {
            const items = [
                {value: 'a', hidden: true},
                {value: 'b', selected: true},
                {value: 'c'},
            ];

            mountSingleSelect(items);
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            store.dispatch(filterThrough(id, ''));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            expect(singleSelect.find(SelectConnected).props().items[0].hidden).toBe(true);
            expect(singleSelect.find(SelectConnected).props().items[1].hidden).toBeUndefined();
            expect(singleSelect.find(SelectConnected).props().items[2].hidden).toBeUndefined();
        });

        it('should hide items that do not match custom filter', () => {
            const items = [
                {value: 'a'},
                {value: 'b', selected: true},
                {value: 'c'},
            ];

            mountSingleSelect(items, () => false);
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect.find(SelectConnected).props().items
                .every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });

        describe('interactions', () => {
            const items = [
                {value: 'a'},
                {value: 'b', selected: true},
                {value: 'c'},
            ];
            let dispatchSpy: jasmine.Spy;

            beforeEach(() => {
                dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
                mountSingleSelect(items);
            });

            it('should toggle the dropdown when the user mouseup on the dropdown-toggle', () => {
                expect(dispatchSpy).not.toHaveBeenCalledWith(toggleSelect(id));

                singleSelect.find('.dropdown-toggle').simulate('mouseup');

                expect(dispatchSpy).toHaveBeenCalledWith(toggleSelect(id));
            });

            it('should select the active element if the user press enter', () => {
                store.dispatch(toggleSelect(id, true));

                wrapper.find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.enter})
                    .simulate('keyup', {keyCode: keyCode.enter});

                expect(dispatchSpy).toHaveBeenCalledWith(selectListBoxOption(id, undefined, items[0].value));
            });

            it('should dispatch a setActiveListBoxOption when the user press the up or down arrow', () => {
                store.dispatch(toggleSelect(id, true));
                wrapper.update();

                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, 1));
                wrapper.find(FilterBoxConnected).find('input')
                    .simulate('keydown', {keyCode: keyCode.downArrow})
                    .simulate('keyup', {keyCode: keyCode.downArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, 1));

                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, -1));
                wrapper.find(FilterBoxConnected).find('input')
                    .simulate('keydown', {keyCode: keyCode.upArrow})
                    .simulate('keyup', {keyCode: keyCode.upArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, -1));
            });

            it('should dispatch a setActiveListBoxOption with 0 as the active parameter when the user press the up or down arrow but the dropdown is not open', () => {
                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, 0));
                singleSelect.find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.downArrow})
                    .simulate('keyup', {keyCode: keyCode.downArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, 0));

                // Close the dropdown
                store.dispatch(toggleSelect(id, false));
                dispatchSpy.calls.reset();

                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, 0));
                singleSelect.find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.upArrow})
                    .simulate('keyup', {keyCode: keyCode.upArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, 0));
            });
        });
    });
});
