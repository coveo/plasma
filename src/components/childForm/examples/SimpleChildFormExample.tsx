import * as React from 'react';
import { ChildForm } from '../ChildForm';
import { Input } from '../../input/Input';
import { Checkbox } from '../../checkbox/Checkbox';

export interface ISimpleChildFormExampleState {
  active: boolean;
}

export class SimpleChildFormExample extends React.Component<any, ISimpleChildFormExampleState> {
  constructor(props: any, state: ISimpleChildFormExampleState) {
    super(props, state);
    this.state = {
      active: true,
    };
  }

  handleChange() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Child Form With a Checkbox</label>
        <ChildForm
          parentControl={<Checkbox label='Edit properties' />}
          checked={this.state.active}
          onClick={() => this.handleChange()}>
          <Input
            label='Child form input'
            value='Some value'
            classes={['input-field', 'form-group']} />
        </ChildForm>
      </div>
    );
  }
}
