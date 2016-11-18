import { Svg } from '../svg/Svg';
import * as React from 'react';

export interface IConfirmButtonLabel {
  cancel: string;
  confirm: string;
}

export interface IConfirmData {
  confirmType: string;
  buttonLabels?: IConfirmButtonLabel;
}

export interface IActionOptions {
  primary?: boolean;
  icon?: string;
  iconClass?: string;
  name?: string;
  id?: string;
  enabled: boolean;
  unrepeatable?: boolean;
  callOnDoubleClick?: boolean;
  trigger?: () => void;
  requiresConfirmation?: IConfirmData;
  link?: string;
  target?: string;
  separator?: boolean;
  grouped?: boolean;
  subActions?: IActionOptions[];
  hidden?: boolean;
}

export interface IBasicActionProps {
  action: IActionOptions;
  simple?: boolean;
}

export interface IActionProps extends React.ClassAttributes<Action>, IBasicActionProps { }

export class Action extends React.Component<IActionProps, any> {

  render() {
    let actionIcon = this.props.action.icon ?
      <Svg svgName={this.props.action.icon} className='action-icon' svgClass='icon fill-medium-blue' /> :
      <Svg svgName='more' className='action-icon action-icon-more' svgClass='icon icon-medium fill-medium-blue' />;
    let inside = this.props.simple ? this.props.action.name :
      <span className='inline-flex flex-center'>
        {actionIcon}
        <span className='action-label'>{this.props.action.name}</span>
      </span>;

    return (
      <span>
        {inside}
      </span>
    );
  }
}
