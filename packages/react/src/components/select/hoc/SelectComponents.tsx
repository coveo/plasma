import {ComponentType} from 'react';
import * as _ from 'underscore';

import {IMultiSelectOwnProps, MultiSelectConnected} from '../MultiSelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';
import {ISelectWithFilterOwnProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from './SelectWithPredicate';

// Single Select

/**
 * @deprecated Use Mantine instead
 */
export const SingleSelectWithFilter: ComponentType<
    ISelectWithFilterOwnProps & ISingleSelectOwnProps
> = selectWithFilter(SingleSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const SingleSelectWithPredicate: ComponentType<
    ISelectWithPredicateOwnProps & ISingleSelectOwnProps
> = selectWithPredicate(SingleSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const SingleSelectWithPredicateAndFilter: ComponentType<
    ISingleSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps
> = _.compose(selectWithPredicate, selectWithFilter)(SingleSelectConnected);

// Multi Select

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithFilter: ComponentType<ISelectWithFilterOwnProps & IMultiSelectOwnProps> = selectWithFilter(
    MultiSelectConnected
);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicate: ComponentType<
    IMultiSelectOwnProps & ISelectWithPredicateOwnProps
> = selectWithPredicate(MultiSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicateAndFilter: ComponentType<
    IMultiSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps
> = _.compose(selectWithPredicate, selectWithFilter)(MultiSelectConnected);
