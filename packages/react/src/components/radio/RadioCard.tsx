import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren} from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {IInputProps, Input} from '../input/Input';
import {Tooltip} from '../tooltip';

export interface RadioCardProps extends Omit<IInputProps, 'outerContainerClass' | 'outerElementInContainer'> {}

/**
 * @deprecated Use Mantine Radio instead: https://mantine.dev/core/radio/
 */
export const RadioCard: FunctionComponent<RadioCardProps> = (props) => {
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

const RadioCardContent: FunctionComponent<PropsWithChildren<RadioCardProps & {classes: string}>> = ({
    id,
    name,
    classes,
    checked,
    disabled,
    onChange,
    children,
}) => (
    <>
        <input
            id={id}
            name={name}
            type="radio"
            className="card-input"
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
