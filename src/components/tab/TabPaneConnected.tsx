import { connect } from 'react-redux';
import { ITabPaneProps, ITabPaneOwnProps, ITabPaneStateProps, ITabPaneDispatchProps, TabPane } from './TabPane';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';

const mapStateToProps = (state: IReactVaporState,
  ownProps: ITabPaneOwnProps): ITabPaneStateProps => {
  return {
    isActive: state.tabs.some(tab => tab.id === ownProps.id && tab.isSelected)
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): ITabPaneDispatchProps => ({
});

export const TabPaneConnected: React.ComponentClass<ITabPaneProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TabPane);
