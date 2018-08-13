import * as classNames from 'classnames';
import * as React from 'react';
import {contains, isUndefined} from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {ILabelProps, Label} from './Label';

const validatedInputTypes: string[] = ['number', 'text', 'password'];

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
    autoFocus?: boolean;
}

export interface IInputStateProps {
    checked?: boolean;
    disabled?: boolean;
    value?: string;
    valid?: boolean;
    indeterminate?: boolean;
}

export interface IInputDispatchProps {
    onDestroy?: () => void;
    onRender?: (value?: string, valid?: boolean, disabled?: boolean) => void;
    onChange?: (value?: string, valid?: boolean) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IInputProps extends IInputOwnProps, IInputStateProps, IInputDispatchProps {}

export interface IInputState {
    valid: boolean;
}

export class Input extends React.Component<IInputProps, IInputState> {
    private innerInput: HTMLInputElement;

    static defaultProps: Partial<IInputProps> = {
        type: 'text',
        valid: true,
    };

    constructor(props: IInputProps, state: IInputState) {
        super(props, state);
        this.state = {
            valid: this.props.valid,
        };
    }

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

    componentDidUpdate(prevProps: IInputProps) {
        if (this.props.valid !== prevProps.valid) {
            this.validate();
        }

        if (prevProps.value !== this.props.value && this.innerInput) {
            this.innerInput.value = this.props.value;
        }
    }

    reset() {
        this.innerInput.value = '';
    }

    getInnerValue(): string {
        return this.innerInput.value;
    }

    validate() {
        this.setState({
            valid: this.props.valid && !(this.props.validate && !this.props.validate(this.getInnerValue())),
        });
    }

    private handleBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(this.innerInput.value);
        }
    }

    private handleChange() {
        if (this.props.onChange) {
            const validOnChange = this.props.validateOnChange
                && this.props.validate
                && this.props.validate(this.innerInput.value);
            this.props.onChange(this.innerInput.value, validOnChange);
        }
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

    render() {
        const classes = classNames(
            'input-wrapper validate',
            {
                'input-field': contains(validatedInputTypes, this.props.type),
            },
            this.props.classes,
        );
        const innerInputClasses = classNames({
            invalid: !this.state.valid && contains(validatedInputTypes, this.props.type),
        }, this.props.innerInputClasses);

        return (
            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
                <input
                    id={this.props.id}
                    className={innerInputClasses}
                    type={this.props.type}
                    defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}
                    ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
                    onBlur={() => this.handleBlur()}
                    onChange={() => this.handleChange()}
                    onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
                    placeholder={this.props.placeholder}
                    checked={!!this.props.checked}
                    disabled={!!this.props.disabled}
                    name={this.props.name}
                    required
                    readOnly={!!this.props.readOnly}
                    autoFocus={!!this.props.autoFocus}
                    step={this.props.type === 'number' ? 'any' : null}
                />
                {this.getLabel()}
                {this.props.children}
            </div>
        );
    }
}
