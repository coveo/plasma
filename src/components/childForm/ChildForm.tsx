import * as React from 'react';
import { ValidComponentChildren } from '../../utils/ValidComponentChildren';
import * as classNames from 'classnames';
import { IInputProps } from '../input/Input';

export interface IChildFormProps {
  classes?: string[];
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  parentControl: React.ReactElement<IInputProps>;
  value?: string;
}

export class ChildForm extends React.Component<IChildFormProps, any> {
  private handleClick(e: React.MouseEvent<HTMLElement>) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const classes: string = classNames('coveo-parent', this.props.classes);
    const parentElement: React.ReactElement<IInputProps> = React.cloneElement(this.props.parentControl as React.ReactElement<any>, {
      checked: this.props.checked,
      onClick: (e: React.MouseEvent<HTMLElement>) => this.handleClick(e),
    }, null);

    const children = ValidComponentChildren.map(this.props.children, (child: React.ReactElement<any>) => {
      return React.cloneElement(child, {
        disabled: !this.props.checked
      });
    }, null);

    return (
      <div className={classes}>
        {parentElement}
        <div className='coveo-child'>
          {children}
        </div>
      </div>
    );
  }
}
