import classNames from 'classnames';
import {FunctionComponent} from 'react';

export interface IFormGroupProps {
    title: string;
    description?: string;
    className?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const FormGroup: FunctionComponent<IFormGroupProps> = ({children, title, description, className}) => (
    <div className={classNames(className, 'form-group', 'mod-padding-children')}>
        <h3 className="bold">{title}</h3>
        {description && <p className="description">{description}</p>}
        {children}
    </div>
);
