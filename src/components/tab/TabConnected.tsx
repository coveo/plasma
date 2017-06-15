import { selectTab, removeTab, addTab } from './TabActions';
import { ITabOwnProps, ITabStateProps, ITabDispatchProps, Tab, ITabProps } from './Tab';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';
import { DEFAULT_GROUP_ID, ITabGroupState } from './TabReducers';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState,
  ownProps: ITabOwnProps): ITabStateProps => {
  const id = ownProps.groupId ? ownProps.groupId : DEFAULT_GROUP_ID;
  const tabGroup = _.find(state.tabs, (tabGroup: ITabGroupState) => tabGroup.id === id);
  return {
    isActive: tabGroup ? tabGroup.tabs.some(tab => tab.id === ownProps.id && tab.isSelected) : false
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: ITabOwnProps): ITabDispatchProps => ({
  onRender: () => dispatch(addTab(ownProps.id, ownProps.groupId)),
  onDestroy: () => dispatch(removeTab(ownProps.id, ownProps.groupId)),
  onSelect: () => dispatch(selectTab(ownProps.id, ownProps.groupId))
});

export const TabConnected: React.ComponentClass<ITabProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Tab);
