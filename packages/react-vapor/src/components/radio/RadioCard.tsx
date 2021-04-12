import classNames from 'classnames';
import * as React from 'react';
import {IInputProps, Input} from '../input/Input';

export interface RadioCardProps extends IInputProps {}

export const RadioCard: React.FunctionComponent<RadioCardProps> = (props) => (
    <label onClick={props.onClick} className="radio-card-container">
        <input
            type="radio"
            checked={props.checked}
            id={props.id}
            name={props.name}
            className="card-input"
            disabled={props.disabled}
        />
        <div className={classNames('radio-card', props.classes)}>{props.children}</div>
    </label>
);

RadioCard.defaultProps = {
    ...Input.defaultProps,
    checked: false,
    disabled: false,
};
