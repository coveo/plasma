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

    if (this.props.link) {
      const target = this.props.target ? `target="${this.props.target}" rel="noopener noreferrer"` : '';
      buttonElement = (
        <span className='btn-container' title={this.props.tooltip}>
          <a className={buttonClass}
            href={this.props.link}
            onClick={() => this.onClick()}
            {...target} >
            {this.props.name}
          </a>
        </span>);
    } else {
      buttonElement = (
        <button className={buttonClass}
          title={this.props.tooltip}
          onClick={() => this.onClick()}>
          {this.props.name}
        </button>);
    }

    const tooltipPlacement: string = this.props.tooltipPlacement || 'right';
    return !_.isEmpty(this.props.tooltip)
      ? <Tooltip title={this.props.tooltip}
        placement={tooltipPlacement}>
        {buttonElement}
      </Tooltip>
      : <span>
        {buttonElement}
      </span>;
  }

  render() {

    let buttonClasses = ['btn'];
    if (this.props.primary) {
      buttonClasses.push('mod-primary');
    }

    return this.getTemplate(buttonClasses.join(' '));
  }
}
