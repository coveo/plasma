import * as React from 'React';
import * as _ from 'underscore';
import { AddInputAction } from './AddInputAction';
import { IInputProps, Input } from '../input/Input';

export class AddInput extends React.Component<IInputProps, any> {
  private innerInput: Input;

  private onAdd(): void {
    if (this.props.onChange) {
      this.props.onChange(this.innerInput.innerValue());
      this.innerInput.reset();
    }
  }

  private handleAddKeys(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      this.onAdd();
    }
  }

  render() {
    let props: IInputProps = _.omit(this.props, ['children']);
    props.onChange = () => this.onAdd();
    props.onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => this.handleAddKeys(event);
    return (
      <Input ref={(innerInput: Input) => this.innerInput = innerInput} {...props}>
        <AddInputAction />
      </Input>
    );
  }
}
