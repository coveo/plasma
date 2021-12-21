import classNames from 'classnames';
import * as React from 'react';

export interface ITabContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabContent: React.FunctionComponent<ITabContentProps> = ({className, children, ...divProps}) => (
    <div {...divProps} className={classNames('tab-content', className)}>
        {children}
    </div>
);
