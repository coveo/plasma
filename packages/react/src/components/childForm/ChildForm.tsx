import classNames from 'clsx';
import {HTMLAttributes, FunctionComponent, PropsWithChildren} from 'react';

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
export const ChildForm: FunctionComponent<PropsWithChildren<IChildFormProps>> = ({className, children}) => (
    <div className={classNames('coveo-child', className)}>{children}</div>
);
