import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { IActionOptions } from './Action';
import { PrimaryAction } from './PrimaryAction';
import { PrimaryActionConnected } from './PrimaryActionConnected';
import { ActionsDropdownConnected } from './ActionsDropdownConnected';
import { ActionsDropdown } from './ActionsDropdown';
import * as React from 'react';

export interface ISecondaryActionsOwnProps extends React.ClassAttributes<SecondaryActions> {
  actions: IActionOptions[];
  id?: string;
}

export interface ISecondaryActionsStateProps extends IReduxStatePossibleProps { }

export interface ISecondaryActionsProps extends ISecondaryActionsOwnProps, ISecondaryActionsStateProps { }

export class SecondaryActions extends React.Component<ISecondaryActionsProps, any> {

  render() {
    let actions: JSX.Element = this.props.actions.length === 1 ?
      (this.props.withReduxState ?
        <PrimaryActionConnected action={this.props.actions[0]} parentId={this.props.id} /> :
        <PrimaryAction action={this.props.actions[0]} />
      ) :
      (this.props.withReduxState ?
        <ActionsDropdownConnected actions={this.props.actions} id={this.props.id} /> :
        <ActionsDropdown actions={this.props.actions} />
      );

    return (
      <div className='dropdown action primary-action'>
        {actions}
      </div>
    );
  }
}
