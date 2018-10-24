import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {convertStringListToItemsBox} from '../../reusableState/customList/StringListReducers';
import {defaultMatchFilter} from '../../utils/FilterUtils';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {ISelectWithFilterProps} from './SelectWithFilter';

export type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;

export const getFilterText = (state: IReactVaporState, ownProps: ISelectWithFilterProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: ownProps.id});
    return (filter && filter.filterText) || '';
};

export const getListState = (state: IReactVaporState, ownProps: ISelectWithFilterProps): string[] =>
    state.selectWithFilter && state.selectWithFilter[ownProps.id] ? state.selectWithFilter[ownProps.id].list : [];

export const getListBox = (state: IReactVaporState, ownProps: ISelectWithFilterProps): Partial<IListBoxState> => _.findWhere(state.listBoxes, {id: ownProps.id}) || {};

export const getItems = (state: IReactVaporState, ownProps: ISelectWithFilterProps): IItemBoxProps[] => ownProps.items || [];

export const getMatchFilter = (state: IReactVaporState, ownProps: ISelectWithFilterProps): MatchFilter => _.isUndefined(ownProps.matchFilter)
    ? defaultMatchFilter
    : ownProps.matchFilter;

export const itemsWithFilterCombiner = (
    items: IItemBoxProps[],
    filterText: string,
    matchFilter: MatchFilter,
): IItemBoxProps[] => _.map(items, (item: IItemBoxProps) => ({...item, hidden: !matchFilter(filterText, item) || !!item.hidden}));

export const getItemsWithFilter = createSelector(
    [getItems, getFilterText, getMatchFilter],
    itemsWithFilterCombiner,
);

export const customItemsCombiner = (
    items: IItemBoxProps[],
    listState: string[],
): IItemBoxProps[] => {
    const valueToRemove: string[] = _.map(items, (item: IItemBoxProps) => item.value);
    return convertStringListToItemsBox(_.difference(listState, valueToRemove), {hidden: true, selected: true});
};

export const getCustomItems = createSelector(
    [getItems, getListState],
    customItemsCombiner,
);

export const listBoxSelectedCombiner = (
    listBox: IListBoxState,
): string[] => listBox && listBox.selected ? listBox.selected : [];

export const getListBoxSelected = createSelector(
    getListBox,
    listBoxSelectedCombiner,
);
