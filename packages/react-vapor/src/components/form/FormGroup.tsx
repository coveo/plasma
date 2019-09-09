import * as classNames from 'classnames';
import * as React from 'react';

export interface IFormGroupProps {
    title: string;
    description?: string;
    className?: string | string[];
    children?: React.ReactNode;
}

export const FormGroup = ({children, title, description, className}: IFormGroupProps) => (
    <div className={classNames(className, 'form-group', 'mod-padding-children')}>
        <h3 className="text-medium-blue bold">{title}</h3>
        {description && <p className="description">{description}</p>}
        {children}
    </div>
);
