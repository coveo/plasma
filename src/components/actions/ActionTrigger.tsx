import { IUserChoice } from '../inlinePrompt/InlinePrompt';
import { IBasicActionProps, Action } from './Action';
import * as React from 'react';

export interface IActionTriggerOwnProps extends React.ClassAttributes<ActionTrigger>, IBasicActionProps {
  confirmLabel?: string;
  parentId?: string;
}

export interface IActionTriggerDispatchProps {
  onTriggerConfirm?: (onClick: () => void, userChoice: IUserChoice, className: string) => void;
  onConfirm?: () => void;
}

export interface IActionTriggerProps extends IActionTriggerOwnProps, IActionTriggerDispatchProps { }

export const CONFIRM_LABEL = 'Are you sure?';

export class ActionTrigger extends React.Component<IActionTriggerProps, any> {

  private onTriggerAction() {
    let confirmData = this.props.action.requiresConfirmation;

    if (confirmData) {
      let confirmLabel = this.props.confirmLabel || CONFIRM_LABEL;
      let icon = this.props.action.icon;

      this.props.onTriggerConfirm(
        () => {
          this.props.action.trigger();
          this.props.onConfirm();
        },
        {
          icon: icon,
          description: confirmLabel,
          cancel: confirmData.buttonLabels.cancel,
          choices: {
            confirm: confirmData.buttonLabels.confirm
          }
        },
        confirmData.confirmType
      );
    } else {
      this.props.action.trigger();
    }
  }

  render() {
    let actionClasses = this.props.action.enabled ? 'enabled' : (this.props.simple ? 'state-disabled' : 'disabled');

    return (
      <span onClick={() => this.onTriggerAction()} className={actionClasses} title={this.props.action.name}>
        <Action action={this.props.action} simple={this.props.simple} />
      </span>
    );
  }
}
