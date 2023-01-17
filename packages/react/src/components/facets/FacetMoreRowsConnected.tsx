import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {filterThrough} from '../filterBox/FilterBoxActions.js';
import {IFilterState} from '../filterBox/FilterBoxReducers.js';
import {closeMoreFacetRows} from './FacetActions.js';
import {
    FacetMoreRows,
    IFacetMoreRowsDispatchProps,
    IFacetMoreRowsOwnProps,
    IFacetMoreRowsStateProps,
} from './FacetMoreRows.js';
import {IFacetState} from './FacetReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: IFacetMoreRowsOwnProps): IFacetMoreRowsStateProps => {
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

/**
 * @deprecated use Mantine instead
 */
export const FacetMoreRowsConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(FacetMoreRows);
