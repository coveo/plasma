import * as React from 'react';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IActionOptions} from './Action';
import {ActionsDropdown} from './ActionsDropdown';
import {ActionsDropdownConnected} from './ActionsDropdownConnected';
import {PrimaryAction} from './PrimaryAction';
import {PrimaryActionConnected} from './PrimaryActionConnected';

export interface ISecondaryActionsOwnProps extends React.ClassAttributes<SecondaryActions> {
    actions: IActionOptions[];
    id?: string;
}

export interface ISecondaryActionsStateProps extends IReduxStatePossibleProps {}

export interface ISecondaryActionChildrenProps {
    moreLabel?: string;
}

export interface ISecondaryActionsProps extends ISecondaryActionsOwnProps, ISecondaryActionsStateProps, ISecondaryActionChildrenProps {}

export class SecondaryActions extends React.Component<ISecondaryActionsProps, any> {

    render() {
        const actions: JSX.Element = this.props.actions.length === 1 ?
            (this.props.withReduxState ?
                <PrimaryActionConnected action={this.props.actions[0]} parentId={this.props.id} /> :
                <PrimaryAction action={this.props.actions[0]} />
            ) :
            (this.props.withReduxState ?
                <ActionsDropdownConnected moreLabel={this.props.moreLabel} actions={this.props.actions} id={this.props.id} /> :
                <ActionsDropdown moreLabel={this.props.moreLabel} actions={this.props.actions} />
            );

        return (
            <div className='dropdown action primary-action'>
                {actions}
            </div>
        );
    }
}
