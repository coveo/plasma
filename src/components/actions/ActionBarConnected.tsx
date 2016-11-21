import {
  IActionBarProps,
  ActionBar,
  IActionBarOwnProps,
  IActionBarDispatchProps,
  IActionBarStateProps
} from './ActionBar';
import { ReduxUtils, IReduxAction, IReduxActionPayload, IReactVaporState } from '../../utils/ReduxUtils';
import { addActionBar, removeActionBar } from './ActionBarActions';
import { InlinePromptConnected } from '../inlinePrompt/InlinePromptConnected';
import { IActionOptions } from './Action';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IActionBarOwnProps): IActionBarStateProps => {
  let actionBar = _.findWhere(state.actionBars, { id: ownProps.id });
  let prompt = _.findWhere(state.prompts, { id: ownProps.id });

  return {
    withReduxState: true,
    actions: actionBar && actionBar.actions ? _.filter(actionBar.actions, (action: IActionOptions) => _.result(action, 'enabled')) : [],
    prompt: prompt && prompt.options ?
      <div className='prompt'>
        <InlinePromptConnected
          id={prompt.id}
          options={prompt.options}
          />
      </div> :
      null
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void, ownProps: IActionBarOwnProps): IActionBarDispatchProps => {
  return {
    onRender: () => dispatch(addActionBar(ownProps.id)),
    onDestroy: () => dispatch(removeActionBar(ownProps.id))
  };
};

export const ActionBarConnected: React.ComponentClass<IActionBarProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionBar);
