import * as React from 'react';
import {IMultiSelectOwnProps, MultiSelectConnected} from './MultiSelectConnected';
import {ISelectWithPredicateProps, selectWithPredicate} from './SelectWithPredicate';
import {ISingleSelectOwnProps, SingleSelectConnected} from './SingleSelectConnected';
import {ISelectWithFilterProps, selectWithFilter} from './withFilter/SelectWithFilter';

export interface ISelectWithPredicateAndFilterProps extends ISelectWithFilterProps, ISelectWithPredicateProps {}

// Single Select
export const SingleSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & ISingleSelectOwnProps> = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & ISingleSelectOwnProps> = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & ISingleSelectOwnProps> = selectWithPredicate(selectWithFilter(SingleSelectConnected));

// Multi Select
export const MultiSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & IMultiSelectOwnProps> = selectWithFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & IMultiSelectOwnProps> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & IMultiSelectOwnProps> = selectWithPredicate(selectWithFilter(MultiSelectConnected));
