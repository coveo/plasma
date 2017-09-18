import * as React from 'react';
import { ValidComponentChildren } from '../../utils/ValidComponentChildren';
import * as classNames from 'classnames';

export interface IChildFormParentProps {
  checked?: boolean;
  onChange?: (value?: string) => void;
}

export interface IChildFormProps {
  classes?: string[];
  active?: boolean;
  onChange?: (value?: string) => void;
  parentControl: JSX.Element;
}

export class ChildForm extends React.Component<IChildFormProps, any> {
  private handleChange(value: string) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const classes: string = classNames('coveo-parent', this.props.classes);
    const parentElement = React.cloneElement(this.props.parentControl, {
      checked: this.props.active,
      onChange: (value: string) => this.handleChange(value),
    }, null);
    const children = ValidComponentChildren.map(this.props.children, (child: React.ReactElement<any>) => {
      return React.cloneElement(child, {
        disabled: !this.props.active
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
