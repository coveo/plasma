import { ReduxUtils, IReduxAction } from '../../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as React from 'react';
import {
  INavigationPerPageProps, INavigationPerPageStateProps, NavigationPerPage,
  INavigationPerPageDispatchProps, INavigationPerPageOwnProps
} from './NavigationPerPage';
import { IPerPageActionPayload, addPerPage, removePerPage } from './NavigationPerPageActions';

const mapStateToProps = (): INavigationPerPageStateProps => {
  return {
    withReduxState: true
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IPerPageActionPayload>) => void, ownProps: INavigationPerPageOwnProps): INavigationPerPageDispatchProps => {
  return {
    onRender: (perPageNb: number) => {
      dispatch(addPerPage(ownProps.id, perPageNb));
    },
    onDestroy: () => {
      dispatch(removePerPage(ownProps.id));
    },
  };
};

export const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPerPage);
