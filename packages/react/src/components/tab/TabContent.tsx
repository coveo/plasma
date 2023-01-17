import classNames from 'clsx';
import {HTMLAttributes, FunctionComponent, PropsWithChildren} from 'react';

export interface ITabContentProps extends HTMLAttributes<HTMLDivElement> {}

export const TabContent: FunctionComponent<PropsWithChildren<ITabContentProps>> = ({
    className,
    children,
    ...divProps
}) => (
    <div {...divProps} className={classNames('tab-content', className)}>
        {children}
    </div>
);
