import * as React from 'react';
import * as _ from 'underscore';

import {IMultiSelectOwnProps, MultiSelectConnected} from '../MultiSelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';
import {ISelectWithFilterOwnProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from './SelectWithPredicate';

// Single Select
export const SingleSelectWithFilter = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentType<ISingleSelectOwnProps &
    ISelectWithFilterOwnProps &
    ISelectWithPredicateOwnProps> = _.compose(selectWithPredicate, selectWithFilter)(SingleSelectConnected);

// Multi Select
export const MultiSelectWithFilter: React.ComponentType<ISelectWithFilterOwnProps &
    IMultiSelectOwnProps> = selectWithFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentType<IMultiSelectOwnProps &
    ISelectWithPredicateOwnProps> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentType<IMultiSelectOwnProps &
    ISelectWithFilterOwnProps &
    ISelectWithPredicateOwnProps> = _.compose(selectWithPredicate, selectWithFilter)(MultiSelectConnected);
