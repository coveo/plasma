import * as React from 'react';
import * as _ from 'underscore';
import {IInputProps, Input} from '../input/Input';
import {DeleteInputAction} from './DeleteInputAction';

export class DeletableInput extends React.Component<IInputProps, any> {
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
