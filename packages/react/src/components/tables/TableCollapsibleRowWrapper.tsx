import * as React from 'react';

export interface ITableCollapsibleRowWrapperProps {
    children?: React.ReactNode;
    className?: string;
}

export const TableCollapsibleRowWrapper = (props?: ITableCollapsibleRowWrapperProps): JSX.Element => (
    <tbody className={props.className}>{props.children}</tbody>
);
