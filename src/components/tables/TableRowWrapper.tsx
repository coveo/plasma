import * as React from 'react';

export interface ITableCollapsibleRowWrapperProps {
    collapsibleRow: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const TableCollapsibleRowWrapper = (props?: ITableCollapsibleRowWrapperProps): JSX.Element =>
    <tbody className={props.className}>
        {props.children}
        {props.collapsibleRow}
    </tbody>;
