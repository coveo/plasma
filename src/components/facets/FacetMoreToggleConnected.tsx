import {
  FacetMoreToggle, IFacetMoreToggleOwnProps, IFacetMoreToggleProps,
  IFacetMoreToggleStateProps, IFacetMoreToggleDispatchProps
} from './FacetMoreToggle';
import { ReduxUtils, IReactVaporState, IReduxAction } from '../../utils/ReduxUtils';
import { toggleMoreFacetRows, IFacetActionPayload } from './FacetActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreToggleOwnProps): IFacetMoreToggleStateProps => {
  let item = _.findWhere(state.facets, { facet: ownProps.facet });

  return {
    isOpened: item ? item.opened : false
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IFacetActionPayload>) => void): IFacetMoreToggleDispatchProps => {
  return {
    onToggleMore: (facet: string) => {
      dispatch(toggleMoreFacetRows(facet));
    }
  };
};

export const FacetMoreToggleConnected: React.ComponentClass<IFacetMoreToggleProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FacetMoreToggle);
