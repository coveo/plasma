import {ComponentType} from 'react';
import * as _ from 'underscore';

import {IMultiSelectOwnProps, MultiSelectConnected} from '../MultiSelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';
import {ISelectWithFilterOwnProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from './SelectWithPredicate';

// Single Select
export const SingleSelectWithFilter: ComponentType<
    ISelectWithFilterOwnProps & ISingleSelectOwnProps
> = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: ComponentType<
    ISelectWithPredicateOwnProps & ISingleSelectOwnProps
> = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: ComponentType<
    ISingleSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps
> = _.compose(selectWithPredicate, selectWithFilter)(SingleSelectConnected);

// Multi Select
export const MultiSelectWithFilter: ComponentType<ISelectWithFilterOwnProps & IMultiSelectOwnProps> = selectWithFilter(
    MultiSelectConnected
);
export const MultiSelectWithPredicate: ComponentType<
    IMultiSelectOwnProps & ISelectWithPredicateOwnProps
> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: ComponentType<
    IMultiSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps
> = _.compose(selectWithPredicate, selectWithFilter)(MultiSelectConnected);
