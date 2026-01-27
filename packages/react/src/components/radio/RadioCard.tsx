import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren} from 'react';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {IInputProps} from '../input/Input';
import {Tooltip} from '../tooltip';

export interface RadioCardProps extends Omit<IInputProps, 'outerContainerClass' | 'outerElementInContainer'> {}

/**
 * @deprecated Use Mantine Radio instead: https://mantine.dev/core/radio/
 */
export const RadioCard: FunctionComponent<RadioCardProps> = ({
    checked = false,
    disabled = false,
    onClick,
    disabledTooltip,
    classes: propsClasses,
    ...otherProps
}) => {
    const classes = classNames('card', 'radio-card', propsClasses);
    const containerClasses = 'radio-card-container m2';

    return disabled && disabledTooltip ? (
        <label onClick={onClick} className={containerClasses}>
            <Tooltip title={disabledTooltip} placement={TooltipPlacement.Bottom}>
                <RadioCardContent {...otherProps} classes={classes} checked={checked} disabled={disabled} />
            </Tooltip>
        </label>
    ) : (
        <label onClick={onClick} className={containerClasses}>
            <RadioCardContent {...otherProps} classes={classes} checked={checked} disabled={disabled} />
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
