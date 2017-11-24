import * as React from 'react';
import * as _ from 'underscore';
import { DeleteInputAction } from './DeleteInputAction';
import { Input, IInputProps } from '../input/Input';

export class DeletableInput extends React.Component<IInputProps, any> {
  private onDeleteClicked() {
    if (this.props.onBlur) {
      this.props.onBlur('');
    }
  }

  render() {
    const props: IInputProps = _.omit(this.props, ['children']);
    return (
      <Input {...props }>
        {this.props.children}
        <DeleteInputAction onClick={() => this.onDeleteClicked()} />
      </Input>
    );
  }
}
