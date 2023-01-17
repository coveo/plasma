import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {toggleMoreFacetRows} from './FacetActions.js';
import {
    FacetMoreToggle,
    IFacetMoreToggleDispatchProps,
    IFacetMoreToggleOwnProps,
    IFacetMoreToggleStateProps,
} from './FacetMoreToggle.js';
import {IFacetState} from './FacetReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: IFacetMoreToggleOwnProps): IFacetMoreToggleStateProps => {
    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet});

    return {
        isOpened: item && item.opened,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void
): IFacetMoreToggleDispatchProps => ({
    onToggleMore: (facet: string) => dispatch(toggleMoreFacetRows(facet)),
});

/**
 * @deprecated use Mantine instead
 */
export const FacetMoreToggleConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(FacetMoreToggle);
