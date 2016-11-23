import { IBasicActionProps } from './Action';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { LinkAction } from './LinkAction';
import { TriggerActionConnected } from './TriggerActionConnected';
import { TriggerAction } from './TriggerAction';
import * as React from 'react';

export interface IPrimaryActionOwnProps extends React.ClassAttributes<PrimaryAction>, IBasicActionProps {
  parentId?: string;
}

export interface IPrimaryActionStateProps extends IReduxStatePossibleProps { }

export interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps { }

export class PrimaryAction extends React.Component<IPrimaryActionProps, any> {

  render() {
    let action: JSX.Element = this.props.action.link ?
      <LinkAction action={this.props.action} /> :
      (this.props.withReduxState ?
        <TriggerActionConnected action={this.props.action} parentId={this.props.parentId} /> :
        <TriggerAction action={this.props.action} />);

    return (
      <div>
        {action}
      </div>
    );
  }
}
