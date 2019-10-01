import * as React from 'react';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IBasicActionProps} from './Action';
import {LinkAction} from './LinkAction';
import {TriggerAction, TriggerActionConnected} from './TriggerActionConnected';

export interface IPrimaryActionOwnProps extends React.ClassAttributes<PrimaryAction>, IBasicActionProps {
    parentId?: string;
}

export interface IPrimaryActionStateProps extends IReduxStatePossibleProps {}

export interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps {}

export class PrimaryAction extends React.Component<IPrimaryActionProps, any> {
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
