import * as React from 'react';
import { IInputBaseProps } from '../input/InputBase';
import * as classNames from 'classnames';

export interface ICheckboxProps extends IInputBaseProps {
  classes?: string[];
  label?: string;
  onChange?: () => void;
}

export class Checkbox extends React.Component<ICheckboxProps, any> {

  private handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (this.props.onChange) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onChange();
    }
  }

  render() {
    const classes: string = classNames('coveo-checkbox-label', this.props.classes);
    return (
      <label
        className={classes}
        onClick={(e: React.MouseEvent<HTMLLabelElement>) => this.handleClick(e)}>
        <input type='checkbox'
          className='coveo-checkbox'
          disabled={!!this.props.disabled}
          checked={!!this.props.checked}
          readOnly
        />
        <button type='button'></button>
        <span className='label'>{this.props.label}</span>
      </label>
    );
  }
}
