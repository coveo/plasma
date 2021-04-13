import classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {IInputProps, Input} from '../input/Input';
import {Tooltip} from '../tooltip';

export interface RadioCardProps extends Omit<IInputProps, 'outerContainerClass' | 'outerElementInContainer'> {}

export const RadioCard: React.FunctionComponent<RadioCardProps> = (props) => {
    const classes = classNames('radio-card', props.classes);
    const containerClasses = 'radio-card-container m2';

    return props.disabled && props.disabledTooltip ? (
        <label onClick={props.onClick} className={containerClasses}>
            <Tooltip title={props.disabledTooltip} placement={TooltipPlacement.Bottom}>
                <RadioCardContent props={props} classes={classes} />
            </Tooltip>
        </label>
    ) : (
        <label onClick={props.onClick} className={containerClasses}>
            <RadioCardContent props={props} classes={classes} />
        </label>
    );
};

const RadioCardContent: React.FunctionComponent<{props: RadioCardProps; classes: string}> = ({props, classes}) => {
    // const inputProps = omit(props, ['children', 'classes']);
    const inputProps = {
        type: 'radio',
        checked: props.checked,
        id: props.id,
        name: props.name,
        className: 'card-input',
        disabled: props.disabled,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value),
    };
    return (
        <>
            <input {...inputProps} />
            <div className={classes}>{props.children}</div>
        </>
    );
};

RadioCard.defaultProps = {
    ...Input.defaultProps,
    checked: false,
    disabled: false,
};
