import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {IToastProps, Toast} from './Toast';
import {IToastState} from './ToastReducers';

export interface IToastContainerOwnProps {
    id?: string;
    classes?: string[];
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
}

export interface IToastContainerStateProps {
    toasts?: IToastState[];
}

export interface IToastContainerDispatchProps {
    onDestroy?: () => void;
    onRender?: () => void;
    onCloseToast?: (id: string) => void;
}

export interface IToastContainerProps
    extends IToastContainerOwnProps,
        IToastContainerStateProps,
        IToastContainerDispatchProps {}

export class ToastContainer extends React.Component<IToastContainerProps, {}> {
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
        const classes = classNames('toast-container', this.props.classes, {
            'mod-bottom': this.props.bottom,
            'mod-left': this.props.left,
            'mod-right': this.props.right,
        });
        const toasts = this.props.toasts
            ? _.map(this.props.toasts, (toast: IToastProps) => (
                  <Toast
                      key={toast.id}
                      {...toast}
                      onClose={() => {
                          this.onCloseToast(toast.id);
                          toast.onClose?.();
                      }}
                  />
              ))
            : this.props.children;

        return <div className={classes}>{toasts}</div>;
    }
}
