import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {
    ISubNavigationDispatchProps,
    ISubNavigationOwnProps,
    ISubNavigationStateProps,
    SubNavigation,
} from './SubNavigation';
import {addSubNavigation, removeSubNavigation, selectSubNavigation} from './SubNavigationActions';
import {SubNavigationSelector} from './SubNavigationSelector';

const mapStateToProps = (state: PlasmaState, ownProps: ISubNavigationOwnProps): ISubNavigationStateProps => ({
    selected: SubNavigationSelector.getSelectedItem(state, ownProps.id),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ISubNavigationOwnProps,
): ISubNavigationDispatchProps => ({
    onRender: () =>
        dispatch(
            addSubNavigation(
                ownProps.id,
                ownProps.defaultSelected ? [ownProps.defaultSelected] : _.pluck(ownProps.items, 'id'),
            ),
        ),
    onDestroy: () => dispatch(removeSubNavigation(ownProps.id)),
    onClickItem: (itemId) => dispatch(selectSubNavigation(ownProps.id, itemId)),
});

/**
 * @deprecated Use Mantine instead
 */
export const SubNavigationConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(SubNavigation);
