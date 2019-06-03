import * as React from 'react';
import {IMultiSelectOwnProps, MultiSelectConnected} from './MultiSelectConnected';
import {ISelectWithFilterProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateProps, selectWithPredicate} from './SelectWithPredicate';
import {ISingleSelectOwnProps, SingleSelectConnected} from './SingleSelectConnected';

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ISelectWithPredicateAndFilterProps extends ISelectWithFilterProps, ISelectWithPredicateProps {}

// Single Select
export const SingleSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & ISingleSelectOwnProps & ButtonHTMLAttributes> = selectWithFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & ISingleSelectOwnProps & ButtonHTMLAttributes> = selectWithPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & ISingleSelectOwnProps & ButtonHTMLAttributes> = selectWithPredicate(selectWithFilter(SingleSelectConnected));

// Multi Select
export const MultiSelectWithFilter: React.ComponentClass<ISelectWithFilterProps & IMultiSelectOwnProps & ButtonHTMLAttributes> = selectWithFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentClass<ISelectWithPredicateProps & IMultiSelectOwnProps & ButtonHTMLAttributes> = selectWithPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentClass<ISelectWithPredicateAndFilterProps & IMultiSelectOwnProps & ButtonHTMLAttributes> = selectWithPredicate(selectWithFilter(MultiSelectConnected));
