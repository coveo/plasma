import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {convertStringListToItemsBox} from '../../reusableState/customList/StringListReducers';
import {CherryPick} from '../../utils';
import {DropSelectors} from '../drop/redux/DropReducers';
import {FilterBoxSelectors} from '../filterBox/FilterBoxSelectors';
import {MatchFilter} from '../filterBox/FilterBoxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {ISelectWithFilterOwnProps} from './hoc/SelectWithFilter';
import {ISelectOwnProps, SelectConnected} from './SelectConnected';

const getListState = (state: IReactVaporState, {id}: CherryPick<ISelectOwnProps, 'id'>): string[] =>
    state?.selectWithFilter?.[id]?.list ?? [];

const getListBox = (state: IReactVaporState, {id}: CherryPick<ISelectOwnProps, 'id'>): Partial<IListBoxState> =>
    _.findWhere(state.listBoxes, {id}) || {};

const getItems = (state: IReactVaporState, {items}: CherryPick<ISelectOwnProps, 'items'>): IItemBoxProps[] =>
    items || [];

const itemsWithFilterCombiner = (
    items: IItemBoxProps[],
    filterText: string,
    matchFilter: MatchFilter
): IItemBoxProps[] =>
    _.map(items, (item: IItemBoxProps) => ({...item, hidden: !matchFilter(filterText, item) || !!item.hidden}));

const getItemsWithFilter = createSelector(
    getItems,
    (state: IReactVaporState, {id}: CherryPick<ISelectOwnProps, 'id'>) => FilterBoxSelectors.getFilterText(state, {id}),
    (state: IReactVaporState, {matchFilter}: Pick<ISelectWithFilterOwnProps, 'matchFilter'>) =>
        FilterBoxSelectors.getMatchFilter(state, {matchFilter}),
    itemsWithFilterCombiner
);

const customItemsCombiner = (items: IItemBoxProps[], listState: string[]): IItemBoxProps[] => {
    const valueToRemove: string[] = _.map(items, (item: IItemBoxProps) => item.value);
    return convertStringListToItemsBox(_.difference(listState, valueToRemove), {hidden: true, selected: true});
};

const getCustomItems = createSelector([getItems, getListState], customItemsCombiner);

const getCustomItemsWithFilter = createSelector(
    getItemsWithFilter,
    getCustomItems,
    (filteredItems: IItemBoxProps[], customItems: IItemBoxProps[]) => [...filteredItems, ...customItems]
);

const getServerFilteredItems = createSelector(
    getItems,
    getCustomItems,
    (serverSideProcessedItems, customValuesFiltered) => [...serverSideProcessedItems, ...customValuesFiltered]
);

const listBoxSelectedCombiner = (listBox: IListBoxState): string[] => listBox?.selected ?? [];

const getListBoxSelected = createSelector(getListBox, listBoxSelectedCombiner);

const getListBoxActive = createSelector(getListBox, (listBox: IListBoxState) => listBox.active);

const getSelectOpened = (state: IReactVaporState, {id}: CherryPick<ISelectOwnProps, 'id'>): boolean =>
    DropSelectors.isOpen(state, {id, groupId: SelectConnected.DropGroup});

const multiSelectSelectedValuesCombiner = (listBoxSelected: string[], listState: string[]): string[] =>
    _.uniq([...listBoxSelected, ...listState]);

const getMultiSelectSelectedValues = createSelector(
    getListBoxSelected,
    getListState,
    multiSelectSelectedValuesCombiner
);

export const SelectSelector = {
    getListState,
    getListBox,
    getItems,
    getListBoxSelected,
    getListBoxActive,
    getSelectOpened,
    getCustomItemsWithFilter,
    getMultiSelectSelectedValues,
    getServerFilteredItems,
};

export const SelectCombiners = {
    listBoxSelectedCombiner,
    customItemsCombiner,
    itemsWithFilterCombiner,
};
