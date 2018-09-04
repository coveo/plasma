import * as React from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    Collapsible,
    CollapsibleDispatchProps,
    CollapsibleOwnProps,
    CollapsibleProps,
    CollapsibleStateProps,
} from './Collapsible';
import {addCollapsible, removeCollapsible, setCollapsibleExpanded} from './CollapsibleActions';

const mapStateToProps = (state: IReactVaporState, ownProps: CollapsibleOwnProps): CollapsibleStateProps => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});
    if (collapsibleState) {
        return {expanded: collapsibleState.expanded};
    }

    return {expanded: ownProps.expandedOnMount};
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: CollapsibleOwnProps,
): CollapsibleDispatchProps => ({
    onMount: () => dispatch(addCollapsible(ownProps.id, !!ownProps.expandedOnMount)),
    onUnmount: () => dispatch(removeCollapsible(ownProps.id)),
    onToggleExpandedState: (currentExpandedState: boolean) => dispatch(setCollapsibleExpanded(ownProps.id, !currentExpandedState)),
});

export const CollapsibleConnected: React.ComponentClass<CollapsibleProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Collapsible);
