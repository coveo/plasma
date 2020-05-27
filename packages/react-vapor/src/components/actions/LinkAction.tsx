import classNames from 'classnames';
import * as React from 'react';
import {Action, IBasicActionProps} from './Action';

export interface ILinkActionProps extends React.ClassAttributes<LinkAction>, IBasicActionProps {}

export class LinkAction extends React.Component<ILinkActionProps> {
    render() {
        const actionClasses: string = classNames({
            enabled: this.props.action.enabled,
            'state-disabled': !this.props.action.enabled && !this.props.action.hideDisabled,
            'inline-flex flex-center': !this.props.simple,
        });
        const opts: React.AllHTMLAttributes<HTMLAnchorElement> = {
            children: <Action action={this.props.action} simple={this.props.simple} />,
        };
        const href = this.props.action.enabled ? this.props.action.link : undefined;
        if (this.props.action.target) {
            opts.target = this.props.action.enabled ? this.props.action.target : undefined;
            opts.rel = 'noopener noreferrer';
        }

        return <a className={actionClasses} href={href} title={this.props.action.name} {...opts} />;
    }
}
