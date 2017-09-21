import * as React from 'react';
import * as classNames from 'classnames';
import { Input } from '../input/Input';

export class Checkbox extends Input {

  private onClick(e: React.MouseEvent<HTMLElement>) {
    if (this.props.onClick) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onClick(e);
    }
  }

  render() {
    const classes: string = classNames('coveo-checkbox-label', this.props.classes);
    const innerInputClasses: string = classNames('coveo-checkbox', this.props.innerInputClasses);
    return (
      <Input
        {...this.props}
        classes={[classes]}
        innerInputClasses={[innerInputClasses]}
        type='checkbox'
        onClick={(e: React.MouseEvent<HTMLElement>) => this.onClick(e)}
        readOnly>
        <button></button>
        {this.props.children}
      </Input>
    );
  }
}
