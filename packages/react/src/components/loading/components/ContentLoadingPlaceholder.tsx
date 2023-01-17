import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren} from 'react';

export interface IContentLoadingPlaceholder {
    className?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const ContentLoadingPlaceholder: FunctionComponent<PropsWithChildren<IContentLoadingPlaceholder>> = ({
    className = '',
    children,
}) => <div className={classNames('text-content-placeholder', className)}>{children}</div>;
