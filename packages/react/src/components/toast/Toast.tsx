import {CrossSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {
    ReactNode,
    FunctionComponent,
    ComponentClass,
    useState,
    useEffect,
    createElement,
    PropsWithChildren,
} from 'react';
import {LoadingSpinner} from '../loading/LoadingSpinner';

export interface IToastProps {
    /**
     * Unique identifier of the toast. Usefull to retrieve a specific toast in the redux state.
     */
    id?: string;
    /**
     * The content of the toast
     */
    title?: ReactNode;
    /**
     * The type of the toast
     *
     * @default "success"
     */
    type?: 'success' | 'warning' | 'error' | 'info' | 'download';
    /**
     * Timeout in ms after which the toast should disappear by itself
     */
    dismiss?: number;
    /**
     * @deprecated Toast are always dismissible by the user - will have no effect
     */
    dismissible?: boolean;
    /**
     * Whether the toast has an animation upon entry
     */
    animate?: boolean;
    /**
     * @deprecated Do not use - will have no effect
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
     * @deprecated Use children instead
     */
    content?: ReactNode;
    /**
     * @deprecated
     */
    onRender?: () => void;
    /**
     * @deprecated Use onClose instead
     */
    onDestroy?: () => void;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Notification instead: https://mantine.dev/core/notification/
 */
export const Toast: FunctionComponent<PropsWithChildren<IToastProps>> = ({
    title,
    type = 'success',
    dismiss,
    animate = true,
    className,
    children,
    onClose,
    content,
    onRender,
    onDestroy,
}) => {
    let timeout: number;

    const [isOpened, setIsOpened] = useState(true);

    useEffect(() => {
        onRender?.();
        handleSetTimeout();

        return () => {
            handleClearTimeout();
            onDestroy?.();
        };
    }, []);

    if (!isOpened) {
        return null;
    }

    const handleClose = () => {
        setIsOpened(false);
        onClose?.();
    };

    const handleSetTimeout = () => {
        if (dismiss > 0) {
            timeout = window.setTimeout(handleClose, dismiss);
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
        },
        className
    );

    const closeButton = (
        <button className="toast-close flex" onClick={handleClose}>
            <CrossSize24Px height={24} />
        </button>
    );

    const downloadToast = (
        <div className="toast-download-container flex flex-column">
            <div className="toast-title">
                {title}
                {closeButton}
            </div>
            <div className="toast-description">
                <div className="flex space-between">
                    {children}
                    <LoadingSpinner />
                </div>
            </div>
        </div>
    );

    const toastContent = (!!content || !!children) && (
        <div className="toast-description">
            <div>
                {children}
                {typeof content === 'string' || !content
                    ? content
                    : createElement(content as unknown as ComponentClass)}
            </div>
        </div>
    );

    return (
        <div className={classes} onMouseEnter={handleClearTimeout} onMouseLeave={handleSetTimeout}>
            {type === 'download' ? (
                downloadToast
            ) : (
                <>
                    <div className="toast-content-container">
                        {title && (
                            <div className="toast-title">
                                {title}
                                {closeButton}
                            </div>
                        )}
                        {toastContent}
                    </div>
                </>
            )}
        </div>
    );
};
