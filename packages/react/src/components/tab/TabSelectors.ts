import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {CherryPick} from '../../utils/index.js';
import {ITabOwnProps} from './Tab.js';
import {TabConstants} from './TabConstants.js';
import {ITabGroupState, ITabState} from './TabReducers.js';

const getTabGroup = (state: PlasmaState, {groupId}: CherryPick<ITabOwnProps, 'groupId'>): ITabGroupState =>
    _.findWhere(state.tabs, {id: groupId ?? TabConstants.DefaultGroupId});

const getSelectedTab = createSelector(
    getTabGroup,
    (tabGroup: ITabGroupState): ITabState => _.findWhere(tabGroup?.tabs, {isSelected: true})
);

const getTab = createSelector(
    getTabGroup,
    (state: any, {id}: CherryPick<ITabOwnProps, 'id'>) => id,
    (tabGroup: ITabGroupState, id: string): ITabState => _.findWhere(tabGroup?.tabs, {id})
);

const getIsTabSelected = createSelector(getTab, (tab) => tab?.isSelected ?? false);

export const TabSelectors = {
    getTabGroup,
    getTab,
    /**
     * Returns the id of the selected tab within a tab group
     */
    getSelectedTab,
    /**
     * Returns whether the tab at the specified id is selected
     */
    getIsTabSelected,
};
