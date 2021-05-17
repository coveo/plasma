import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {CherryPick} from '../../utils';
import {ITabOwnProps} from './Tab';
import {TabConstants} from './TabConstants';
import {ITabGroupState, ITabState} from './TabReducers';

const getTabGroup = (state: IReactVaporState, {groupId}: {groupId?: string}) =>
    _.findWhere(state.tabs, {id: groupId ?? TabConstants.DefaultGroupId});

const getSelectedTab = createSelector(getTabGroup, (tabGroup: ITabGroupState) =>
    _.findWhere(tabGroup?.tabs, {isSelected: true})
);

const getTab = (state: IReactVaporState, {id}: CherryPick<ITabOwnProps, 'id'>) =>
    state.tabs
        ?.reduce((accumulator, tabGroup): ITabState[] => [...accumulator, ...tabGroup.tabs], [])
        .find((tab) => tab.id === id);

export const TabSelectors = {
    getTabGroup,
    getSelectedTab,
    getTab,
};
