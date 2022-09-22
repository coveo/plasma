import classNames from 'classnames';
import {FunctionComponent} from 'react';

export interface IContentLoadingPlaceholder {
    className?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const ContentLoadingPlaceholder: FunctionComponent<React.PropsWithChildren<IContentLoadingPlaceholder>> = ({
    className = '',
    children,
}) => <div className={classNames('text-content-placeholder', className)}>{children}</div>;
