import { ReduxUtils, IDispatch } from '../../utils/ReduxUtils';
import {
  CollapsibleContainer,
  ICollapsibleContainerProps,
  ICollapsibleContainerOwnProps,
  ICollapsibleContainerDispatchProps,
  ICollapsibleContainerStateProps,
} from './CollapsibleContainer';
import { addCollapsibleContainer, removeCollapsibleContainer, setExpandedCollapsibleContainer } from './CollapsibleContainerActions';
import { IReactVaporState } from '../../ReactVapor';
import { connect } from 'react-redux';
import * as React from 'react';
import { findWhere } from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: ICollapsibleContainerOwnProps): ICollapsibleContainerStateProps => {
  const collapsibleContainerState = findWhere(state.collapsibleContainers, { id: ownProps.id });

  return { expanded: collapsibleContainerState && collapsibleContainerState.expanded };
};

const mapDispatchToProps = (
  dispatch: IDispatch,
  ownProps: ICollapsibleContainerOwnProps,
): ICollapsibleContainerDispatchProps => ({
  onMount: () => dispatch(addCollapsibleContainer(ownProps.id, !!ownProps.expandedOnMount)),
  onUnmount: () => dispatch(removeCollapsibleContainer(ownProps.id)),
  onToggleExpandedState: (currentExpandedState: boolean) => dispatch(setExpandedCollapsibleContainer(ownProps.id, !currentExpandedState))
});

export const CollapsibleContainerConnected: React.ComponentClass<ICollapsibleContainerProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(CollapsibleContainer);
