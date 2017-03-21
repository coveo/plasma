import { Svg } from '../svg/Svg';
import { Tooltip } from '../tooltip/Tooltip';
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
  enabled: boolean;
  primary?: boolean;
  icon?: string;
  iconClass?: string;
  name?: string;
  id?: string;
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
  tooltip?: string;
}

export interface IBasicActionProps {
  action: IActionOptions;
  simple?: boolean;
}

export interface IActionProps extends React.ClassAttributes<Action>, IBasicActionProps { }

export class Action extends React.Component<IActionProps, any> {

  render() {
    const actionIcon: JSX.Element = this.props.action.icon ?
      <Svg svgName={this.props.action.icon} className='action-icon' svgClass='icon fill-medium-blue' /> :
      <Svg svgName='more' className='action-icon action-icon-more' svgClass='icon icon-medium fill-medium-blue' />;
    const inside: string | JSX.Element = this.props.simple ? this.props.action.name :
      <span className='inline-flex flex-center'>
        {actionIcon}
        <span className='action-label'>{this.props.action.name}</span>
      </span>;
    const wholeAction: JSX.Element = this.props.action.tooltip
      ? <Tooltip title={this.props.action.tooltip}>
        {inside}
      </Tooltip>
      : <span>
        {inside}
      </span>;

    return wholeAction;
  }
}
