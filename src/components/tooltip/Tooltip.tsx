import { Tooltip as BootstrapTooltip, OverlayTrigger } from 'react-bootstrap';
import * as _ from 'underscore';
import * as React from 'react';

// Copy of the OverlayTriggerProps but without the overlay prop since we are building it here
export interface IOverlayTriggerProps {
  animation?: any;
  defaultOverlayShown?: boolean;
  delay?: number;
  delayHide?: number;
  delayShow?: number;
  onEnter?: Function;
  onEntered?: Function;
  onEntering?: Function;
  onExit?: Function;
  onExited?: Function;
  onExiting?: Function;
  placement?: string;
  rootClose?: boolean;
  trigger?: string | string[];
}

export interface ITooltipProps extends IOverlayTriggerProps, React.ClassAttributes<Tooltip> {
  title: string;
  className?: string;
  arrowOffsetLeft?: number | string;
  arrowOffsetTop?: number | string;
  bsStyle?: string;
  placement?: string;
  positionLeft?: number;
  positionTop?: number;
}

const PROPS_TO_OMIT: string[] = [
  'title',
  'className',
  'children',
];

const TOOLTIP_PROPS_TO_OMIT: string[] = [
  ...PROPS_TO_OMIT,
  'animation',
  'defaultOverlayShown',
  'delay',
  'delayShow',
  'onEnter',
  'onEntered',
  'onEntering',
  'onExit',
  'onExited',
  'onExiting',
  'overlay',
  'rootClose',
  'trigger',
];
const OVERLAY_PROPS_TO_OMIT: string[] = [
  ...PROPS_TO_OMIT,
  'arrowOffsetLeft',
  'arrowOffsetTop',
  'bsClass',
  'positionTop',
  'positionLeft',
];

export class Tooltip extends React.Component<ITooltipProps, any> {
  static defaultProps: Partial<ITooltipProps> = {
    className: '',
  };

  render() {
    const tooltip = <BootstrapTooltip
      id={_.uniqueId('tooltip-')}
      {..._.omit(this.props, TOOLTIP_PROPS_TO_OMIT) }>
      {this.props.title}
    </BootstrapTooltip>;

    return (
      <OverlayTrigger {..._.omit(this.props, OVERLAY_PROPS_TO_OMIT) } overlay={tooltip}>
        <span className={this.props.className}>
          {this.props.children}
        </span>
      </OverlayTrigger>
    );
  }
}
