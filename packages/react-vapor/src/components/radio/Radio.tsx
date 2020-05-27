import classNames from 'classnames';
import * as React from 'react';
import {IInputProps, Input} from '../input/Input';

export class Radio extends Input {
    static defaultProps: Partial<IInputProps> = {
        ...Input.defaultProps,
        checked: false,
        disabled: false,
    };

    render() {
        const classes: string = classNames('radio-option', this.props.classes);
        return <Input {...this.props} classes={[classes]} type="radio" />;
    }
}
