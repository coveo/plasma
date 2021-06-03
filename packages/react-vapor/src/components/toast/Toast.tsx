import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';

import {Svg} from '../svg/Svg';

export interface IToastProps {
    id?: string;
    title?: React.ReactNode;
    isOpened?: boolean;
    type?: string;
    dismiss?: number;
    dismissible?: boolean;
    animate?: boolean;
    isDownload?: boolean;
    isSmall?: boolean;
    className?: string;
    showInfoToken?: boolean;
    /**
     * @deprecated use children instead
     */
    content?: React.ReactNode;
    onRender?: () => void;
    onClose?: () => void;
    onDestroy?: () => void;
}

export const ToastType = {
    Success: 'Success',
    Warning: 'Warning',
    Error: 'Error',
    Info: 'Info',
};

const InfoTokenTypeMapping: Record<string, InfoTokenType> = {
    [ToastType.Info]: InfoTokenType.Information,
    [ToastType.Success]: InfoTokenType.Success,
    [ToastType.Warning]: InfoTokenType.Warning,
    [ToastType.Error]: InfoTokenType.Critical,
};

export class Toast extends React.Component<IToastProps> {
    private timeout: number;

    static defaultProps: Partial<IToastProps> = {
        dismissible: true,
        type: ToastType.Success,
        showInfoToken: true,
    };

    componentDidMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
        this.setTimeout();
    }

    componentWillUnmount() {
        this.clearTimeout();

        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    private setTimeout() {
        if (this.props.dismissible && this.props.dismiss > 0) {
            this.timeout = setTimeout(() => this.close(), this.props.dismiss) as any;
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
        const classes = classNames(
            'toast',
            {
                'mod-success': this.props.type === ToastType.Success || (!this.props.className && !this.props.type),
                'mod-warning': this.props.type === ToastType.Warning,
                'mod-error': this.props.type === ToastType.Error,
                'mod-info': this.props.type === ToastType.Info,
                'mod-animated': _.isUndefined(this.props.animate) || this.props.animate === true,
                'mod-small': this.props.isSmall,
            },
            this.props.className,
            {
                'toast-download': this.props.isDownload,
            }
        );

        const closeButton = this.props.dismissible && !this.props.isSmall && (
            <span className="toast-close" onClick={() => this.close()}>
                <Svg svgName="close" className="icon mod-lg" />
            </span>
        );

        const infoToken = !this.props.isSmall && !this.props.isDownload && (
            <InfoToken
                type={InfoTokenTypeMapping[this.props.type]}
                size={InfoTokenSize.Large}
                mode={InfoTokenMode.Filled}
            />
        );

        const downloadToast = (
            <div className="toast-download-container flex flex-column">
                <div className="toast-title">{this.props.title}</div>
                <div className="toast-description">
                    <div className="flex space-between">
                        {this.props.children}
                        <div className="spinner-container relative">
                            <div className="search-bar-spinner" />
                        </div>
                    </div>
                </div>
            </div>
        );

        const toastContent = (!!this.props.content || !!this.props.children) && !this.props.isSmall && (
            <div className="toast-description">
                <div>
                    {this.props.children}
                    {_.isString(this.props.content) || !this.props.content
                        ? this.props.content
                        : React.createElement(this.props.content as React.ComponentClass)}
                </div>
            </div>
        );

        return (
            <div className={classes} onMouseEnter={() => this.clearTimeout()} onMouseLeave={() => this.setTimeout()}>
                {this.props.isDownload ? (
                    downloadToast
                ) : (
                    <>
                        {this.props.showInfoToken ? infoToken : null}
                        <div className="toast-content-container">
                            {this.props.title && <div className="toast-title">{this.props.title}</div>}
                            {toastContent}
                        </div>
                        {closeButton}
                    </>
                )}
            </div>
        );
    }
}
