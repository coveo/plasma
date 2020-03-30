import classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {contains, isUndefined, uniqueId} from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {PropsToOmitUtils} from '../../utils/PropsToOmitUtils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';
import {IInputState} from './InputReducers';
import {ILabelProps, Label} from './Label';

const validatedInputTypes: string[] = ['number', 'text', 'password'];

type IInputNativeTagOwnProps = Omit<
    React.AllHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'onClick' | 'onChange' | 'onBlur' | 'value'
>;

export interface IInputAdditionalOwnProps {
    id?: string;
    classes?: IClassName;
    innerInputClasses?: IClassName;
    validate?: (value: any) => boolean;
    labelTitle?: React.ReactNode;
    labelProps?: ILabelProps;
    validateOnChange?: boolean;
    disabledOnMount?: boolean;
    validateOnMount?: boolean;
    disabledTooltip?: string;
    minimum?: number /* @deprecated use min instead */;
    maximum?: number /* @deprecated use max instead */;
    onBlur?: (value: string) => void;
    defaultValue?: string;
}

export interface IInputNativeTagStateProps {
    autoComplete?: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    name?: string;
}

export interface IInputAdditionalStateProps {
    valid?: boolean;
    indeterminate?: boolean;
}

export interface IInputStateProps extends IInputNativeTagStateProps, IInputAdditionalStateProps {}

export interface IInputDispatchProps {
    onDestroy?: () => void;
    onRender?: (value?: string, valid?: boolean, disabled?: boolean) => void;
    onChange?: (value?: string, valid?: boolean) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    changeDirtyState?: (value?: string, valid?: boolean) => void;
}

const inputPropsToOmit = keys<IInputAdditionalOwnProps & IInputAdditionalStateProps & IInputDispatchProps>();

export interface IInputOwnProps extends IInputAdditionalOwnProps, IInputNativeTagOwnProps {}

export interface IInputProps extends IInputOwnProps, Partial<IInputStateProps>, Partial<IInputDispatchProps> {}

export interface IInputComponentState {
    valid: boolean;
}

export class Input extends React.Component<IInputProps, IInputComponentState> {
    private innerInput: HTMLInputElement;

    static defaultProps: Partial<IInputProps> = {
        id: uniqueId('input'),
        type: 'text',
        valid: true,
        labelTitle: '',
        required: true,
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
            const validOnMount =
                this.props.validateOnMount && this.props.validate && this.props.validate(this.props.defaultValue || '');

            this.props.onRender(this.props.defaultValue, validOnMount, this.props.disabledOnMount);
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
        return (this.innerInput && this.innerInput.value) || '';
    }

    validate() {
        this.setState({
            valid: this.props.valid && !(this.props.validate && !this.props.validate(this.getInnerValue())),
        });
    }

    private handleBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(this.getInnerValue());
        }
    }

    private handleChange() {
        if (this.props.onChange) {
            const validOnChange =
                this.props.validateOnChange && this.props.validate && this.props.validate(this.getInnerValue());
            this.props.onChange(this.getInnerValue(), validOnChange);
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

    private getLabel(): React.ReactNode {
        const {labelProps, labelTitle} = this.props;
        if (typeof labelTitle === 'string') {
            return labelTitle || this.props.validate ? (
                <Label key={this.props.id + 'label'} htmlFor={this.props.id} {...labelProps}>
                    {labelTitle}
                </Label>
            ) : null;
        } else {
            return labelTitle;
        }
    }

    render() {
        const classes = classNames(
            'input-wrapper validate',
            {
                'input-field': contains(validatedInputTypes, this.props.type),
            },
            this.props.classes
        );
        const innerInputClasses = classNames(
            {
                invalid: !this.state.valid && contains(validatedInputTypes, this.props.type),
            },
            this.props.innerInputClasses
        );

        const inputElements = [
            <input
                key={this.props.id}
                id={this.props.id}
                className={innerInputClasses}
                defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}
                ref={(innerInput: HTMLInputElement) => (this.innerInput = innerInput)}
                onBlur={() => this.handleBlur()}
                onChange={() => this.handleChange()}
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
                min={this.props.minimum}
                max={this.props.maximum}
                {..._.omit(this.props, [...PropsToOmitUtils.input, ...inputPropsToOmit])}
            />,
            this.getLabel(),
            this.props.children,
        ];

        return this.props.disabled && this.props.disabledTooltip ? (
            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
                <Tooltip title={this.props.disabledTooltip} placement={TooltipPlacement.Right}>
                    {inputElements}
                </Tooltip>
            </div>
        ) : (
            <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
                {inputElements}
            </div>
        );
    }
}
