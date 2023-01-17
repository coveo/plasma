import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';
import {omit} from 'underscore';
import {IInputProps, Input} from '../input/Input.js';

export interface RadioOwnProps {
    outerContainerClass?: string;
    outerElementInContainer?: ReactNode;
}

export interface RadioProps extends RadioOwnProps, IInputProps {}

/**
 * @deprecated Use Mantine Radio instead: https://mantine.dev/core/radio/
 */
export const Radio: FunctionComponent<RadioProps> = (props) => {
    const outerContainerClasses: string =
        !!props.outerContainerClass && classNames('radio-option', props.outerContainerClass);
    const classes: string = classNames('radio-option', props.classes);
    return outerContainerClasses ? (
        <div className={outerContainerClasses}>
            <RadioInputContent props={props} classes={classes} />
        </div>
    ) : (
        <RadioInputContent props={props} classes={classes} />
    );
};

const RadioInputContent: FunctionComponent<{props: RadioProps; classes: string}> = ({props, classes}) => {
    const inputProps = omit(props, 'outerContainerClass', 'outerElementInContainer');
    return (
        <>
            <Input {...inputProps} classes={[classes]} type="radio" />
            {props.outerElementInContainer}
        </>
    );
};

Radio.defaultProps = {
    ...Input.defaultProps,
    checked: false,
    disabled: false,
};
