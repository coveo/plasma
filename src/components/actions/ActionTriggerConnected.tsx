import { ReduxUtils, IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { ActionTrigger, IActionTriggerProps, IActionTriggerOwnProps, IActionTriggerDispatchProps } from './ActionTrigger';
import { IUserChoice } from '../inlinePrompt/InlinePrompt';
import { addPrompt, removePrompt } from '../inlinePrompt/InlinePromptActions';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void,
  ownProps: IActionTriggerOwnProps): IActionTriggerDispatchProps => {
  return {
    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {
      dispatch(addPrompt(ownProps.parentId, { onClick, userChoice, isOpened: false, className }));
    },
    onConfirm: () => dispatch(removePrompt(ownProps.parentId))
  };
};

export const ActionTriggerConnected: React.ComponentClass<IActionTriggerProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionTrigger);
