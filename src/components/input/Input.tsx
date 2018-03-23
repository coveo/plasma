import * as classNames from 'classnames';
import * as React from 'react';
import {contains, isUndefined} from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {ILabelProps, Label} from './Label';

export interface IInputOwnProps {
    id?: string;
    name?: string;
    type?: string;
    classes?: IClassName;
    innerInputClasses?: IClassName;
    defaultValue?: string;
    placeholder?: string;
    defaultChecked?: boolean;
    readOnly?: boolean;
    validate?: (value: any) => boolean;
    labelTitle?: string;
    labelProps?: ILabelProps;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (value: string) => void;
    validateOnChange?: boolean;
    disabledOnMount?: boolean;
    validateOnMount?: boolean;
    rawInput?: boolean;
    onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>, value?: string, valid?: boolean) => void;
}

export interface IInputStateProps {
    checked?: boolean;
    disabled?: boolean;
    value?: string;
    valid?: boolean;
}

export interface IInputDispatchProps {
    onDestroy?: () => void;
    onRender?: (value?: string, valid?: boolean, disabled?: boolean) => void;
    onChange?: (value?: string, valid?: boolean) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IInputProps extends IInputOwnProps, IInputStateProps, IInputDispatchProps {}

export class Input extends React.Component<IInputProps, any> {
    private innerInput: HTMLInputElement;

    static defaultProps: Partial<IInputProps> = {
        type: 'text',
        valid: true,
    };

    componentWillMount() {
        if (this.props.onRender) {
            // undefined validOnMount will default to true in the state
            const validOnMount = this.props.validateOnMount
                && this.props.validate
                && this.props.validate(this.props.defaultValue || '');

            this.props.onRender(
                this.props.defaultValue,
                validOnMount,
                this.props.disabledOnMount,
            );
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    reset() {
        this.innerInput.value = '';
    }

    getInnerValue(): string {
        return this.innerInput.value;
    }

    private handleBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(this.innerInput.value);
        }
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.onChange) {
            this.props.onChange(this.innerInput.value, this.isValidOnChange());
        }

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback(event, this.innerInput.value, this.isValidOnChange());
        }
    }

    private isValidOnChange(): boolean {
        return this.props.validateOnChange
            && this.props.validate
            && this.props.validate(this.innerInput.value);
    }

    private handleClick(e: React.MouseEvent<HTMLElement>) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    private handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }
    }

    private getLabel(): JSX.Element {
        const {labelProps, labelTitle} = this.props;
        return labelTitle
            ? <Label htmlFor={this.props.id} {...labelProps}>{labelTitle}</Label>
            : null;
    }

    private getRawInput(): JSX.Element {
        const innerInputClasses = classNames({
            invalid: !this.props.valid && contains(['number', 'text'], this.props.type),
        }, this.props.innerInputClasses);

        return (
            <input
                id={this.props.id}
                className={innerInputClasses}
                type={this.props.type}
                defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}
                ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
                onBlur={() => this.handleBlur()}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
                placeholder={this.props.placeholder}
                checked={!!this.props.checked}
                disabled={!!this.props.disabled}
                name={this.props.name}
                required
                readOnly={!!this.props.readOnly}
            />
        );
    }

    private getDefaultInput(): JSX.Element {
        const classes = classNames(
            'input-wrapper validate',
            {
                'input-field': contains(['number', 'text'], this.props.type),
            },
            this.props.classes,
        );

        return (
            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
                {this.getRawInput()}
                {this.getLabel()}
                {this.props.children}
            </div>
        );
    }

    render() {
        return this.props.rawInput
            ? this.getRawInput()
            : this.getDefaultInput();
    }
}
