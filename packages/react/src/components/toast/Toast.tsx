import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';
import {Svg} from '../svg/Svg';

export interface IToastProps {
    /**
     * Unique identifier of the toast. Usefull to retrieve a specific toast in the redux state.
     */
    id?: string;
    /**
     * The content of the toast
     */
    title?: React.ReactNode;
    /**
     * The type of the toast (default is "success")
     */
    type?: 'success' | 'warning' | 'error' | 'info' | 'download';
    /**
     * Timeout in ms after which the toast should disappear by itself
     */
    dismiss?: number;
    /**
     * Whether the toast can be dismissed manually
     */
    dismissible?: boolean;
    /**
     * Whether the toast has an animation upon entry
     */
    animate?: boolean;
    /**
     * The toast will be smaller in size when true
     */
    isSmall?: boolean;
    /**
     * Additional css classes that the toast should have
     */
    className?: string;
    /**
     * Callback function that will run after the toast is dismissed
     */
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
     * @deprecated - Use onClose instead
     */
    onDestroy?: () => void;
}

const InfoTokenTypeMapping: Record<IToastProps['type'], InfoTokenType> = {
    info: InfoTokenType.Information,
    success: InfoTokenType.Success,
    warning: InfoTokenType.Warning,
    error: InfoTokenType.Critical,
    download: null,
};

/**
 * A toast should be a short notif and not a lengthy piece of daily news,
 * so a character limit of ~150 max is recommended
 */

export const Toast: React.FC<IToastProps> = ({
    title,
    type = 'success',
    dismiss,
    dismissible = true,
    animate = true,
    isSmall,
    className,
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
            'mod-success': type === 'success' || (!className && !type),
            'mod-warning': type === 'warning',
            'mod-error': type === 'error',
            'mod-info': type === 'info',
            'mod-download': type === 'download',
            'mod-animated': animate,
            'mod-small': isSmall,
        },
        className
    );

    const closeButton = dismissible && !isSmall && (
        <span className="toast-close" onClick={() => onClose?.()}>
            <Svg svgName="close" className="icon mod-lg" />
        </span>
    );

    const infoToken = !isSmall && type !== 'download' && (
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
            {type === 'download' ? (
                downloadToast
            ) : (
                <>
                    {infoToken}
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
