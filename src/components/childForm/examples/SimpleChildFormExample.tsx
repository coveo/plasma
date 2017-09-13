import * as React from 'react';
import { ChildForm } from '../ChildForm';
import { Input } from '../../input/Input';
import { Checkbox } from '../../checkbox/Checkbox';

export interface ISimpleChildFormExampleProps {
  checked?: boolean;
}

export interface ISimpleChildFormExampleState {
  checked: boolean;
}

export class SimpleChildFormExample extends React.Component<ISimpleChildFormExampleProps, ISimpleChildFormExampleState> {
  constructor(props: ISimpleChildFormExampleProps, state: ISimpleChildFormExampleState) {
    super(props, state);
    this.state = {
      checked: this.props.checked
    };
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Child Form With a chexkbox</label>
        <ChildForm parentControl={<Checkbox label='Edit properties' />} checked={this.state.checked} onChange={() => this.handleChange()}>
          <Input label='Child form input' value='Some value' classes={['input-field', 'form-group']} />
        </ChildForm>
      </div>
    );
  }
}
