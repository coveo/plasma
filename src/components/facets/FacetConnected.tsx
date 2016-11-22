import { IFacetOwnProps, Facet, IFacetStateProps, IFacetDispatchProps, IFacetProps, IFacet } from './Facet';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionPayload } from '../../ReactVapor';
import { addFacet, removeFacet, changeFacet, emptyFacet } from './FacetActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetOwnProps): IFacetStateProps => {
  let item = _.findWhere(state.facets, { facet: ownProps.facet.name });

  return {
    isOpened: item && item.opened,
    selectedFacetRows: item ? item.selected : [],
    withReduxState: true
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void): IFacetDispatchProps => {
  return {
    onRender: (facet: string) => dispatch(addFacet(facet)),
    onDestroy: (facet: string) => dispatch(removeFacet(facet)),
    onToggleFacet: (facet: string, facetRow: IFacet) => dispatch(changeFacet(facet, facetRow)),
    onClearFacet: (facet: string) => dispatch(emptyFacet(facet))
  };
};

export const FacetConnected: React.ComponentClass<IFacetProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Facet);
