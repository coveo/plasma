import classNames from 'classnames';
import {FunctionComponent} from 'react';

export interface IContentLoadingPlaceholder {
    className?: string;
}

export const ContentLoadingPlaceholder: FunctionComponent<IContentLoadingPlaceholder> = ({
    className = '',
    children,
}) => <div className={classNames('text-content-placeholder', className)}>{children}</div>;
