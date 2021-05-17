import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {IFilterState} from './FilterBoxReducers';
import {defaultListBoxMatchFilter, MatchFilter} from './FilterBoxUtils';

export interface GetFilterTextProps {
    id: string;
}

const getFilterText = (state: IReactVaporState, props: GetFilterTextProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: props.id});
    return (filter && filter.filterText) || '';
};

export interface GetMatchFilterTextProps {
    matchFilter?: MatchFilter;
}
const getMatchFilter = (state: IReactVaporState, props: GetMatchFilterTextProps): MatchFilter =>
    _.isUndefined(props.matchFilter) ? defaultListBoxMatchFilter : props.matchFilter;

export const FilterBoxSelectors = {
    getFilterText,
    getMatchFilter,
};
