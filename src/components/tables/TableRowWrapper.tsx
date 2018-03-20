import * as React from 'react';

export const TableRowWrapper = (props?: any): JSX.Element =>
    <tbody className={props.className}>{props.children}</tbody>;
