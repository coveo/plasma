import { ReduxUtils, IReduxAction } from '../../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../../ReactVapor';
import {
  INavigationPerPageProps,
  INavigationPerPageStateProps,
  NavigationPerPage,
  INavigationPerPageDispatchProps,
  INavigationPerPageOwnProps, PER_PAGE_NUMBERS
} from './NavigationPerPage';
import { IPerPageState } from './NavigationPerPageReducers';
import { addPerPage, removePerPage, changePerPage } from './NavigationPerPageActions';
import { changePage } from '../pagination/NavigationPaginationActions';
import { turnOnLoading } from '../../loading/LoadingActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';
import { IPaginationState } from '../pagination/NavigationPaginationReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: INavigationPerPageOwnProps): INavigationPerPageStateProps => {
  let item: IPerPageState = _.findWhere(state.perPageComposite, { id: ownProps.id });
  let pagination: IPaginationState = _.findWhere(state.paginationComposite, { id: 'pagination-' + ownProps.id });
  let firstPerPage: number = ownProps.perPageNumbers ? ownProps.perPageNumbers[0] : PER_PAGE_NUMBERS[0];

  return {
    currentPerPage: item ? item.perPage : firstPerPage,
    currentPage: pagination ? pagination.pageNb : 0
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: INavigationPerPageOwnProps): INavigationPerPageDispatchProps => ({
    onRender: (perPageNb: number) => dispatch(addPerPage(ownProps.id, perPageNb)),
    onDestroy: () => dispatch(removePerPage(ownProps.id)),
    onPerPageClick: (perPageNb: number, oldPerPageNb: number, currentPage: number) => {
      dispatch(turnOnLoading(ownProps.loadingIds));
      dispatch(changePerPage(ownProps.id, perPageNb));
      dispatch(changePage(`pagination-${ownProps.id}`, Math.floor(currentPage * oldPerPageNb / perPageNb)));
    }
  });

export const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(NavigationPerPage);
