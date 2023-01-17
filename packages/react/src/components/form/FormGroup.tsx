import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren} from 'react';

export interface IFormGroupProps {
    title: string;
    description?: string;
    className?: string;
}

/**
 * @deprecated Use Mantine use-form instead: https://mantine.dev/form/use-form/
 */
export const FormGroup: FunctionComponent<PropsWithChildren<IFormGroupProps>> = ({
    children,
    title,
    description,
    className,
}) => (
    <div className={classNames(className, 'form-group', 'mod-padding-children')}>
        <h3 className="bold">{title}</h3>
        {description && <p className="description">{description}</p>}
        {children}
    </div>
);
