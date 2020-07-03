import {createSelector} from 'reselect';
import _ from 'underscore';

import {DEFAULT_GROUP_ID, ITabPaneOwnProps} from '.';
import {IReactVaporState} from '../../ReactVapor';
import {ITabGroupState} from './TabReducers';

const getTabGroup = (state: IReactVaporState, ownProps: ITabPaneOwnProps) => {
    return _.findWhere(state.tabs, {id: ownProps.groupId ?? DEFAULT_GROUP_ID});
};

const getTabSelected = (tabId: string) =>
    createSelector(
        getTabGroup,
        (tabGroup: ITabGroupState): boolean => _.findWhere(tabGroup.tabs, {id: tabId})?.isSelected
    );
export const TabSelectors = {
    getTabGroup,
    getTabSelected,
};
