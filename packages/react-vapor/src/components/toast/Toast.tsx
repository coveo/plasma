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
    onClose?: () => void;
    /**
     * @deprecated use children instead
     */
    content?: React.ReactNode;
    /**
     * @deprecated
     */
    onRender?: () => void;
    /**
     * @deprecated - can't find any instances in RV or Admin that use this but leaving in just case
     */
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

/**
 * A toast should be a short notif and not a lengthy piece of daily news,
 * so a character limit of ~150 max is recommended
 */

export const Toast: React.FC<IToastProps> = ({
    title,
    type = ToastType.Success,
    dismiss,
    dismissible = true,
    animate,
    isDownload,
    isSmall,
    className,
    showInfoToken = true,
    children,
    onClose,
    content,
    onRender,
    onDestroy,
}) => {
    let timeout: number;

    React.useEffect(() => {
        onRender?.();
        handleSetTimeout();

        return () => {
            clearTimeout();
            onDestroy?.();
        };
    }, []);

    const handleSetTimeout = () => {
        if (dismissible && dismiss > 0) {
            timeout = setTimeout(() => onClose?.(), dismiss) as any;
        }
    };

    const handleClearTimeout = () => {
        clearTimeout(timeout);
    };

    const classes = classNames(
        'toast',
        {
            'mod-success': type === ToastType.Success || (!className && !type),
            'mod-warning': type === ToastType.Warning,
            'mod-error': type === ToastType.Error,
            'mod-info': type === ToastType.Info,
            'mod-animated': _.isUndefined(animate) || animate === true,
            'mod-small': isSmall,
        },
        className,
        {
            'toast-download': isDownload,
        }
    );

    const closeButton = dismissible && !isSmall && (
        <span className="toast-close" onClick={() => onClose?.()}>
            <Svg svgName="close" className="icon mod-lg" />
        </span>
    );

    const infoToken = !isSmall && !isDownload && (
        <InfoToken type={InfoTokenTypeMapping[type]} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
    );

    const downloadToast = (
        <div className="toast-download-container flex flex-column">
            <div className="toast-title">{title}</div>
            <div className="toast-description">
                <div className="flex space-between">
                    {children}
                    <div className="spinner-container relative">
                        <div className="search-bar-spinner" />
                    </div>
                </div>
            </div>
        </div>
    );

    const toastContent = (!!content || !!children) && !isSmall && (
        <div className="toast-description">
            <div>
                {children}
                {_.isString(content) || !content ? content : React.createElement(content as React.ComponentClass)}
            </div>
        </div>
    );

    return (
        <div className={classes} onMouseEnter={() => handleClearTimeout()} onMouseLeave={() => handleSetTimeout()}>
            {isDownload ? (
                downloadToast
            ) : (
                <>
                    {showInfoToken ? infoToken : null}
                    <div className="toast-content-container">
                        {title && <div className="toast-title">{title}</div>}
                        {toastContent}
                    </div>
                    {closeButton}
                </>
            )}
        </div>
    );
};
