import {createSelector} from 'reselect';
import _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ITabGroupState} from './TabReducers';
import {TabConstants} from './TabConstants';

const getTabGroup = (state: IReactVaporState, {groupId}: {groupId?: string}) =>
    _.findWhere(state.tabs, {id: groupId ?? TabConstants.DefaultGroupId});

const getSelectedTab = createSelector(getTabGroup, (tabGroup: ITabGroupState) =>
    _.findWhere(tabGroup?.tabs, {isSelected: true})
);
export const TabSelectors = {
    getTabGroup,
    getSelectedTab,
};
