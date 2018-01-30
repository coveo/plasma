import { Input } from '../Input';
import { InputConnected } from '../InputConnected';
import { ReactVaporStore } from '../../../../docs/ReactVaporStore';
import { setDisabledInput, validateInputValue } from '../InputActions';
import * as React from 'react';
import { Label } from '../Label';
import { findWhere } from 'underscore';

export interface IInputExampleStateProps {
  inputClasses: string[];
}

const validate = (value: any) => !!value;

export class InputExamples extends React.Component<any, IInputExampleStateProps> {
  private innerInput: Input;

  constructor(props: any, state: IInputExampleStateProps) {
    super(props, state);

    this.state = {
      inputClasses: []
    };
  }

  private onChange() {
    const inputValue = this.innerInput.getInnerValue();
    this.setInputClasses(inputValue ? 'valid' : 'invalid');
  }

  setInputClasses(className: string) {
    this.setState({
      inputClasses: [className]
    });
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <Input
            innerInputClasses={this.state.inputClasses}
            placeholder='Please, do not leave me empty!'
            ref={(innerInput: Input) => this.innerInput = innerInput}
            onKeyUp={() => this.onChange()}>
            <Label
              validMessage='Great!'
              invalidMessage='The input box must not be empty.'>
              An Input Box
            </Label>
          </Input>
          <InputConnected
            id='super-input'
            validate={validate}
            labelTitle='I am a connected input'
            labelProps={{ validMessage: 'I am valid', invalidMessage: 'Do not leave me empty' }}
          />
          <InputConnected
            id='super-input-2'
            validate={validate}
            labelTitle='I am a disabled connected input'
            labelProps={{ invalidMessage: 'Do not leave me empty' }}
            disabledOnMount={true}
            defaultValue='I am disabled on mount'
          />
          <button className='mt2 mb2' onClick={() => {
            ReactVaporStore.dispatch(setDisabledInput(
              'super-input-3',
              !findWhere(ReactVaporStore.getState().inputs, { id: 'super-input-3' }).disabled,
            ));
          }}>
            Toggle disabled state
          </button>
          <InputConnected
            id='super-input-3'
            validate={validate}
            labelTitle='Toggle my disabled state with the button above'
            labelProps={{ invalidMessage: 'Do not leave me empty' }}
            defaultValue='awesome disabled feature'
          />
          <button className='mt2 mb2' onClick={() => {
            ReactVaporStore.dispatch(validateInputValue(
              'super-input-4',
              validate(findWhere(ReactVaporStore.getState().inputs, { id: 'super-input-4' }).value),
            ));
          }}>
            Toggle valid state
          </button>
          <InputConnected
            id='super-input-4'
            classes='mt1'
            validate={validate}
            labelTitle='Toggle my valid state with the button above'
            labelProps={{ invalidMessage: 'Do not leave me empty' }}
            defaultValue='awesome valid feature'
          />
        </div>
      </div>
    );
  }
}
