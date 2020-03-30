import classNames from 'classnames';
import * as React from 'react';

export interface IFormGroupProps {
    title: string;
    description?: string;
    className?: string;
}

/*
 * @deprecated use the Section component
 */
export const FormGroup: React.FunctionComponent<IFormGroupProps> = ({children, title, description, className}) => (
    <div className={classNames(className, 'form-group', 'mod-padding-children')}>
        <h3 className="text-medium-blue bold">{title}</h3>
        {description && <p className="description">{description}</p>}
        {children}
    </div>
);
