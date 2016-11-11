import {
  INavigationPerPageSelectProps,
  INavigationPerPageSelectOwnProps, NavigationPerPageSelect, INavigationPerPageSelectStateProps,
  INavigationPerPageSelectDispatchProps
} from './NavigationPerPageSelect';
import { changePerPage, IPerPageActionPayload } from './NavigationPerPageActions';
import { turnOnLoading, ILoadingActionPayload } from '../../loading/LoadingActions';
import { ReduxUtils, IReactVaporState, IReduxAction } from '../../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationPerPageSelectOwnProps): INavigationPerPageSelectStateProps => {
  let item = _.findWhere(state.perPageComposite, { id: ownProps.id });

  return {
    selected: item ? ownProps.perPageNumber === item.perPage : false
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IPerPageActionPayload | ILoadingActionPayload>) => void, ownProps: INavigationPerPageSelectOwnProps): INavigationPerPageSelectDispatchProps => {
  return {
    onPerPageClick: () => {
      dispatch(turnOnLoading(ownProps.loadingIds));
      dispatch(changePerPage(ownProps.id, ownProps.perPageNumber));
    }
  };
};

export const NavigationPerPageSelectConnected: React.ComponentClass<INavigationPerPageSelectProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPerPageSelect);
