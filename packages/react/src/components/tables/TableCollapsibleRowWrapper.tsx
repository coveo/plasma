import {ReactNode} from 'react';

export interface ITableCollapsibleRowWrapperProps {
    children?: ReactNode;
    className?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableCollapsibleRowWrapper = (props?: ITableCollapsibleRowWrapperProps): JSX.Element => (
    <tbody className={props.className}>{props.children}</tbody>
);
