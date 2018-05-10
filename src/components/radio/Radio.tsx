import * as classNames from 'classnames';
import * as React from 'react';
import {Input} from '../input/Input';

export class Radio extends Input {
    render() {
        const classes: string = classNames('radio-option', this.props.classes);
        return (
            <Input
                {...this.props}
                classes={[classes]}
                type='radio'
            />
        );
    }
}
