import * as React from 'react';
import { ValidComponentChildren } from '../../utils/ValidComponentChildren';
import { createChainedFunction } from '../../utils/createChainedFunction';

export interface IRadioSelectProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export class RadioSelect extends React.Component<IRadioSelectProps, any> {
  private handleToggle(value: string) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const children = ValidComponentChildren.map(this.props.children, (child: React.ReactElement<any>) => {
      return React.cloneElement(child, {
        name: child.props.name || this.props.name,
        checked: this.props.value === child.props.value,
        disabled: this.props.disabled,
        onChange: () => {
          child.props.onChange && child.props.onChange();
          this.handleToggle(child.props.value);
        },
      });
    }, null);

    return (
      <div className='form-control radio-select'>
        {children}
      </div>
    );
  }
}
