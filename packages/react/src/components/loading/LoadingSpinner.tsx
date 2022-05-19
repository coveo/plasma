import classNames from 'classnames';
import {FunctionComponent} from 'react';

export const LoadingSpinner: FunctionComponent<{small?: boolean; className?: string}> = ({small, className}) => (
    <div role="alert" aria-busy="true" className={classNames('loading-spinner', {'mod-small': small}, className)} />
);
