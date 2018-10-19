import {IReactVaporState} from '../../../ReactVapor';
import {defaultMatchFilter} from '../../../utils/FilterUtils';
import {IFilterState} from '../../filterBox/FilterBoxReducers';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {
    customItemsCombiner,
    getFilterText,
    getItems,
    getListBox,
    getListState,
    getMatchFilter,
    itemsWithFilterCombiner, listBoxSelectedCombiner,
    MatchFilter,
} from '../SelectSelector';
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

        describe('getFilterText', () => {
            it('should return an empty filterText if it is not in the state', () => {
                expect(getFilterText(defaultState, defaultOwnProps)).toEqual('');
            });

            it('should return the filterText in the state if the id is in the state', () => {
                const filter: IFilterState = {id, filterText: 'text'};
                expect(getFilterText({filters: [filter]}, defaultOwnProps)).toEqual(filter.filterText);
            });
        });

        describe('getListState', () => {
            it('should return an empty list if the selectWithFilter is not in the state', () => {
                expect(getListState(defaultState, defaultOwnProps)).toEqual([]);
            });

            it('should return the current list in the state if the id is in the state', () => {
                expect(getListState({selectWithFilter: {[id]: {id, list}}}, defaultOwnProps)).toEqual(list);
            });
        });

        describe('getListBox', () => {
            it('should return an empty listBox object if it is not in the state', () => {
                expect(getListBox(defaultState, defaultOwnProps)).toEqual({});
            });

            it('should return the current object in the state if the id is in the state', () => {
                const listBox: IListBoxState = {id, selected: list};
                expect(getListBox({listBoxes: [listBox]}, defaultOwnProps)).toEqual(listBox);
            });
        });

        describe('getItems', () => {
            it('should return an empty items list if it is not in the ownProps', () => {
                expect(getItems(defaultState, defaultOwnProps)).toEqual([]);
            });

            it('should return the filterText in the state if the id is in the state', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                expect(getItems(defaultState, {id, items})).toEqual(items);
            });
        });

        describe('getMatchFilter', () => {
            it('should return the defaultMatchFilter if the matchFilter is not defined in the ownProps', () => {
                expect(getMatchFilter(defaultState, defaultOwnProps)).toEqual(defaultMatchFilter);
            });

            it('should return the matchFilter if it is defined in the ownProps', () => {
                const matchFilter: MatchFilter = () => true;
                expect(getMatchFilter(defaultState, {id, matchFilter})).toEqual(matchFilter);
            });
        });

        describe('Combiner', () => {
            describe('itemsWithFilterCombiner', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                const filterText: string = 'b';
                const matchFilter: MatchFilter = () => true;

                it('should return an empty array if the items is already empty', () => {
                    expect(itemsWithFilterCombiner([], filterText, matchFilter)).toEqual([]);
                });

                it('should return items with hidden false if match filter return true', () => {
                    expect(itemsWithFilterCombiner(items, filterText, matchFilter)).toEqual([{value: 'a', hidden: false}]);
                });

                it('should return items with hidden true if match filter return false', () => {
                    const matchFilterFalse: MatchFilter = () => false;
                    expect(itemsWithFilterCombiner(items, filterText, matchFilterFalse)).toEqual([{value: 'a', hidden: true}]);
                });
            });

            describe('customItemsCombiner', () => {
                const items: IItemBoxProps[] = [{value: 'a'}];
                const listState: string[] = ['b'];

                const itemsResult: IItemBoxProps[] = [{value: 'b', hidden: true, selected: true}];

                it('should return new items list with the value in the listState if items is empty', () => {
                    expect(customItemsCombiner([], listState)).toEqual(itemsResult);
                });

                it('should return new items list from the listState value with all values in items removed', () => {
                    expect(customItemsCombiner(items, [...listState, 'a'])).toEqual(itemsResult);
                });
            });

            describe('listBoxSelectedCombiner', () => {
                const listBox: IListBoxState = {id, selected: list};

                it('should return an empty array if selected is not defined in the listBox', () => {
                    expect(listBoxSelectedCombiner({id, selected: undefined})).toEqual([]);
                });

                it('should return the list of selected in the listBox', () => {
                    expect(listBoxSelectedCombiner(listBox)).toEqual(list);
                });
            });
        });
    });
});
