import classNames from 'clsx';
import {ReactNode, FunctionComponent} from 'react';
import {IInputProps, Input} from '../input/Input';

export interface RadioOwnProps {
    outerContainerClass?: string;
    outerElementInContainer?: ReactNode;
}

export interface RadioProps extends RadioOwnProps, IInputProps {}

/**
 * @deprecated Use Mantine Radio instead: https://mantine.dev/core/radio/
 */
export const Radio: FunctionComponent<RadioProps> = ({
    checked = false,
    disabled = false,
    outerContainerClass,
    outerElementInContainer,
    classes,
    ...otherProps
}) => {
    const outerContainerClasses: string = !!outerContainerClass && classNames('radio-option', outerContainerClass);
    const radioClasses: string = classNames('radio-option', classes);
    const content = (
        <RadioInputContent
            inputProps={{...otherProps, checked, disabled}}
            classes={radioClasses}
            outerElementInContainer={outerElementInContainer}
        />
    );
    return outerContainerClasses ? <div className={outerContainerClasses}>{content}</div> : content;
};

const RadioInputContent: FunctionComponent<{
    inputProps: Omit<RadioProps, 'outerContainerClass' | 'outerElementInContainer'>;
    classes: string;
    outerElementInContainer?: ReactNode;
}> = ({inputProps, classes, outerElementInContainer}) => (
    <>
        <Input {...inputProps} classes={[classes]} type="radio" />
        {outerElementInContainer}
    </>
);
