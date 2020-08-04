import {createSelector} from 'reselect';
import _ from 'underscore';

import {DEFAULT_GROUP_ID, ITabPaneOwnProps} from '.';
import {IReactVaporState} from '../../ReactVapor';
import {ITabGroupState} from './TabReducers';

const getTabGroup = (state: IReactVaporState, ownProps: ITabPaneOwnProps) =>
    _.findWhere(state.tabs, {id: ownProps.groupId ?? DEFAULT_GROUP_ID});

const getSelectedTab = createSelector(getTabGroup, (tabGroup: ITabGroupState) =>
    _.findWhere(tabGroup?.tabs, {isSelected: true})
);
export const TabSelectors = {
    getTabGroup,
    getSelectedTab,
};
