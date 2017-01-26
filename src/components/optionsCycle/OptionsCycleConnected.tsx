import {
  IOptionsCycleOwnProps,
  IOptionsCycleStateProps,
  IOptionsCycleDispatchProps,
  IOptionsCycleProps,
  OptionsCycle
} from './OptionsCycle';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { addOptionsCycle, removeOptionsCycle, changeOptionsCycle } from './OptionsCycleActions';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: IOptionsCycleOwnProps): IOptionsCycleStateProps => {
  let cycle = _.findWhere(state.optionsCycles, { id: ownProps.id });

  return {
    currentOption: cycle ? cycle.currentOption : 0
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IOptionsCycleOwnProps): IOptionsCycleDispatchProps => ({
    onRender: (index: number) => dispatch(addOptionsCycle(ownProps.id, index)),
    onDestroy: () => dispatch(removeOptionsCycle(ownProps.id)),
    onChange: (index: number) => dispatch(changeOptionsCycle(ownProps.id, index))
  });

export const OptionsCycleConnected: React.ComponentClass<IOptionsCycleProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(OptionsCycle);
