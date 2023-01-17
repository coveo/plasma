import {ClassAttributes, Component} from 'react';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils.js';
import {IBasicActionProps} from './Action.js';
import {LinkAction} from './LinkAction.js';
import {TriggerAction, TriggerActionConnected} from './TriggerActionConnected.js';

export interface IPrimaryActionOwnProps extends ClassAttributes<PrimaryAction>, IBasicActionProps {
    parentId?: string;
}

export interface IPrimaryActionStateProps extends IReduxStatePossibleProps {}

export interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps {}

/**
 * @deprecated Use Mantine instead
 */
export class PrimaryAction extends Component<IPrimaryActionProps, any> {
    render() {
        const action: JSX.Element = this.props.action.link ? (
            <LinkAction action={this.props.action} />
        ) : this.props.withReduxState ? (
            <TriggerActionConnected action={this.props.action} parentId={this.props.parentId} />
        ) : (
            <TriggerAction action={this.props.action} />
        );

        return <div>{action}</div>;
    }
}
