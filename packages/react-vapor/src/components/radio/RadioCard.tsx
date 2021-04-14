import classNames from 'classnames';
import * as React from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {IInputProps, Input} from '../input/Input';
import {Tooltip} from '../tooltip';

export interface RadioCardProps extends Omit<IInputProps, 'outerContainerClass' | 'outerElementInContainer'> {}

export const RadioCard: React.FunctionComponent<RadioCardProps> = (props) => {
    const classes = classNames('card', 'radio-card', props.classes);
    const containerClasses = 'radio-card-container m2';

    const {onClick, ...otherProps} = props;

    return props.disabled && props.disabledTooltip ? (
        <label onClick={props.onClick} className={containerClasses}>
            <Tooltip title={props.disabledTooltip} placement={TooltipPlacement.Bottom}>
                <RadioCardContent {...otherProps} classes={classes} />
            </Tooltip>
        </label>
    ) : (
        <label onClick={props.onClick} className={containerClasses}>
            <RadioCardContent {...otherProps} classes={classes} />
        </label>
    );
};

const RadioCardContent: React.FunctionComponent<RadioCardProps & {classes: string}> = ({
    classes,
    checked,
    id,
    name,
    disabled,
    onChange,
    children,
}) => (
    <>
        <input
            type="radio"
            className="card-input"
            id={id}
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={(event) => onChange(event.target.value)}
        />
        <div className={classes}>{children}</div>
    </>
);

RadioCard.defaultProps = {
    ...Input.defaultProps,
    checked: false,
    disabled: false,
};
