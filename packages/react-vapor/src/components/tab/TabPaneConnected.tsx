import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ITabPaneDispatchProps, ITabPaneOwnProps, ITabPaneProps, ITabPaneStateProps, TabPane} from './TabPane';
import {DEFAULT_GROUP_ID, ITabGroupState} from './TabReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ITabPaneOwnProps): ITabPaneStateProps => {
    const id = ownProps.groupId ? ownProps.groupId : DEFAULT_GROUP_ID;
    const tabGroup = _.find(state.tabs, (currentTabGroup: ITabGroupState) => currentTabGroup.id === id);
    return {
        isActive: tabGroup ? tabGroup.tabs.some((tab) => tab.id === ownProps.id && tab.isSelected) : false,
    };
};

const mapDispatchToProps = (): ITabPaneDispatchProps => ({});

export const TabPaneConnected: React.ComponentClass<ITabPaneProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TabPane);
