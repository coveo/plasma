import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import { IToastProps, Toast } from './Toast';
import { IToastState } from './ToastReducers';

export interface IToastContainerOwnProps {
  id?: string;
  classes?: string[];
}

export interface IToastContainerStateProps {
  toasts?: IToastState[];
}

export interface IToastContainerDispatchProps {
  onDestroy?: () => void;
  onRender?: () => void;
  onCloseToast?: (id: string) => void;
}

export interface IToastContainerProps extends IToastContainerOwnProps, IToastContainerStateProps, IToastContainerDispatchProps { }

export class ToastContainer extends React.Component<IToastContainerProps, void> {

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  private onCloseToast(id: string) {
    if (this.props.onCloseToast) {
      this.props.onCloseToast(id);
    }
  }

  render() {
    const classes = classNames('toast-container', this.props.classes);
    const toasts = this.props.toasts
      ? _.map(this.props.toasts, (toast: IToastProps) => {
        return <Toast key={toast.id} {...toast} onClose={() => this.onCloseToast(toast.id)} />;
      })
      : this.props.children;

    return (
      <div className={classes}>{toasts}</div>
    );
  }
}
