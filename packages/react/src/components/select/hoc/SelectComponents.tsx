import {PropsWithChildren, ComponentType} from 'react';
import * as _ from 'underscore';

import {IMultiSelectOwnProps, MultiSelectConnected} from '../MultiSelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';
import {ISelectWithFilterOwnProps, selectWithFilter} from './SelectWithFilter';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from './SelectWithPredicate';

// Single Select

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithFilter: ComponentType<
    PropsWithChildren<ISelectWithFilterOwnProps & ISingleSelectOwnProps>
> = selectWithFilter(SingleSelectConnected);

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithPredicate: ComponentType<
    PropsWithChildren<ISelectWithPredicateOwnProps & ISingleSelectOwnProps>
> = selectWithPredicate(SingleSelectConnected);

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectWithPredicateAndFilter: ComponentType<
    PropsWithChildren<ISingleSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps>
> = _.compose(selectWithPredicate, selectWithFilter)(SingleSelectConnected);

// Multi Select

/**
 * @deprecated Use Mantine MultiSelect instead: https://mantine.dev/core/multi-select/
 */
export const MultiSelectWithFilter: ComponentType<PropsWithChildren<ISelectWithFilterOwnProps & IMultiSelectOwnProps>> =
    selectWithFilter(MultiSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicate: ComponentType<
    PropsWithChildren<IMultiSelectOwnProps & ISelectWithPredicateOwnProps>
> = selectWithPredicate(MultiSelectConnected);

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectWithPredicateAndFilter: ComponentType<
    PropsWithChildren<IMultiSelectOwnProps & ISelectWithFilterOwnProps & ISelectWithPredicateOwnProps>
> = _.compose(selectWithPredicate, selectWithFilter)(MultiSelectConnected);
