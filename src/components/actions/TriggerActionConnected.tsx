import { ReduxUtils, IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { TriggerAction, ITriggerActionProps, ITriggerActionOwnProps, ITriggerActionDispatchProps } from './TriggerAction';
import { IUserChoice } from '../inlinePrompt/InlinePrompt';
import { addPrompt, removePrompt } from '../inlinePrompt/InlinePromptActions';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void,
  ownProps: ITriggerActionOwnProps): ITriggerActionDispatchProps => {
  return {
    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {
      dispatch(addPrompt(ownProps.parentId, { onClick, userChoice, isOpened: false, className }));
    },
    onConfirm: () => dispatch(removePrompt(ownProps.parentId))
  };
};

export const TriggerActionConnected: React.ComponentClass<ITriggerActionProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TriggerAction);
