import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {Facet, IFacet, IFacetDispatchProps, IFacetOwnProps, IFacetProps, IFacetStateProps} from './Facet';
import {addFacet, changeFacet, emptyFacet, removeFacet} from './FacetActions';
import {IFacetState} from './FacetReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetOwnProps): IFacetStateProps => {
    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet.name});
    const selectedFacetRows: IFacet[] = item ? getSelectedRows(ownProps.facetRows, item.selected) : [];

    return {
        isOpened: item && item.opened,
        selectedFacetRows,
        withReduxState: true,
    };
};

const getSelectedRows = (rows: IFacet[], selectedRows: IFacet[]): IFacet[] =>
    _.compact(
        _.map(rows, (row: IFacet) => {
            const selectedRow: IFacet = _.findWhere(selectedRows, {name: row.name});
            return selectedRow && {...selectedRow, ...row};
        })
    );

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IFacetDispatchProps => ({
    onRender: (facet: string) => dispatch(addFacet(facet)),
    onDestroy: (facet: string) => dispatch(removeFacet(facet)),
    onToggleFacet: (facet: string, facetRow: IFacet) => dispatch(changeFacet(facet, facetRow)),
    onClearFacet: (facet: string) => dispatch(emptyFacet(facet)),
});

export const FacetConnected: React.ComponentClass<IFacetProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Facet);
