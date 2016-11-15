import { IReactVaporState, ReduxUtils, IReduxAction } from '../../../utils/ReduxUtils';
import {
  NavigationPagination, INavigationPaginationProps,
  INavigationPaginationOwnProps, INavigationPaginationStateProps, INavigationPaginationDispatchProps
} from './NavigationPagination';
import {
  IPaginationActionPayload, addPagination, removePagination,
  changePage
} from './NavigationPaginationActions';
import { turnOnLoading, ILoadingActionPayload } from '../../loading/LoadingActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationPaginationOwnProps): INavigationPaginationStateProps => {
  let item = _.findWhere(state.paginationComposite, { id: ownProps.id });

  return {
    currentPage: item ? item.pageNb : 0
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IPaginationActionPayload | ILoadingActionPayload>) => void,
  ownProps: INavigationPaginationOwnProps): INavigationPaginationDispatchProps => {
  return {
    onRender: () => {
      dispatch(addPagination(ownProps.id));
    },
    onDestroy: () => {
      dispatch(removePagination(ownProps.id));
    },
    onPageClick: (pageNb: number) => {
      dispatch(turnOnLoading(ownProps.loadingIds));
      dispatch(changePage(ownProps.id, pageNb));
    }
  };
};

export const NavigationPaginationConnected: React.ComponentClass<INavigationPaginationProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPagination);
