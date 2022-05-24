import classNames from 'classnames';
import {FunctionComponent} from 'react';

interface LoadingSpinnerProps {
    size?: number;
    className?: string;
}

export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({size = 24, className}) => (
    <div
        role="alert"
        aria-busy="true"
        className={classNames('loading-spinner', className)}
        style={{width: size, height: size}}
    />
);
