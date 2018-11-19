import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {MatchFilter} from '../../../utils/FilterUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {SelectCombiners, SelectSelector} from '../SelectSelector';
import {ISelectWithFilterProps} from '../SelectWithFilter';

describe('Select', () => {
    describe('Select Selector', () => {

        const id: string = 'a';
        const defaultState: IReactVaporState = {
            filters: [],
            selectWithFilter: {},
            listBoxes: [],
        };
        const defaultOwnProps: ISelectWithFilterProps = {id};
        const list: string[] = ['a', 'b'];

        describe('getListState', () => {
            it('should not throw when passing falsy values and return an empty array', () => {
                expect(SelectSelector.getListState({}, defaultOwnProps)).toEqual([]);
            });

            it('should return an empty list if the selectWithFilter is not in the state', () => {
                expect(SelectSelector.getListState(defaultState, defaultOwnProps)).toEqual([]);
            });

            it('should return the current list in the state if the id is in the state', () => {
                expect(SelectSelector.getListState({selectWithFilter: {[id]: {id, list}}}, defaultOwnProps)).toEqual(list);
            });
        });

        describe('getListBox', () => {
            it('should return an empty listBox object if it is not in the state', () => {
                expect(SelectSelector.getListBox(defaultState, defaultOwnProps)).toEqual({});
            });

            it('should return the current object in the state if the id is in the state', () => {
                const listBox: IListBoxState = {id, selected: list};
                expect(SelectSelector.getListBox({listBoxes: [listBox]}, defaultOwnProps)).toEqual(listBox);
            });
        });

        describe('getItems', () => {
            it('should return an empty items list if it is not in the ownProps', () => {
                expect(SelectSelector.getItems(defaultState, defaultOwnProps)).toEqual([]);
            });

            it('should return the filterText in the state if the id is in the state', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                expect(SelectSelector.getItems(defaultState, {id, items})).toEqual(items);
            });
        });

        describe('Combiner', () => {
            describe('itemsWithFilterCombiner', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                const filterText: string = 'b';
                const matchFilter: MatchFilter = () => true;

                it('should return an empty array if the items is already empty', () => {
                    expect(SelectCombiners.itemsWithFilterCombiner([], filterText, matchFilter)).toEqual([]);
                });

                it('should return items with hidden false if match filter return true', () => {
                    expect(SelectCombiners.itemsWithFilterCombiner(items, filterText, matchFilter)).toEqual([{value: 'a', hidden: false}]);
                });

                it('should return items with hidden true if match filter return false', () => {
                    const matchFilterFalse: MatchFilter = () => false;
                    expect(SelectCombiners.itemsWithFilterCombiner(items, filterText, matchFilterFalse)).toEqual([{value: 'a', hidden: true}]);
                });
            });

            describe('customItemsCombiner', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                const listState: string[] = ['b'];

                const itemsResult: IItemBoxProps[] = [{value: 'b', hidden: true, selected: true}];

                it('should return new items list with the value in the listState if items is empty', () => {
                    expect(SelectCombiners.customItemsCombiner([], listState)).toEqual(itemsResult);
                });

                it('should return new items list from the listState value with all values in items removed', () => {
                    expect(SelectCombiners.customItemsCombiner(items, [...listState, 'a'])).toEqual(itemsResult);
                });
            });

            describe('listBoxSelectedCombiner', () => {
                const listBox: IListBoxState = {id, selected: list};

                it('should return an empty array if selected is not defined in the listBox', () => {
                    expect(SelectCombiners.listBoxSelectedCombiner({id, selected: undefined})).toEqual([]);
                });

                it('should return the list of selected in the listBox', () => {
                    expect(SelectCombiners.listBoxSelectedCombiner(listBox)).toEqual(list);
                });
            });

            describe('multiSelectSelectedValuesCombiner', () => {
                const list1 = ['a', 'b'];
                const list2 = ['c', 'd'];
                const list3 = ['a', 'e'];

                it('should return a list with items from both list', () => {
                    const state = {
                        selectWithFilter: {[id]: {id, list: list1}},
                        listBoxes: [{id, selected: list2}],
                    };

                    const resultList = [...list1, ...list2];
                    expect(SelectSelector.getMultiSelectSelectedValues(state, {id}).length).toEqual(resultList.length);
                });

                it('should return a list with items from both list without duplicate', () => {
                    const state = {
                        selectWithFilter: {[id]: {id, list: list1}},
                        listBoxes: [{id, selected: list3}],
                    };

                    const resultList = _.uniq([...list1, ...list3]);
                    expect(SelectSelector.getMultiSelectSelectedValues(state, {id}).length).toEqual(resultList.length);
                });
            });
        });
    });
});
