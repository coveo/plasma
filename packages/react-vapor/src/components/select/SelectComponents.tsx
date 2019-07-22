import * as React from 'react';
import * as _ from 'underscore';

import {ISelectWithFilterProps, withFilter} from './hoc/withFilter';
import {ISelectWithPredicateProps, withPredicate} from './hoc/withPredicate';
import {IMultiSelectOwnProps, MultiSelectConnected} from './MultiSelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from './SingleSelectConnected';

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ISelectWithPredicateAndFilterProps extends ISelectWithFilterProps, ISelectWithPredicateProps {}

// Single Select
export const SingleSelectWithFilter: React.ComponentType<
    ISelectWithFilterProps & ISingleSelectOwnProps & ButtonHTMLAttributes
> = withFilter(SingleSelectConnected);
export const SingleSelectWithPredicate: React.ComponentType<
    ISelectWithPredicateProps & ISingleSelectOwnProps & ButtonHTMLAttributes
> = withPredicate(SingleSelectConnected);
export const SingleSelectWithPredicateAndFilter: React.ComponentType<
    ISelectWithPredicateAndFilterProps & ISingleSelectOwnProps & ButtonHTMLAttributes
> = _.compose(
    withPredicate,
    withFilter
)(SingleSelectConnected);

// Multi Select
export const MultiSelectWithFilter: React.ComponentType<
    ISelectWithFilterProps & IMultiSelectOwnProps & ButtonHTMLAttributes
> = withFilter(MultiSelectConnected);
export const MultiSelectWithPredicate: React.ComponentType<
    ISelectWithPredicateProps & IMultiSelectOwnProps & ButtonHTMLAttributes
> = withPredicate(MultiSelectConnected);
export const MultiSelectWithPredicateAndFilter: React.ComponentType<
    ISelectWithPredicateAndFilterProps & IMultiSelectOwnProps & ButtonHTMLAttributes
> = _.compose(
    withPredicate,
    withFilter
)(MultiSelectConnected);
