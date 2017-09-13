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
  handleToggle(value: string) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div className='form-control radio-select'>
        {
          ValidComponentChildren.map(this.props.children, (child: React.ReactElement<any>) => {
            const { value, onChange } = child.props;
            const handler = () => this.handleToggle(value);

            return React.cloneElement(child, {
              name: child.props.name || this.props.name,
              checked: this.props.value === value,
              disabled: this.props.disabled,
              onChange: createChainedFunction(onChange, handler),
            });
          }, null)
        }
      </div>
    );
  }
}
