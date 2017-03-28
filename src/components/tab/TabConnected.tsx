import { selectTab, removeTab, addTab } from './TabActions';
import { ITabOwnProps, ITabStateProps, ITabDispatchProps, Tab, ITabProps } from './Tab';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReactVaporState,
  ownProps: ITabOwnProps): ITabStateProps => {
  return {
    isActive: state.tabs.some(tab => {
      return tab.id === ownProps.id && tab.isSelected;
    })
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: ITabOwnProps): ITabDispatchProps => ({
  onRender: () => dispatch(addTab(ownProps.id)),
  onDestroy: () => dispatch(removeTab(ownProps.id)),
  onSelect: () => dispatch(selectTab(ownProps.id))
});

export const TabConnected: React.ComponentClass<ITabProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Tab);
