import { Input } from '../Input';
import * as React from 'react';

export interface IInputExampleStateProps {
  inputClasses: string[];
}

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
    if (!inputValue) {
      this.setInputClasses('invalid');
    } else {
      this.setInputClasses('valid');
    }
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
            validMessage='Great!'
            invalidMessage='The input box must not be empty.'
            label='An Input Box'
            classes={['input-field', 'form-group', 'validate']}
            ref={(innerInput: Input) => this.innerInput = innerInput}
            onKeyUp={() => this.onChange()} />
        </div>
      </div>
    );
  }
}
