import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVaporState';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ITabPaneDispatchProps, ITabPaneOwnProps, ITabPaneStateProps, TabPane} from './TabPane';
import {TabSelectors} from './TabSelectors';

const mapStateToProps = (state: IReactVaporState, ownProps: ITabPaneOwnProps): ITabPaneStateProps => {
    const tabGroup = TabSelectors.getTabGroup(state, ownProps);
    return {
        isActive: tabGroup ? tabGroup.tabs.some((tab) => tab.id === ownProps.id && tab.isSelected) : false,
    };
};

const mapDispatchToProps = (): ITabPaneDispatchProps => ({});

export const TabPaneConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TabPane);
