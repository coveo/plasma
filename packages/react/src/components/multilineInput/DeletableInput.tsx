import {Component} from 'react';
import * as _ from 'underscore';
import {IInputProps} from '../input/Input';

export class DeletableInput extends Component<IInputProps, any> {
    private onDeleteClicked() {
        if (this.props.onBlur) {
            this.props.onBlur('');
        }
    }

    render() {
        const props: IInputProps = _.omit(this.props, ['children']);
        return (
            <Input {...props}>
                {this.props.children}
                <DeleteInputAction onClick={() => this.onDeleteClicked()} />
            </Input>
        );
    }
}
