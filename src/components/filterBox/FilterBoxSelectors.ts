import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {defaultMatchFilter, MatchFilter} from '../../utils/FilterUtils';
import {IFilterState} from './FilterBoxReducers';

export interface GetFilterTextProps {
    id?: string;
}

const getFilterText = (state: IReactVaporState, props: GetFilterTextProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: props.id});
    return (filter && filter.filterText) || '';
};

export interface GetMatchFilterTextProps {
    matchFilter?: MatchFilter;
}
const getMatchFilter = (state: IReactVaporState, props: GetMatchFilterTextProps): MatchFilter => {
    return _.isUndefined(props.matchFilter)
        ? defaultMatchFilter
        : props.matchFilter;
};

export const FilterBoxSelectors = {
    getFilterText,
    getMatchFilter,
};
