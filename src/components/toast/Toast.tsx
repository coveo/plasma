import * as React from 'react';
import * as _ from 'underscore';
import * as classNames from 'classnames';
import { Svg } from '../svg/Svg';
import { ComponentContent } from '../../utils/ComponentUtils';

export interface IToastProps {
  id?: string;
  title?: string;
  isOpened?: boolean;
  type?: string;
  dismiss?: number;
  animate?: boolean;
  content?: ComponentContent;
  onRender?: () => void;
  onClose?: () => void;
  onDestroy?: () => void;
}

export const ToastType = {
  Success: 'Success',
  Warning: 'Warning',
  Error: 'Error',
};

export class Toast extends React.Component<IToastProps, {}> {
  private timeout: number;

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentDidMount() {
    this.setTimeout();
  }

  componentWillUnmount() {
    this.clearTimeout();

    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  private setTimeout() {
    if (this.props.dismiss > 0) {
      this.timeout = setTimeout(() => this.close(), this.props.dismiss);
    }
  }

  private clearTimeout() {
    clearTimeout(this.timeout);
  }

  private close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const classes = classNames('toast', {
      'mod-success': this.props.type !== ToastType.Warning && this.props.type !== ToastType.Error,
      'mod-warning': this.props.type === ToastType.Warning,
      'mod-error': this.props.type === ToastType.Error,
      'mod-animated': _.isUndefined(this.props.animate) || this.props.animate === true,
    });

    return (
      <div className={classes} onMouseEnter={() => this.clearTimeout()} onMouseLeave={() => this.setTimeout()}>
        <span className='toast-close' onClick={() => this.close()}>
          <Svg svgName='close' className='icon mod-lg fill-pure-white' />
        </span>
        <div className='toast-title'>{this.props.title}</div>
        {!!this.props.content
          ? <div className='toast-description'>{
            _.isString(this.props.content)
              ? this.props.content
              : <this.props.content />
          }</div>
          : null
        }
      </div>
    );
  }
}
