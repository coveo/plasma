import { ReduxUtils, IReduxAction, IReactVaporState } from '../../../utils/ReduxUtils';
import {
  INavigationPerPageProps, INavigationPerPageStateProps, NavigationPerPage,
  INavigationPerPageDispatchProps, INavigationPerPageOwnProps
} from './NavigationPerPage';
import { IPerPageActionPayload, addPerPage, removePerPage, changePerPage } from './NavigationPerPageActions';
import { turnOnLoading, ILoadingActionPayload } from '../../loading/LoadingActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationPerPageOwnProps): INavigationPerPageStateProps => {
  let item = _.findWhere(state.perPageComposite, { id: ownProps.id });

  return {
    currentPerPage: item ? item.perPage : null
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IPerPageActionPayload | ILoadingActionPayload>) => void,
  ownProps: INavigationPerPageOwnProps): INavigationPerPageDispatchProps => {
  return {
    onRender: (perPageNb: number) => {
      dispatch(addPerPage(ownProps.id, perPageNb));
    },
    onDestroy: () => {
      dispatch(removePerPage(ownProps.id));
    },
    onPerPageClick: (perPageNb: number) => {
      dispatch(turnOnLoading(ownProps.loadingIds));
      dispatch(changePerPage(ownProps.id, perPageNb));
    }
  };
};

export const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPerPage);
