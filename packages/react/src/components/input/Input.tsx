import classNames from 'clsx';
import {
    AllHTMLAttributes,
    ReactNode,
    ChangeEventHandler,
    MouseEvent,
    KeyboardEvent,
    Component,
    MutableRefObject,
} from 'react';
import * as _ from 'underscore';
import {contains, isUndefined, uniqueId} from 'underscore';
import {connect} from 'react-redux';
import {IClassName} from '../../utils/ClassNameUtils';
import {PropsToOmitUtils} from '../../utils/PropsToOmitUtils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';
import {ILabelProps, Label} from './Label';
import {PlasmaState} from '../../PlasmaState';
import {InputSelectors} from './InputSelectors';
import {IDispatch, ReduxUtils} from '../../utils';
import {addInput, removeInput, changeInputValue} from './InputActions';

const validatedInputTypes: string[] = ['number', 'text', 'password'];

type IInputNativeTagOwnProps = Omit<
    AllHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'onClick' | 'onChange' | 'onBlur' | 'value'
>;

export interface IInputAdditionalOwnProps {
    id?: string;
    classes?: IClassName;
    innerInputClasses?: IClassName;
    tooltipClasses?: string;
    validate?: (value: any) => boolean;
    labelTitle?: ReactNode;
    labelProps?: ILabelProps;
    validateOnChange?: boolean;
    disabledOnMount?: boolean;
    validateOnMount?: boolean;
    disabledTooltip?: string;
    minimum?: number /* @deprecated use min instead */;
    maximum?: number /* @deprecated use max instead */;
    onBlur?: (value: string) => void;
    onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
    defaultValue?: string;
    isReadOnly?: boolean;
    wrapperRef?: MutableRefObject<HTMLDivElement>;
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
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    changeDirtyState?: (value?: string, valid?: boolean) => void;
}

const inputPropsToOmit = [
    'changeDirtyState',
    'classes',
    'defaultValue',
    'disabledOnMount',
    'disabledTooltip',
    'id',
    'indeterminate',
    'innerInputClasses',
    'isReadOnly',
    'labelProps',
    'labelTitle',
    'maximum',
    'minimum',
    'onBlur',
    'onChange',
    'onClick',
    'onDestroy',
    'onRender',
    'valid',
    'validate',
    'validateOnChange',
    'validateOnMount',
];

export interface IInputOwnProps extends IInputAdditionalOwnProps, IInputNativeTagOwnProps {}

export interface IInputProps extends IInputOwnProps, Partial<IInputStateProps>, Partial<IInputDispatchProps> {}

export interface IInputComponentState {
    valid: boolean;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export class Input extends Component<IInputProps, IInputComponentState> {
    private innerInput: HTMLInputElement;

    static defaultProps: Partial<IInputProps> = {
        id: uniqueId('input'),
        type: 'text',
        valid: true,
        labelTitle: '',
        required: true,
        isReadOnly: false,
    };

    constructor(props: IInputProps) {
        super(props);
        this.state = {
            valid: this.props.valid,
        };
    }

    componentDidMount() {
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

    private handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (this.props.onChange) {
            const validOnChange =
                this.props.validateOnChange && this.props.validate && this.props.validate(this.getInnerValue());
            this.props.onChange(this.getInnerValue(), validOnChange);
        }
        this.props.onChangeHandler?.(e);
    };

    private handleClick(e: MouseEvent<HTMLElement>) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    private handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }
    }

    private getLabel(): ReactNode {
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

        let additionalProps: {disabled?: boolean} = {};
        if (this.props.isReadOnly) {
            additionalProps = {disabled: true};
        }

        const inputElements = [
            <input
                key={this.props.id}
                id={this.props.id}
                className={innerInputClasses}
                defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}
                ref={(innerInput: HTMLInputElement) => (this.innerInput = innerInput)}
                onBlur={() => this.handleBlur()}
                onChange={this.handleChange}
                onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
                min={this.props.minimum}
                max={this.props.maximum}
                autoComplete="off"
                {..._.omit(this.props, [...PropsToOmitUtils.input, ...inputPropsToOmit])}
                {...additionalProps}
            />,
            this.getLabel(),
            this.props.children,
        ];

        return (this.props.disabled || this.props.isReadOnly) && this.props.disabledTooltip ? (
            <div
                className={classes}
                onClick={(e: MouseEvent<HTMLElement>) => this.handleClick(e)}
                ref={this.props.wrapperRef}
            >
                <Tooltip
                    title={this.props.disabledTooltip}
                    placement={TooltipPlacement.Right}
                    className={this.props.tooltipClasses}
                >
                    {inputElements}
                </Tooltip>
            </div>
        ) : (
            <div
                className={classes}
                onClick={(e: MouseEvent<HTMLElement>) => this.handleClick(e)}
                ref={this.props.wrapperRef}
            >
                {inputElements}
            </div>
        );
    }
}

const mapStateToProps = (state: PlasmaState, ownProps: IInputProps): IInputStateProps => {
    const input = InputSelectors.getInput(state, {id: ownProps.id});
    return {
        valid: input && input.valid,
        value: input && input.value,
        disabled: input && input.disabled,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IInputProps): IInputDispatchProps => ({
    onRender: (value: string = '', valid = true, disabled = false) =>
        dispatch(addInput(ownProps.id, value, valid, disabled)),
    onDestroy: () => dispatch(removeInput(ownProps.id)),
    onChange: (value: string, valid = true) => {
        dispatch(changeInputValue(ownProps.id, value, valid));
        ownProps.changeDirtyState?.(value);
    },
});

/**
 * @deprecated use TextInput instead
 */
export const InputConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Input);
