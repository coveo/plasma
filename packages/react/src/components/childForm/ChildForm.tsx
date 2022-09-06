import classNames from 'classnames';
import {HTMLAttributes, FunctionComponent} from 'react';

export interface IChildFormProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * CSS classes to set on the container element
     */
    className?: string;
    /**
     * @deprecated set your disabled state on each child component instead
     */
    disabled?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const ChildForm: FunctionComponent<IChildFormProps> = ({className, children}) => (
    <div className={classNames('coveo-child', className)}>{children}</div>
);
