import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {FilterUtils} from '../../utils/FilterUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IFilterState} from './FilterBoxReducers';

export interface GetFilterTextProps {
    id: string;
}

export type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;

export const defaultListBoxMatchFilter = (filterValue: string, item: IItemBoxProps) => {
    const valueMatchesFilter = FilterUtils.matchesString(filterValue, item.value);
    const displayValueMatchesFilter = FilterUtils.matchesReactNode(filterValue, item.displayValue);
    return valueMatchesFilter || displayValueMatchesFilter;
};

const getFilterText = (state: IReactVaporState, props: GetFilterTextProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: props.id});
    return (filter && filter.filterText) || '';
};

export interface GetMatchFilterTextProps {
    matchFilter?: MatchFilter;
}
const getMatchFilter = (state: IReactVaporState, props: GetMatchFilterTextProps): MatchFilter => {
    return _.isUndefined(props.matchFilter) ? defaultListBoxMatchFilter : props.matchFilter;
};

export const FilterBoxSelectors = {
    getFilterText,
    getMatchFilter,
};
