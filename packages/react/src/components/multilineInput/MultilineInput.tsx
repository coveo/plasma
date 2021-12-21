import * as React from 'react';
import * as _ from 'underscore';

import {UUID} from '../../utils/UUID';
import {Label} from '../input/Label';
import {AddInput} from './AddInput';
import {DeletableInput} from './DeletableInput';

export interface IMultilineInputValue {
    id: string;
    value: string;
}

export interface IMultilineInputOwnProps {
    id?: string;
    placeholder?: string;
    title?: string;
    invalidMessage?: string;
    validate?: (value: string) => boolean;
}

export interface IMultilineInputStateProps {
    values?: IMultilineInputValue[];
}

export interface IMultilineInputDispatchProps {
    onChange?: (values: IMultilineInputValue[]) => void;
}

export interface IMultilineInputProps
    extends IMultilineInputOwnProps,
        IMultilineInputStateProps,
        IMultilineInputDispatchProps {}

/**
 * @deprecated use MultiValuesInput instead
 */
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
        const currentInput = _.findWhere(this.props.values, {id});
        const nextValues = _.without(this.props.values, currentInput);
        this.handleChange(nextValues);
    }

    private updateValue(id: string, value: string) {
        const inputIndex = _.findIndex(this.props.values, {id});
        const nextValues = this.props.values;
        nextValues[inputIndex] = {
            id,
            value,
        };
        this.handleChange(nextValues);
    }

    private handleAddInputChange(value: string) {
        if (value) {
            const nextValues = this.props.values ? this.props.values : [];
            nextValues.push({id: UUID.generate(), value});
            this.handleChange(nextValues);
        }
    }

    private getDeletableInput(inputValue: IMultilineInputValue, index: number): JSX.Element {
        return (
            <li key={`delete-input-${inputValue.id}`}>
                <DeletableInput
                    placeholder={this.props.placeholder}
                    value={inputValue.value}
                    onBlur={(newValue: string) => this.handleDeleteInputChange(newValue, inputValue.id)}
                >
                    <Label>{index === 0 ? this.props.title : ''}</Label>
                </DeletableInput>
            </li>
        );
    }

    render() {
        const deletableInputs: JSX.Element[] = this.props.values
            ? this.props.values.map((input: IMultilineInputValue, index: number) =>
                  this.getDeletableInput(input, index)
              )
            : null;

        return (
            <div className="input-field multiline-field form-group">
                <ul>{deletableInputs}</ul>
                <AddInput
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    value=""
                    onBlur={(newValue: string) => this.handleAddInputChange(newValue)}
                    labelProps={{invalidMessage: this.props.invalidMessage}}
                    validate={this.props.validate}
                >
                    <Label classes={this.props.values && this.props.values.length === 0 ? ['first-label'] : []}>
                        {this.props.title}
                    </Label>
                </AddInput>
            </div>
        );
    }
}
