import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'underscore';

import 'bootstrap'; // Usefull since Vapor took the tooltip function from there and since bootstrap has a legit definition file.

export interface ITooltipProps extends React.HTMLProps<Tooltip> {
  animation?: boolean; // @default: true
  container?: string | boolean; // @default: false
  delay?: number | Object; // @default: 0
  html?: boolean; // @default: false
  placement?: string | Function; // @default: 'top'
  selector?: string; // @default: ?
  template?: string; // @default: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  title: string;
  trigger?: string; // @default: 'hover focus'
  viewport?: string | Function | Object; // @default: { selector: 'body', padding: 0 }
}

const tooltipPropsToOmit = ['animation', 'container', 'delay', 'html', 'placement', 'selector', 'template', 'trigger', 'viewport',
  'children'];

/**
 * Simple react component wrapping Bootstrap jQuery tooltip. Include CoveoStyleGuide.Dependencies.js in order for this to work.
 */
export class Tooltip extends React.Component<ITooltipProps, any> {
  private tooltip: JQuery;

  componentDidMount() {
    this.tooltip.tooltip({
      animation: this.props.animation,
      container: this.props.container,
      delay: this.props.delay,
      html: this.props.html,
      placement: this.props.placement,
      selector: this.props.selector,
      template: this.props.template,
      title: this.props.title,
      trigger: this.props.trigger,
      viewport: this.props.viewport
    });
  }

  componentWillUnmount() {
    this.tooltip.tooltip('destroy');
  }

  render() {
    return (
      <span {..._.omit(this.props, tooltipPropsToOmit) } ref={(element: HTMLElement) => this.tooltip = $(element)}>
        {this.props.children}
      </span>
    );
  }
}
