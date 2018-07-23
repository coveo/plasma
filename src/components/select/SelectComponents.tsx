import * as React from 'react';
import {IMultiSelectOwnProps, MultiSelectConnected} from './MultiSelectConnected';
import {ISelectWithFilterProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateProps, selectWithPredicate} from './SelectWithPredicate';
import {ISingleSelectOwnProps, SingleSelectConnected} from './SingleSelectConnected';

export interface ISelectWithPredicateAndFilterProps extends ISelectWithFilterProps, ISelectWithPredicateProps {}

// Single Select
export const SingleSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & ISingleSelectOwnProps> = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & ISingleSelectOwnProps> = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & ISingleSelectOwnProps> = selectWithPredicate(selectWithFilter(SingleSelectConnected));

// Multi Select
export const MultiSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & IMultiSelectOwnProps> = selectWithFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & IMultiSelectOwnProps> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & IMultiSelectOwnProps> = selectWithPredicate(selectWithFilter(MultiSelectConnected));
