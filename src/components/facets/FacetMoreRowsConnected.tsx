import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IFacetState } from './FacetReducers';
import { IFilterState } from '../filterBox/FilterBoxReducers';
import {
  IFacetMoreRowsOwnProps,
  FacetMoreRows,
  IFacetMoreRowsProps,
  IFacetMoreRowsStateProps,
  IFacetMoreRowsDispatchProps
} from './FacetMoreRows';
import { filterThrough } from '../filterBox/FilterBoxActions';
import { closeMoreFacetRows } from './FacetActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreRowsOwnProps): IFacetMoreRowsStateProps => {
  let item: IFacetState = _.findWhere(state.facets, { facet: ownProps.facet });
  let filterItem: IFilterState = _.findWhere(state.filters, { id: 'filter-' + ownProps.facet });

  return {
    isOpened: item && item.opened,
    filterText: filterItem ? filterItem.filterText : '',
    withReduxState: true
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IFacetMoreRowsOwnProps): IFacetMoreRowsDispatchProps => ({
    onOpen: () => dispatch(filterThrough('filter-' + ownProps.facet, '')),
    onDocumentClick: () => dispatch(closeMoreFacetRows())
  });

export const FacetMoreRowsConnected: React.ComponentClass<IFacetMoreRowsProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FacetMoreRows);
