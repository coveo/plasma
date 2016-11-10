import { IFacetOwnProps, Facet, IFacetStateProps, IFacetDispatchProps, IFacetProps, IFacet } from './Facet';
import { IReactVaporState, ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { addFacet, removeFacet, IFacetActionPayload, changeFacet, emptyFacet } from './FacetActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetOwnProps): IFacetStateProps => {
  let item = _.findWhere(state.facets, { facet: ownProps.facet.name });

  return {
    isOpened: item ? item.opened : false,
    selectedFacetRows: item ? item.selected : [],
    withReduxState: true
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IFacetActionPayload>) => void): IFacetDispatchProps => {
  return {
    onRender: (facet: string) => {
      dispatch(addFacet(facet));
    },
    onDestroy: (facet: string) => {
      dispatch(removeFacet(facet));
    },
    onToggleFacet: (facet: string, facetRow: IFacet) => {
      dispatch(changeFacet(facet, facetRow));
    },
    onClearFacet: (facet: string) => {
      dispatch(emptyFacet(facet));
    }
  };
};

export const FacetConnected: React.ComponentClass<IFacetProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Facet);
