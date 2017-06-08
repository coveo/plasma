import * as React from 'react';
import * as _ from 'underscore';
import { IBaseActionOptions } from '../actions/Action';
import { Tooltip } from '../tooltip/Tooltip';

export class Button extends React.Component<IBaseActionOptions, any> {

  static defaultProps: Partial<IBaseActionOptions> = {
    enabled: true,
    name: '',
    tooltip: '',
    primary: false,
  };

  private onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  getTemplate(buttonClass: string): JSX.Element {
    let buttonElement: JSX.Element;

    const disabled: boolean = !this.props.enabled;

    if (this.props.link) {
      const target = this.props.target ? this.props.target : '';
      const rel = 'noopener noreferrer';
      const buttonAttrs = { disabled, target, rel };
      buttonElement = (
        <span className='btn-container' title={this.props.tooltip}>
          <a className={buttonClass}
            href={this.props.link}
            onClick={() => this.onClick()}
            {...buttonAttrs}>
            {this.props.name}
          </a>
        </span>);
    } else {
      const buttonAttrs = { disabled };
      buttonElement = (
        <button className={buttonClass}
          title={this.props.tooltip}
          onClick={() => this.onClick()}
          {...buttonAttrs}>
          {this.props.name}
        </button>);
    }

    const tooltipPlacement: string = this.props.tooltipPlacement || 'right';
    return !_.isEmpty(this.props.tooltip)
      ? <Tooltip title={this.props.tooltip}
        placement={tooltipPlacement}>
        {buttonElement}
      </Tooltip>
      : buttonElement;
  }

  render() {
    let buttonClasses = ['btn'];
    if (this.props.primary) {
      buttonClasses.push('mod-primary');
    }
    if (!this.props.enabled) {
      buttonClasses.push('disabled');
    }

    return this.getTemplate(buttonClasses.join(' '));
  }
}
