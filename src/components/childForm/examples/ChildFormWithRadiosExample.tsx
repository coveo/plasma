import * as React from 'react';
import { ChildForm } from '../ChildForm';
import { RadioSelect } from '../../radio/RadioSelect';
import { Radio } from '../../radio/Radio';
import { Input } from '../../input/Input';

export interface IChildFormWithRadiosExamplesProps {
  defaultValue?: string;
}

export interface IChildFormWithRadiosExamplesState {
  value: string;
}

const childFormRadioValue = 'child-form-radio-value';
const otherRadioValue = 'other-radio-value';

export class ChildFormWithRadiosExamples extends React.Component<IChildFormWithRadiosExamplesProps, IChildFormWithRadiosExamplesState> {
  constructor(props: IChildFormWithRadiosExamplesProps, state: IChildFormWithRadiosExamplesState) {
    super(props, state);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  handleChange(value: string) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>Child Form Element With Radio Buttons</label>
        <RadioSelect value={this.state.value} onChange={(value => this.handleChange(value))}>
          <Radio id={otherRadioValue} label='Option 1' value={otherRadioValue} classes={['mb1']} />
          <ChildForm parentControl={<Radio id={childFormRadioValue} label='Option 2' value={childFormRadioValue} />}>
            <Input label='Dependant Option' value='Some value' classes={['input-field', 'form-group']} />
          </ChildForm>
        </RadioSelect>
      </div>
    );
  }
}
