import classNames from 'classnames';
import {HTMLAttributes, FunctionComponent} from 'react';

export interface ITabContentProps extends HTMLAttributes<HTMLDivElement> {}

export const TabContent: FunctionComponent<ITabContentProps> = ({className, children, ...divProps}) => (
    <div {...divProps} className={classNames('tab-content', className)}>
        {children}
    </div>
);
