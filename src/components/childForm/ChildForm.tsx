import * as React from 'react';
import { ValidComponentChildren } from '../../utils/ValidComponentChildren';

export interface IChildFormProps {
  classes?: string[];
  checked?: boolean;
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
    const classes: string[] = ['coveo-parent'].concat(this.props.classes);
    return (
      <div className={classes.join(' ')}>
        {
          React.cloneElement(this.props.parentControl, {
            checked: this.props.checked,
            onChange: (value: string) => this.handleChange(value)
          }, null)
        }
        <div className='coveo-child'>
          {
            ValidComponentChildren.map(this.props.children, (child: any) => {
              return React.cloneElement(child, {
                disabled: !this.props.checked
              });
            }, null)}
        </div>
      </div>
    );
  }
}
