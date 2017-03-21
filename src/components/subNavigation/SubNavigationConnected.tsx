import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { addSubNavigation, removeSubNavigation, selectSubNavigation } from './SubNavigationActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {
  ISubNavigationProps, SubNavigation, ISubNavigationDispatchProps, ISubNavigationOwnProps,
  ISubNavigationStateProps
} from './SubNavigation';
import { ISubNavigationState } from './SubNavigationReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: ISubNavigationOwnProps): ISubNavigationStateProps => {
  let item: ISubNavigationState = _.findWhere(state.subNavigations, { id: ownProps.id });
  return {
    selected: item ? item.selected : ''
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: ISubNavigationOwnProps): ISubNavigationDispatchProps => ({
  onRender: () => dispatch(addSubNavigation(ownProps.id, ownProps.defaultSelected ? [ownProps.defaultSelected] : _.pluck(ownProps.items, 'id'))),
  onDestroy: () => dispatch(removeSubNavigation(ownProps.id)),
  onClickItem: (itemId) => dispatch(selectSubNavigation(ownProps.id, itemId))
});

export const SubNavigationConnected: React.ComponentClass<ISubNavigationProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(SubNavigation);
