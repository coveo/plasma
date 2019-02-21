import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {keyCode} from '../../../utils/InputUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Button} from '../../button/Button';
import {filterThrough} from '../../filterBox/FilterBoxActions';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {IItemBoxProps, ItemBox} from '../../itemBox/ItemBox';
import {selectListBoxOption, setActiveListBoxOption} from '../../listBox/ListBoxActions';
import {IMultiSelectProps} from '../MultiSelectConnected';
import {toggleSelect} from '../SelectActions';
import {SingleSelectWithFilter} from '../SelectComponents';
import {SelectConnected} from '../SelectConnected';
import {ISelectWithFilterProps} from '../SelectWithFilter';

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

            it('should add the string list to the state when mounted', () => {
                expect(store.getState().selectWithFilter[id]).toBeUndefined();

                mountSingleSelect();

                expect(store.getState().selectWithFilter[id]).toBeDefined();
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selectWithFilter[id]).toBeDefined();

                wrapper.unmount();

                expect(store.getState().selectWithFilter[id]).toBeUndefined();
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
            expect(singleSelect.find(SelectConnected).props().items[1].hidden).toBe(false);
            expect(singleSelect.find(SelectConnected).props().items[2].hidden).toBe(false);
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

        it('should set the highlight value equal to the filter', () => {
            const filterValue = 'a';
            const items = [
                {value: 'aaaa'},
                {value: 'baba', selected: true},
                {value: 'dada'},
            ];

            mountSingleSelect(items, () => true);
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, filterValue));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect.find(SelectConnected).props().items
                .every((item: IItemBoxProps) => expect(item.highlight).toBe(filterValue));
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

                expect(dispatchSpy).toHaveBeenCalledWith(selectListBoxOption(id, undefined, items[1].value));
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

        describe('With CustomValue Props', () => {
            const items = [
                {value: 'a'},
                {value: 'b', selected: true},
                {value: 'c'},
            ];

            const mountSingleSelectCustomValues = (newItems: IItemBoxProps[] = [], matchFilter: (filterValue: string, item: IItemBoxProps) => boolean = undefined, props: Partial<ISelectWithFilterProps> = {}) => {
                wrapper = mount(
                    <Provider store={store}>
                        <SingleSelectWithFilter id={id} items={newItems} matchFilter={matchFilter} customValues {...props} />
                    </Provider>,
                    {attachTo: document.getElementById('App')},
                );

                store.dispatch(toggleSelect(id, true));
                wrapper.update();
            };

            it('should not add a button with the filter if customValue is false', () => {
                mountSingleSelect(items, () => false);

                expect(wrapper.find(Button).length).toBe(0);
            });

            it('should add a button with the filter', () => {
                mountSingleSelectCustomValues(items, () => false);

                expect(wrapper.find(Button).length).toBe(1);
            });

            it('should not add the value in the store list on click button if the filter value is empty', () => {
                mountSingleSelectCustomValues(items, () => false);

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
                store.dispatch(filterThrough(id, ''));

                wrapper.find(SelectConnected)
                    .find(Button)
                    .find('button')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
            });

            it('should add the value in the store list on click button if the filterValue is not empty', () => {
                const filterValue: string = 'wontmatchanything';

                mountSingleSelectCustomValues(items, () => false);

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
                store.dispatch(filterThrough(id, filterValue));

                wrapper.find(SelectConnected)
                    .find(Button)
                    .find('button')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(1);
                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);
            });

            it('should add an itemBox with the filter value in the list if it is not already in the initial list', () => {
                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];
                const filterValue: string = 'a';

                mountSingleSelectCustomValues(complexItems);
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                const itemsBox = wrapper.find(SelectConnected)
                    .find(ItemBox)
                    .first();

                expect(itemsBox.props().value).toBe(filterValue);
            });

            it('should add an itemBox divider with the add itemBox in the list', () => {
                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];
                const filterValue: string = 'a';

                mountSingleSelectCustomValues(complexItems);
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                const itemsBox = wrapper.find(SelectConnected)
                    .find(ItemBox)
                    .get(1);

                expect(itemsBox.props.divider).toBe(true);
            });

            it('should add an itemBox with the filter value in the list on click list item', () => {
                const filterValue: string = 'a';

                mountSingleSelectCustomValues([]);
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                wrapper.find(SelectConnected)
                    .find(ItemBox)
                    .find('li')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(1);
                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);
            });
        });
    });
});
