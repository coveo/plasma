import * as React from 'react';
import { IBasicActionProps } from './Action';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { ActionLink } from './ActionLink';
import { ActionTriggerConnected } from './ActionTriggerConnected';
import { ActionTrigger } from './ActionTrigger';

export interface IPrimaryActionOwnProps extends React.ClassAttributes<PrimaryAction>, IBasicActionProps {
  parentId?: string;
}

export interface IPrimaryActionStateProps extends IReduxStatePossibleProps { }

export interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps { }

export class PrimaryAction extends React.Component<IPrimaryActionProps, any> {

  render() {
    let action = this.props.action.link ?
      <ActionLink action={this.props.action} /> :
      (this.props.withReduxState ?
        <ActionTriggerConnected action={this.props.action} parentId={this.props.parentId} /> :
        <ActionTrigger action={this.props.action} />);

    return (
      <div>
        {action}
      </div>
    );
  }
}
