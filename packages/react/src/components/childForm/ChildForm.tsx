import classNames from 'classnames';
import * as React from 'react';

export interface IChildFormProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * CSS classes to set on the container element
     */
    className?: string;
    /**
     * @deprecated set your disabled state on each child component instead
     */
    disabled?: boolean;
}

export const ChildForm: React.FunctionComponent<IChildFormProps> = ({className, children}) => (
    <div className={classNames('coveo-child', className)}>{children}</div>
);
