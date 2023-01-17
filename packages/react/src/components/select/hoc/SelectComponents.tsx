import {ComponentType} from 'react';
import * as _ from 'underscore';

import {IMultiSelectOwnProps, MultiSelectConnected} from '../MultiSelectConnected.js';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected.js';
import {ISelectWithFilterOwnProps, selectWithFilter} from './SelectWithFilter.js';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from './SelectWithPredicate.js';

// Single Select

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithFilter: ComponentType<
    React.PropsWithChildren<ISelectWithFilterOwnProps & ISingleSelectOwnProps>
> = selectWithFilter(SingleSelectConnected);

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithPredicate: ComponentType<
    React.PropsWithChildren<ISelectWithPredicateOwnProps & ISingleSelectOwnProps>
> = selectWithPredicate(SingleSelectConnected);

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithPredicateAndFilter: ComponentType<
    React.PropsWithChildren<ISingleSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps>
> = _.compose(selectWithPredicate, selectWithFilter)(SingleSelectConnected);

// Multi Select

/**
 * @deprecated Use Mantine MultiSelect instead: https://mantine.dev/core/multi-select/
 */
export const MultiSelectWithFilter: ComponentType<
    React.PropsWithChildren<ISelectWithFilterOwnProps & IMultiSelectOwnProps>
> = selectWithFilter(MultiSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicate: ComponentType<
    React.PropsWithChildren<IMultiSelectOwnProps & ISelectWithPredicateOwnProps>
> = selectWithPredicate(MultiSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicateAndFilter: ComponentType<
    React.PropsWithChildren<IMultiSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps>
> = _.compose(selectWithPredicate, selectWithFilter)(MultiSelectConnected);
