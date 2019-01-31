import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {Svg} from '../svg/Svg';
import * as styles from './numeric-input.scss';
import {NumericInputActions} from './NumericInputActions';
import {initialNumericInputState} from './NumericInputReducers';
import {NumericInputSelectors} from './NumericInputSelectors';

export interface NumericInputOwnProps {
    id: string;
    initialValue?: number;
    step?: number;
    min?: number;
    max?: number;
    invalidMessage?: string;
}

export interface NumericInputStateProps {
    value: number | string;
    hasError: boolean;
}

export interface NumericInputDispatchProps {
    mount: (value: number) => void;
    unmount: () => void;
    setValue: (value: number | string) => void;
}

export interface NumericInputProps extends NumericInputOwnProps,
    Partial<NumericInputStateProps>,
    Partial<NumericInputDispatchProps> {}

export const mapStateToProps = (state: IReactVaporState, ownProps: NumericInputOwnProps): NumericInputStateProps => {
    return {
        value: NumericInputSelectors.getValue(state, ownProps),
        hasError: NumericInputSelectors.getHasError(state, ownProps),
    };
};

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: NumericInputOwnProps): NumericInputDispatchProps => ({
    mount: (value: number) => dispatch(NumericInputActions.mount(ownProps.id, value)),
    unmount: () => dispatch(NumericInputActions.unmount(ownProps.id)),
    setValue: (value: number | string) => dispatch(NumericInputActions.setValue(ownProps.id, value, ownProps.min, ownProps.max)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class NumericInputConnected extends React.PureComponent<NumericInputProps & React.HTMLProps<HTMLInputElement>> {
    static defaultProps: Partial<NumericInputOwnProps> = {
        invalidMessage: 'Value is not valid',
    };

    componentDidMount() {
        const initialValue = _.isUndefined(this.props.initialValue)
            ? initialNumericInputState.value as number
            : this.props.initialValue;
        this.props.mount(initialValue);
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        const valueAsNumber = parseFloat('' + this.props.value);
        const incrementEnabled = _.isUndefined(this.props.max)
            || _.isNaN(valueAsNumber)
            || valueAsNumber < this.props.max;
        const decrementEnabled = _.isUndefined(this.props.min)
            || _.isNaN(valueAsNumber)
            || valueAsNumber > this.props.min;
        return (
            <div className='flex flex-row'>
                <Button classes={['js-decrement mr1 p0', styles.numericInputButton]} enabled={decrementEnabled} onClick={this.onDecrement}>
                    <Svg svgName='minus' svgClass='icon mod-12 fill-pure-white' />
                </Button>
                <div className='flex flex-column'>
                    <input
                        {..._.omit(this.props, keys<NumericInputProps>())}
                        className={classNames('js-numeric-input mb1', this.props.className, styles.numericInput)}
                        value={this.props.value}
                        onChange={this.onChange}
                    />
                    {this.props.hasError && <span className='generic-form-error'>{this.props.invalidMessage}</span>}
                </div>
                <Button classes={['js-increment ml1 p0', styles.numericInputButton]} enabled={incrementEnabled} onClick={this.onIncrement}>
                    <Svg svgName='plus' svgClass='icon mod-12 fill-pure-white' />
                </Button>
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        this.props.setValue(value);
    }

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
    }

    private onIncrement = () => {
        let newValue = this.normalizeValue(this.getValueAsNumber() + (this.props.step || 1));

        if (!_.isUndefined(this.props.max)) {
            newValue = Math.min(newValue, this.props.max);
        }

        this.props.setValue(newValue);
    }
}
