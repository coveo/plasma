import * as React from 'react';
import * as _ from 'underscore';
import { IBaseActionOptions } from '../actions/Action';
import { Tooltip } from '../tooltip/Tooltip';

export class Button extends React.Component<IBaseActionOptions, void> {

  static defaultProps: Partial<IBaseActionOptions> = {
    enabled: true,
    name: '',
    tooltip: '',
    primary: false,
    tooltipPlacement: 'right',
    target: '',
  };

  private onClick() {
    if (this.props.onClick && this.props.enabled) {
      this.props.onClick();
    }
  }

  getTemplate(buttonClass: string): JSX.Element {
    let buttonElement: JSX.Element;

    const disabled: boolean = !this.props.enabled;
    const onClick = () => this.onClick();
    let buttonAttrs = {
      disabled,
      onClick,
    };

    if (this.props.link) {
      buttonAttrs = _.extend(buttonAttrs, {
        target: this.props.target,
        rel: 'noopener noreferrer',
        href: this.props.link,
      });

      buttonElement = (
        <a className={`${buttonClass} btn-container`}
          {...buttonAttrs}>
          {this.props.name}
        </a>);
    } else {
      buttonElement = (
        <button className={buttonClass}
          {...buttonAttrs}>
          {this.props.name}
        </button>);
    }

    return !_.isEmpty(this.props.tooltip)
      ? <Tooltip title={this.props.tooltip} placement={this.props.tooltipPlacement}>
        <span>
          {buttonElement}
        </span>
      </Tooltip>
      : buttonElement;
  }

  render() {
    const buttonClasses = ['btn'];
    if (this.props.primary) {
      buttonClasses.push('mod-primary');
    }
    if (!this.props.enabled) {
      buttonClasses.push('state-disabled', 'disabled', 'text-medium-grey');
    }

    return this.getTemplate(buttonClasses.join(' '));
  }
}
