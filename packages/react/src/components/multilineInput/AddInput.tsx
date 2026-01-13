import {KeyboardEvent, Component} from 'react';
import * as _ from 'underscore';
import {IInputProps, Input} from '../input/Input';
import {AddInputAction} from './AddInputAction';

/**
 * @deprecated Use Mantine instead
 */
export class AddInput extends Component<IInputProps, any> {
    private innerInput: Input;

    private onAdd(): void {
        if (this.props.onBlur) {
            this.props.onBlur(this.innerInput.getInnerValue());
            this.innerInput.reset();
        }
    }

    private handleAddKeys(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            this.onAdd();
        }
    }

    render() {
        const props: IInputProps = _.omit(this.props, ['children']);
        props.onBlur = () => this.onAdd();
        props.onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => this.handleAddKeys(event);
        return (
            <Input
                ref={(innerInput: Input) => {
                    this.innerInput = innerInput;
                }}
                {...props}
            >
                {this.props.children}
                <AddInputAction onClick={() => this.onAdd()} />
            </Input>
        );
    }
}
