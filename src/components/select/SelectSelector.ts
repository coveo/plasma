import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {convertStringListToItemsBox} from '../../reusableState/customList/StringListReducers';
import {defaultMatchFilter} from '../../utils/FilterUtils';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {ISelectProps} from './SelectConnected';
import {ISelectState, selectInitialState} from './SelectReducers';
import {ISelectWithFilterProps} from './SelectWithFilter';

export type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;

const getFilterText = (state: IReactVaporState, ownProps: ISelectWithFilterProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: ownProps.id});
    return (filter && filter.filterText) || '';
};

const getListState = (state: IReactVaporState, ownProps: ISelectProps): string[] =>
    state.selectWithFilter && state.selectWithFilter[ownProps.id] ? state.selectWithFilter[ownProps.id].list : [];

const getListBox = (state: IReactVaporState, ownProps: ISelectProps): Partial<IListBoxState> => _.findWhere(state.listBoxes, {id: ownProps.id}) || {};

const getSelect = (state: IReactVaporState, ownProps: ISelectProps): ISelectState => {
    const select: ISelectState = _.findWhere(state.selects, {id: ownProps.id});
    return select || selectInitialState;
};

const getItems = (state: IReactVaporState, ownProps: ISelectProps): IItemBoxProps[] => ownProps.items || [];

const getMatchFilter = (state: IReactVaporState, ownProps: ISelectWithFilterProps): MatchFilter => _.isUndefined(ownProps.matchFilter)
    ? defaultMatchFilter
    : ownProps.matchFilter;

const itemsWithFilterCombiner = (
    items: IItemBoxProps[],
    filterText: string,
    matchFilter: MatchFilter,
): IItemBoxProps[] => _.map(items, (item: IItemBoxProps) => ({...item, hidden: !matchFilter(filterText, item) || !!item.hidden}));

const getItemsWithFilter: (state: IReactVaporState, ownProps: ISelectWithFilterProps) => IItemBoxProps[] = createSelector(
    [getItems, getFilterText, getMatchFilter],
    itemsWithFilterCombiner,
);

const customItemsCombiner = (
    items: IItemBoxProps[],
    listState: string[],
): IItemBoxProps[] => {
    const valueToRemove: string[] = _.map(items, (item: IItemBoxProps) => item.value);
    return convertStringListToItemsBox(_.difference(listState, valueToRemove), {hidden: true, selected: true});
};

const getCustomItems: (state: IReactVaporState, ownProps: ISelectWithFilterProps) => IItemBoxProps[] = createSelector(
    [getItems, getListState],
    customItemsCombiner,
);

const listBoxSelectedCombiner = (
    listBox: IListBoxState,
): string[] => listBox && listBox.selected ? listBox.selected : [];

const getListBoxSelected: (state: IReactVaporState, ownProps: ISelectProps) => string[] = createSelector(
    getListBox,
    listBoxSelectedCombiner,
);

const getListBoxActive: (state: IReactVaporState, ownProps: ISelectProps) => number = createSelector(
    getListBox,
    (listBox: IListBoxState) => listBox.active,
);

const getSelectOpened: (state: IReactVaporState, ownProps: ISelectProps) => boolean = createSelector(
    getSelect,
    (select: ISelectState) => select.open,
);

export const SelectSelector = {
    getFilterText,
    getListState,
    getListBox,
    getItems,
    getMatchFilter,
    itemsWithFilterCombiner,
    getItemsWithFilter,
    customItemsCombiner,
    getCustomItems,
    listBoxSelectedCombiner,
    getListBoxSelected,
    getListBoxActive,
    getSelectOpened,
};
