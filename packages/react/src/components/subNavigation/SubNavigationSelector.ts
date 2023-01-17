import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {ISubNavigationState} from './SubNavigationReducers.js';

const getSubNavigation = (state: PlasmaState, subNavigationId: string): ISubNavigationState =>
    _.findWhere(state.subNavigations, {id: subNavigationId});

const getSelectedItem = createSelector(getSubNavigation, (subNav) => subNav?.selected ?? '');

export const SubNavigationSelector = {
    getSubNavigation,
    getSelectedItem,
};
