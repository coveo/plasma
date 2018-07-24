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
import {CollapsibleContainer, ICollapsibleContainerProps} from './CollapsibleContainer';
import {
    addCollapsibleContainer,
    removeCollapsibleContainer,
    setExpandedCollapsibleContainer,
} from './CollapsibleContainerActions';

const mapStateToProps = (state: IReactVaporState, ownProps: CollapsibleOwnProps): CollapsibleStateProps => {
    const collapsibleContainerState = findWhere(state.collapsibleContainers, {id: ownProps.id});

    return {expanded: collapsibleContainerState && collapsibleContainerState.expanded};
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: CollapsibleOwnProps,
): CollapsibleDispatchProps => ({
    onMount: () => dispatch(addCollapsibleContainer(ownProps.id, !!ownProps.expandedOnMount)),
    onUnmount: () => dispatch(removeCollapsibleContainer(ownProps.id)),
    onToggleExpandedState: (currentExpandedState: boolean) => dispatch(setExpandedCollapsibleContainer(ownProps.id, !currentExpandedState)),
});

export const CollapsibleContainerConnected: React.ComponentClass<ICollapsibleContainerProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(CollapsibleContainer);

export const CollapsibleConnected: React.ComponentClass<CollapsibleProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Collapsible);
