import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {ITabDispatchProps, ITabOwnProps, ITabProps, ITabStateProps, Tab} from './Tab';
import {addTab, removeTab, selectTab} from './TabActions';
import {DEFAULT_GROUP_ID, ITabGroupState} from './TabReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITabOwnProps): ITabStateProps => {
    const id = ownProps.groupId ? ownProps.groupId : DEFAULT_GROUP_ID;
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

export const TabConnected: React.ComponentClass<ITabProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Tab);
