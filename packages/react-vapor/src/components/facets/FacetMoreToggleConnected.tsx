import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVaporState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {toggleMoreFacetRows} from './FacetActions';
import {
    FacetMoreToggle,
    IFacetMoreToggleDispatchProps,
    IFacetMoreToggleOwnProps,
    IFacetMoreToggleStateProps,
} from './FacetMoreToggle';
import {IFacetState} from './FacetReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreToggleOwnProps): IFacetMoreToggleStateProps => {
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

export const FacetMoreToggleConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(FacetMoreToggle);
