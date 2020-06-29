import classNames from 'classnames';
import * as React from 'react';
import {IInputProps, Input} from '../input/Input';

export interface RadioOwnProps {
    outerContainerClass?: string;
    outerElementInContainer?: React.ReactNode;
}

export interface RadioProps extends RadioOwnProps, IInputProps {}

export class Radio extends React.PureComponent<RadioProps> {
    static defaultProps: Partial<RadioProps> = {
        ...Input.defaultProps,
        checked: false,
        disabled: false,
    };

    private getRadioInputContent = (props: RadioProps, classes: string): React.ReactNode => {
        type InputProps = Omit<RadioProps, 'elementOuterContainer | outerContainerClasses'>;
        const inputProps: InputProps = {...props};
        return (
            <>
                <Input {...inputProps} classes={[classes]} type="radio" />
                {props.outerElementInContainer}
            </>
        );
    };

    render() {
        const outerContainerClasses: string =
            !!this.props.outerContainerClass && classNames('radio-option', this.props.outerContainerClass);
        const classes: string = classNames('radio-option', this.props.classes);
        return outerContainerClasses ? (
            <div className={outerContainerClasses}>{this.getRadioInputContent({...this.props}, classes)}</div>
        ) : (
            <>{this.getRadioInputContent({...this.props}, classes)}</>
        );
    }
}
