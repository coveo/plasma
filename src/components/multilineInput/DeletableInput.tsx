import * as React from 'react';
import * as _ from 'underscore';
import { DeleteInputAction } from './DeleteInputAction';
import { Input, IInputProps } from '../input/Input';

export class DeletableInput extends React.Component<IInputProps, any> {
  private onDeleteClicked() {
    if (this.props.onChange) {
      this.props.onChange('');
    }
  }

  render() {
    const props: IInputProps = _.omit(this.props, ['children']);
    return (
      <Input {...props }>
        <DeleteInputAction onClick={() => this.onDeleteClicked()} />
      </Input>
    );
  }
}
