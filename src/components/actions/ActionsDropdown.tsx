import { IActionOptions } from './Action';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { Svg } from '../svg/Svg';
import { LinkAction } from './LinkAction';
import { TriggerAction } from './TriggerAction';
import { TriggerActionConnected } from './TriggerActionConnected';
import * as React from 'react';
import * as _ from 'underscore';

export interface IActionsDropdownOwnProps extends React.ClassAttributes<ActionsDropdown> {
  actions: IActionOptions[];
  id?: string;
  moreLabel?: string;
}

export interface IActionsDropdownStateProps extends IReduxStatePossibleProps { }

export interface IActionsDropdownProps extends IActionsDropdownOwnProps, IActionsDropdownStateProps { }

export const MORE_LABEL = 'More';

export class ActionsDropdown extends React.Component<IActionsDropdownProps, any> {

  render() {
    let moreLabel = this.props.moreLabel || MORE_LABEL;
    let actions = _.map(this.props.actions, (action) => {
      if (action.separator) {
        return <li className='divider'></li>;
      }

      if (action.link) {
        return <li><LinkAction action={action} simple={true} /></li>;
      }

      if (this.props.withReduxState) {
        return <li><TriggerActionConnected action={action} simple={true} parentId={this.props.id} /></li>;
      }
      return <li><TriggerAction action={action} simple={true} /></li>;
    });

    return (
      <div>
        <span
          className='dropdown-toggle inline-flex flex-center'
          data-toggle='dropdown'
          title={moreLabel}>
          <Svg svgName='more' className='action-icon' svgClass='icon icon-medium fill-medium-blue' />
          <span className='action-label'>{moreLabel}</span>
        </span>
        <ul className='dropdown-menu normal-height'>
          {actions}
        </ul>
      </div>
    );
  }
}
