import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { TriggerAction, ITriggerActionProps, ITriggerActionOwnProps, ITriggerActionDispatchProps } from './TriggerAction';
import { IUserChoice } from '../inlinePrompt/InlinePrompt';
import { addPrompt, removePrompt } from '../inlinePrompt/InlinePromptActions';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: ITriggerActionOwnProps): ITriggerActionDispatchProps => ({
    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {
      dispatch(addPrompt(ownProps.parentId, { onClick, userChoice, isOpened: false, className }));
    },
    onConfirm: () => dispatch(removePrompt(ownProps.parentId))
  });

export const TriggerActionConnected: React.ComponentClass<ITriggerActionProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TriggerAction);
