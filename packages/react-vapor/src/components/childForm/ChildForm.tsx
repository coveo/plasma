import classNames from 'classnames';
import * as React from 'react';

export interface IChildFormProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    disabled?: boolean;
}

export const ChildForm: React.FunctionComponent<IChildFormProps> = ({className, children}) => (
    <div className={classNames('coveo-child', className)}>{children}</div>
);
