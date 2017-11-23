// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

export interface IDropdownPrependProps {
  prepend: string;
  key?: string;
  children?: any;
}

export const DropdownPrepend = (props: IDropdownPrependProps): JSX.Element =>
  <span className='value-icon'>{props.prepend}{props.children}</span>;
