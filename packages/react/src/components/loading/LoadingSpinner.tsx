import classNames from 'clsx';
import {FunctionComponent} from 'react';

interface LoadingSpinnerProps {
    size?: number;
    className?: string;
}

/**
 * @deprecated Use Mantine Loader instead: https://mantine.dev/core/loader/
 */
export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({size = 24, className}) => (
    <div
        role="alert"
        aria-busy="true"
        className={classNames('loading-spinner', className)}
        style={{width: size, height: size, minWidth: size}}
    />
);
