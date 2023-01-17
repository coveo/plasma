import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {convertStringListToItemsBox} from '../../reusableState/customList/StringListReducers.js';
import {CherryPick} from '../../utils/index.js';
import {DropSelectors} from '../drop/redux/DropReducers.js';
import {FilterBoxSelectors} from '../filterBox/FilterBoxSelectors.js';
import {MatchFilter} from '../filterBox/FilterBoxUtils.js';
import {IItemBoxProps} from '../itemBox/ItemBox.js';
import {IListBoxState} from '../listBox/ListBoxReducers.js';
import {ISelectWithFilterOwnProps} from './hoc/SelectWithFilter.js';
import {ISelectOwnProps} from './SelectConnected.js';
import {SelectConstants} from './SelectConstants.js';

const getListState = (state: PlasmaState, {id}: {id: string}): string[] => state?.selectWithFilter?.[id]?.list ?? [];

const getListBox = (state: PlasmaState, {id}: {id: string}): Partial<IListBoxState> =>
    _.findWhere(state.listBoxes, {id}) || {};

const getItems = (state: PlasmaState, {items}: {items: IItemBoxProps[]}): IItemBoxProps[] => items || [];

const itemsWithFilterCombiner = (
    items: IItemBoxProps[],
    filterText: string,
    matchFilter: MatchFilter
): IItemBoxProps[] =>
    _.map(items, (item: IItemBoxProps) => ({...item, hidden: !matchFilter(filterText, item) || !!item.hidden}));

const getItemsWithFilter = createSelector(
    getItems,
    (state: PlasmaState, {id}: CherryPick<ISelectOwnProps, 'id'>) => FilterBoxSelectors.getFilterText(state, {id}),
    (state: PlasmaState, {matchFilter}: Pick<ISelectWithFilterOwnProps, 'matchFilter'>) =>
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
const listBoxSelectedValueCombiner = (listBox: IListBoxState): string => _.first(listBox?.selected ?? []);

const getListBoxSelected = createSelector(getListBox, listBoxSelectedCombiner);

const getSelectedValue = createSelector(getListBox, listBoxSelectedValueCombiner);

const getListBoxActive = createSelector(getListBox, (listBox: IListBoxState) => listBox.active);

const getSelectOpened = (state: PlasmaState, {id}: CherryPick<ISelectOwnProps, 'id'>): boolean =>
    DropSelectors.isOpen(state, {id, groupId: SelectConstants.DropGroupId});

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
    getSelectedValue,
    getSelectedValues: getListBoxSelected,
};

export const SelectCombiners = {
    listBoxSelectedCombiner,
    customItemsCombiner,
    itemsWithFilterCombiner,
};
