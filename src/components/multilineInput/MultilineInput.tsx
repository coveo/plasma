import * as React from 'React';
import * as _ from 'underscore';
import { UUID } from '../../utils/UUID';
import { DeleteInput } from './DeleteInput';
import { AddInput } from './AddInput';

export interface IMultilineInputValue {
  id: string;
  value: string;
}

export interface IMultilineInputOwnProps {
  id?: string;
  placeholder?: string;
  title?: string;
}

export interface IMultilineInputStateProps {
  values?: IMultilineInputValue[];
}

export interface IMultilineInputDispatchProps {
  onChange?: (values: IMultilineInputValue[]) => void;
}

export interface IMultilineInputProps extends IMultilineInputOwnProps, IMultilineInputStateProps, IMultilineInputDispatchProps { }

export class MultilineInput extends React.Component<IMultilineInputProps, any> {
  private handleChange(newValues: IMultilineInputValue[]) {
    if (this.props.onChange) {
      this.props.onChange(newValues);
    }
  }

  private handleDeleteInputChange(value: string, id: string) {
    if (!value) {
      this.removeValue(id);
    } else {
      this.updateValue(id, value);
    }
  }

  private removeValue(id: string) {
    let currentInput = _.findWhere(this.props.values, { id });
    let nextValues = _.without(this.props.values, currentInput);
    this.handleChange(nextValues);
  }

  private updateValue(id: string, value: string) {
    let inputIndex = _.indexOf(this.props.values, { id });
    let nextValues = this.props.values;
    nextValues[inputIndex] = {
      id,
      value
    };
    this.handleChange(nextValues);
  }

  private handleAddInputChange(value: string) {
    if (value) {
      let nextValues = this.props.values ? this.props.values : [];
      nextValues.push({ id: UUID.generate(), value });
      this.handleChange(nextValues);
    }
  }

  private getDeleteInput(inputValue: IMultilineInputValue, index: number): JSX.Element {
    return (
      <li key={`delete-input-${inputValue.id}`}>
        <DeleteInput
          title={index === 0 ? this.props.title : ''}
          placeholder={this.props.placeholder}
          value={inputValue.value}
          onChange={(newValue: string) => this.handleDeleteInputChange(newValue, inputValue.id)}
        />
      </li>
    );
  }

  render() {
    let deleteInputs: JSX.Element[] = this.props.values ? this.props.values.map((input: IMultilineInputValue, index: number) => {
      return this.getDeleteInput(input, index);
    }) : null;

    return (
      <div className='input-field multiline-field form-group'>
        <ul>
          {deleteInputs}
        </ul>
        <AddInput
          title={this.props.title}
          labelClasses={this.props.values && this.props.values.length < 1 ? ['first-label'] : []}
          placeholder={this.props.placeholder}
          value=''
          onChange={(newValue: string) => this.handleAddInputChange(newValue)}
        />
      </div>
    );
  }
}

