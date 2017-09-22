import * as React from 'react';
import { ChildForm } from '../ChildForm';
import { RadioSelect } from '../../radio/RadioSelect';
import { Radio } from '../../radio/Radio';
import { Input } from '../../input/Input';
import { ToggleForm } from '../ToggleForm';
import { Label } from '../../input/Label';

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
          <Radio id={otherRadioValue} value={otherRadioValue} classes={['mb1']}>
            <Label>Option 1</Label>
          </Radio>
          <ToggleForm value={childFormRadioValue}>
            <Radio id={childFormRadioValue}>
              <Label>Option 2</Label>
            </Radio>
            <ChildForm>
              <Input value='Some value' classes={['input-field', 'form-group']}>
                <Label>Dependant Option</Label>
              </Input>
            </ChildForm>
          </ToggleForm>
        </RadioSelect>
      </div>
    );
  }
}
