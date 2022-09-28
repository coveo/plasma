import classNames from 'classnames';
import {FunctionComponent} from 'react';

interface LoadingSpinnerProps {
    size?: number;
    className?: string;
}

/**
 * @deprecated Use Mantine Loader instead: https://mantine.dev/core/loader/
 */
export const LoadingSpinner: FunctionComponent<React.PropsWithChildren<LoadingSpinnerProps>> = ({
    size = 24,
    className,
}) => (
    <div
        role="alert"
        aria-busy="true"
        className={classNames('loading-spinner', className)}
        style={{width: size, height: size, minWidth: size}}
    />
);
