import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {filterThrough} from '../../filterBox/FilterBoxActions';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {IMultiSelectProps} from '../MultiSelectConnected';
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
            wrapper.unmount();
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

        it('should hide items when they do not match the filter', () => {
            const items = [
                {value: 'a'},
                {value: 'b', selected: true},
                {value: 'c'},
            ];

            mountSingleSelect(items);
            store.dispatch(filterThrough(id, 'wontmatchanything'));

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
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            store.dispatch(filterThrough(id, ''));

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
            store.dispatch(filterThrough(id, 'wontmatchanything'));

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect.find(SelectConnected).props().items
                .every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });
    });
});
