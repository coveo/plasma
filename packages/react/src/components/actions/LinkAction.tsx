import classNames from 'clsx';
import {ClassAttributes, AllHTMLAttributes, Component} from 'react';
import {Action, IBasicActionProps} from './Action';

export interface ILinkActionProps extends ClassAttributes<LinkAction>, IBasicActionProps {}

/**
 * @deprecated Use Mantine instead
 */
export class LinkAction extends Component<ILinkActionProps> {
    render() {
        const actionClasses: string = classNames({
            enabled: this.props.action.enabled,
            'state-disabled': !this.props.action.enabled && !this.props.action.hideDisabled,
            'inline-flex flex-center': !this.props.simple,
        });
        const opts: AllHTMLAttributes<HTMLAnchorElement> = {
            children: <Action action={this.props.action} simple={this.props.simple} />,
        };
        const href = this.props.action.enabled ? this.props.action.link : undefined;
        if (this.props.action.target) {
            opts.target = this.props.action.enabled ? this.props.action.target : undefined;
            opts.rel = 'noopener noreferrer';
        }

        return <a className={actionClasses} href={href} title={this.props.action.name} role="button" {...opts} />;
    }
}
