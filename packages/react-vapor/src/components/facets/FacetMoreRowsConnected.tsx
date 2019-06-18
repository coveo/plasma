import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {filterThrough} from '../filterBox/FilterBoxActions';
import {IFilterState} from '../filterBox/FilterBoxReducers';
import {closeMoreFacetRows} from './FacetActions';
import {
    FacetMoreRows,
    IFacetMoreRowsDispatchProps,
    IFacetMoreRowsOwnProps,
    IFacetMoreRowsProps,
    IFacetMoreRowsStateProps,
} from './FacetMoreRows';
import {IFacetState} from './FacetReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreRowsOwnProps): IFacetMoreRowsStateProps => {
    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet});
    const filterItem: IFilterState = _.findWhere(state.filters, {id: 'filter-' + ownProps.facet});

    return {
        isOpened: item && item.opened,
        filterText: filterItem ? filterItem.filterText : '',
        withReduxState: true,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IFacetMoreRowsOwnProps
): IFacetMoreRowsDispatchProps => ({
    onOpen: () => dispatch(filterThrough('filter-' + ownProps.facet, '')),
    onDocumentClick: () => dispatch(closeMoreFacetRows()),
});

export const FacetMoreRowsConnected: React.ComponentClass<IFacetMoreRowsProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(FacetMoreRows);
