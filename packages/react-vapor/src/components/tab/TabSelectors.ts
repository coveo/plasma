import _ from 'underscore';

import {DEFAULT_GROUP_ID, ITabPaneOwnProps} from '.';
import {IReactVaporState} from '../../ReactVapor';

const getTabGroup = (state: IReactVaporState, ownProps: ITabPaneOwnProps) => {
    return _.findWhere(state.tabs, {id: ownProps.groupId ?? DEFAULT_GROUP_ID});
};

export const TabSelectors = {
    getTabGroup,
};
