import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVaporState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {ITabDispatchProps, ITabOwnProps, ITabStateProps, Tab} from './Tab';
import {addTab, removeTab, selectTab} from './TabActions';
import {ITabGroupState} from './TabReducers';
import {TabConstants} from './TabConstants';

const mapStateToProps = (state: IReactVaporState, ownProps: ITabOwnProps): ITabStateProps => {
    const id = ownProps.groupId ? ownProps.groupId : TabConstants.DefaultGroupId;
    const tabGroup = _.find(state.tabs, (currentTabGroup: ITabGroupState) => currentTabGroup.id === id);
    return {
        isActive: tabGroup ? tabGroup.tabs.some((tab) => tab.id === ownProps.id && tab.isSelected) : false,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ITabOwnProps
): ITabDispatchProps => ({
    onRender: () => dispatch(addTab(ownProps.id, ownProps.groupId)),
    onDestroy: () => dispatch(removeTab(ownProps.id, ownProps.groupId)),
    onSelect: () => dispatch(selectTab(ownProps.id, ownProps.groupId)),
});

export const TabConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Tab);
