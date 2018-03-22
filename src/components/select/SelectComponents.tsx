import * as React from 'react';
import {MultiSelectConnected} from './MultiSelectConnected';
import {ISelectWithFilterProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateProps, selectWithPredicate} from './SelectWithPredicate';
import {SingleSelectConnected} from './SingleSelectConnected';

export interface ISelectWithPredicateAndFilterProps extends ISelectWithFilterProps, ISelectWithPredicateProps {}

// Single Select
export const SingleSelectWithFilter: React.ComponentClass<ISelectWithFilterProps> = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps> = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps> = selectWithPredicate(selectWithFilter(SingleSelectConnected));

// Multi Select
export const MultiSelectWithFilter: React.ComponentClass<ISelectWithFilterProps> = selectWithFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps> = selectWithPredicate(selectWithFilter(MultiSelectConnected));
