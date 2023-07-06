import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IFilterState} from './FilterBoxReducers';
import {defaultListBoxMatchFilter, MatchFilter} from './FilterBoxUtils';

export interface GetFilterTextProps {
    id: string;
}

const getFilterText = (state: PlasmaState, props: GetFilterTextProps): string => {
    const filter: IFilterState = _.findWhere(state.filters, {id: props.id});
    return (filter && filter.filterText.trim()) || '';
};

export interface GetMatchFilterTextProps {
    matchFilter?: MatchFilter;
}
const getMatchFilter = (state: PlasmaState, props: GetMatchFilterTextProps): MatchFilter =>
    _.isUndefined(props.matchFilter) ? defaultListBoxMatchFilter : props.matchFilter;

export const FilterBoxSelectors = {
    getFilterText,
    getMatchFilter,
};
