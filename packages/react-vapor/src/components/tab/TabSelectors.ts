import _ from 'underscore';

import {DEFAULT_GROUP_ID, ITabGroupState, ITabPaneOwnProps} from '.';
import {IReactVaporState} from '../../ReactVapor';

const getTabGroup = (state: IReactVaporState, ownProps: ITabPaneOwnProps) => {
    const id = ownProps.groupId ?? DEFAULT_GROUP_ID;
    return _.find(state.tabs, (currentTabGroup: ITabGroupState) => currentTabGroup.id === id);
};

export const TabSelectors = {
    getTabGroup,
};
