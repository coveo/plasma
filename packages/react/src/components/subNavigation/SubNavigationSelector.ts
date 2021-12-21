import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {ISubNavigationState} from './SubNavigationReducers';

const getSubNavigation = (state: IReactVaporState, subNavigationId: string): ISubNavigationState =>
    _.findWhere(state.subNavigations, {id: subNavigationId});

const getSelectedItem = createSelector(getSubNavigation, (subNav) => subNav?.selected ?? '');

export const SubNavigationSelector = {
    getSubNavigation,
    getSelectedItem,
};
