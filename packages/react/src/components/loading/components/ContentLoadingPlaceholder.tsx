import classNames from 'classnames';
import * as React from 'react';

export interface IContentLoadingPlaceholder {
    className?: string;
}

export const ContentLoadingPlaceholder: React.FunctionComponent<IContentLoadingPlaceholder> = ({
    className = '',
    children,
}) => <div className={classNames('text-content-placeholder', className)}>{children}</div>;
