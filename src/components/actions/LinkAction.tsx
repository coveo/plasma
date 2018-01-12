import * as React from 'react';
import { Action, IBasicActionProps } from './Action';

export interface ILinkActionProps extends React.ClassAttributes<LinkAction>, IBasicActionProps { }

export class LinkAction extends React.Component<ILinkActionProps> {

  render() {
    const actionClasses: string = 'enabled' + (this.props.simple ? '' : ' inline-flex flex-center');
    const opts: React.AllHTMLAttributes<HTMLAnchorElement> = {
      children: <Action action={this.props.action} simple={this.props.simple} />,
    };
    if (this.props.action.target) {
      opts.target = this.props.action.target;
      opts.rel = 'noopener noreferrer';
    }

    return (
      <a className={actionClasses} href={this.props.action.link} title={this.props.action.name} {...opts} />
    );
  }
}
