import * as React from 'react';
import * as _ from 'underscore';
import {IInputProps, Input} from '../input/Input';
import {AddInputAction} from './AddInputAction';

export class AddInput extends React.Component<IInputProps, any> {
    private innerInput: Input;

    private onAdd(): void {
        if (this.props.onBlur) {
            this.props.onBlur(this.innerInput.getInnerValue());
            this.innerInput.reset();
        }
    }

    private handleAddKeys(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            this.onAdd();
        }
    }

    render() {
        const props: IInputProps = _.omit(this.props, ['children']);
        props.onBlur = () => this.onAdd();
        props.onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => this.handleAddKeys(event);
        return (
            <Input ref={(innerInput: Input) => (this.innerInput = innerInput)} {...props}>
                {this.props.children}
                <AddInputAction onClick={() => this.onAdd()} />
            </Input>
        );
    }
}
