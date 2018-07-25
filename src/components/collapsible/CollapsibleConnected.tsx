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
import {addCollapsibleContainer, removeCollapsibleContainer, setCollapsibleExpanded} from './CollapsibleActions';

const mapStateToProps = (state: IReactVaporState, ownProps: CollapsibleOwnProps): CollapsibleStateProps => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});

    return {expanded: collapsibleState && collapsibleState.expanded};
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: CollapsibleOwnProps,
): CollapsibleDispatchProps => ({
    onMount: () => dispatch(addCollapsibleContainer(ownProps.id, !!ownProps.expandedOnMount)),
    onUnmount: () => dispatch(removeCollapsibleContainer(ownProps.id)),
    onToggleExpandedState: (currentExpandedState: boolean) => dispatch(setCollapsibleExpanded(ownProps.id, !currentExpandedState)),
});

export const CollapsibleConnected: React.ComponentClass<CollapsibleProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Collapsible);
