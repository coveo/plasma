import {MinusSize16Px, PlusSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {ChangeEvent, HTMLProps, KeyboardEvent, PureComponent, ReactText} from 'react';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {keyCode} from '../../utils/InputUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {NumericInputActions} from './NumericInputActions';
import {initialNumericInputState} from './NumericInputReducers';
import {NumericInputSelectors} from './NumericInputSelectors';

export interface NumericInputOwnProps {
    /**
     * A unique identifier that identifies the NumericInput in the PlasmaState
     */
    id: string;
    /**
     * The initial value
     */
    initialValue?: number;
    /**
     * The amount by which the buttons will add or substract
     */
    step?: number;
    /**
     * The lower limit (inclusive)
     */
    min?: number;
    /**
     * The upper limit (inclusive)
     */
    max?: number;
    /**
     * The error message displayed when the value manually inputed is outside the specified limits
     *
     * @default 'Value is not valid'
     */
    invalidMessage?: string;
    /**
     * The width of the input box in number of digits [1..20]
     *
     * @default 12
     */
    maxLength?: number; // we use the attribute from the input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
}

export interface NumericInputStateProps {
    value: ReactText;
    hasError: boolean;
}

export interface NumericInputDispatchProps {
    mount: (value: number) => void;
    unmount: () => void;
    setValue: (value: number | string) => void;
}

export interface NumericInputProps
    extends NumericInputOwnProps,
        Partial<NumericInputStateProps>,
        Partial<NumericInputDispatchProps> {}

const mapStateToProps = (state: PlasmaState, ownProps: NumericInputOwnProps): NumericInputStateProps => ({
    value: NumericInputSelectors.getValue(state, ownProps),
    hasError: NumericInputSelectors.getHasError(state, ownProps),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: NumericInputOwnProps): NumericInputDispatchProps => ({
    mount: (value: number) => dispatch(NumericInputActions.mount(ownProps.id, value, ownProps.min, ownProps.max)),
    unmount: () => dispatch(NumericInputActions.unmount(ownProps.id)),
    setValue: (value: number) => dispatch(NumericInputActions.setValue(ownProps.id, value, ownProps.min, ownProps.max)),
});

const inputPropsToOmit = [
    'hasError',
    'id',
    'initialValue',
    'invalidMessage',
    'max',
    'maxLength',
    'min',
    'mount',
    'setValue',
    'step',
    'unmount',
    'value',
];

/**
 * @deprecated Use Mantine NumberInput instead: https://mantine.dev/core/number-input/
 */
@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class NumericInputConnected extends PureComponent<NumericInputProps & HTMLProps<HTMLInputElement>> {
    static defaultProps: Partial<NumericInputOwnProps> = {
        invalidMessage: 'Value is not valid',
        maxLength: 12,
    };

    componentDidMount() {
        const initialValue = _.isUndefined(this.props.initialValue)
            ? (initialNumericInputState.value as number)
            : this.props.initialValue;
        this.props.mount(initialValue);
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        const valueAsNumber = parseFloat('' + this.props.value);
        const incrementEnabled =
            _.isUndefined(this.props.max) || _.isNaN(valueAsNumber) || valueAsNumber < this.props.max;
        const decrementEnabled =
            _.isUndefined(this.props.min) || _.isNaN(valueAsNumber) || valueAsNumber > this.props.min;

        return (
            <div className="numeric-input flex flex-column">
                <div className="flex flex-row">
                    <button
                        className="js-decrement mr1"
                        disabled={!decrementEnabled || this.props.disabled}
                        onClick={this.onDecrement}
                    >
                        <MinusSize16Px height={16} />
                    </button>
                    <div className="flex flex-column">
                        <input
                            {..._.omit(this.props, inputPropsToOmit)}
                            className={classNames(
                                'js-numeric-input',
                                {
                                    [`mod-max-${this.props.maxLength}-digit`]:
                                        _.isNumber(this.props.maxLength) && this.props.maxLength > 0,
                                    disabled: this.props.disabled,
                                },
                                this.props.className
                            )}
                            value={this.props.value}
                            onChange={this.onChange}
                            onKeyDown={this.onKeyDown}
                            disabled={this.props.disabled}
                        />
                    </div>
                    <button
                        className="js-increment ml1"
                        disabled={!incrementEnabled || this.props.disabled}
                        onClick={this.onIncrement}
                    >
                        <PlusSize16Px height={16} />
                    </button>
                </div>
                <div className="flex flex-row">
                    {this.props.hasError && <span className="generic-form-error my1">{this.props.invalidMessage}</span>}
                </div>
            </div>
        );
    }

    private onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.keyCode;
        if (key === keyCode.upArrow) {
            this.onIncrement();
        } else if (key === keyCode.downArrow) {
            this.onDecrement();
        }
    };

    private onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        this.props.setValue(value);
    };

    private getValueAsNumber() {
        let value = this.props.value;
        if (typeof value === 'string') {
            value = parseFloat(value);
        }
        return value as number;
    }

    private normalizeValue(value: number) {
        if (_.isNaN(value)) {
            return this.props.initialValue || initialNumericInputState.value;
        }
        return value;
    }

    private onDecrement = () => {
        let newValue = this.normalizeValue(this.getValueAsNumber() - (this.props.step || 1));

        if (!_.isUndefined(this.props.min)) {
            newValue = Math.max(newValue, this.props.min);
        }

        this.props.setValue(newValue);
    };

    private onIncrement = () => {
        let newValue = this.normalizeValue(this.getValueAsNumber() + (this.props.step || 1));

        if (!_.isUndefined(this.props.max)) {
            newValue = Math.min(newValue, this.props.max);
        }

        this.props.setValue(newValue);
    };
}
