import 'rc-slider/assets/index.css';

import classNames from 'classnames';
import {Range, SliderProps} from 'rc-slider';
import {RCTooltip} from 'rc-tooltip';
import * as React from 'react';
import {connect} from 'react-redux';
import {isBoolean} from 'underscore';

import {IDispatch} from '../../utils/ReduxUtils';
import {SliderActions} from './SliderActions';
import SliderHandle from './SliderHandle';
import {
    computeStep,
    convertInitialValuetoRangeValue,
    getComputedRangeValue,
    getCrossingPoint,
    getValuesPositionOnRange,
    handleIsAtCrossingPoint,
    propsValidator,
    valuesPositionOnRange,
} from './SliderUtils';

export enum AppendedValueSide {
    left = 'LEFT',
    right = 'RIGHT',
    both = 'BOTH',
}

export interface MiddleSliderOwnProps extends SliderProps {
    id: string;
    enabled?: boolean;
    hasTooltip?: boolean;
    initialValue?: number;
    marks?: {[key: number]: string};
    min?: number;
    max: number;
    step?: number;
    tabIndex?: number[];
    onChange?: (rangeOutputValue: number) => any;
    customTooltip?: (value: any) => JSX.Element;
    appendValue?: boolean | AppendedValueSide;
    appendValueFormatter?: (
        value: number,
        side?: Exclude<AppendedValueSide, AppendedValueSide.both>
    ) => React.ReactNode;
    tooltipStyle?: Partial<RCTooltip.Props>;
}

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: MiddleSliderOwnProps) => ({
    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),
});

const MiddleSliderDisconnected: React.FunctionComponent<MiddleSliderOwnProps &
    ReturnType<typeof mapDispatchToProps>> = ({
    id,
    enabled = true,
    customTooltip,
    hasTooltip,
    initialValue,
    marks,
    min = 0,
    max,
    setOutputValue,
    step,
    onChange,
    appendValue,
    tooltipStyle,
    appendValueFormatter = (value) => value,
}) => {
    const crossingPoint = getCrossingPoint(min, max);
    const [highRange, setHighRange] = React.useState(crossingPoint);
    const [lowRange, setLowRange] = React.useState(crossingPoint);

    const rangeOutputValue = getComputedRangeValue(lowRange, highRange, min, max, crossingPoint);

    React.useEffect(() => {
        onChange?.(rangeOutputValue);
    }, [onChange, rangeOutputValue]);

    React.useEffect(() => {
        propsValidator(min, max, initialValue);
        if (initialValue) {
            const initialRangeValue: number = convertInitialValuetoRangeValue(min, max, initialValue);
            setHandlePosition([initialRangeValue, initialRangeValue]);
        }
    }, [min, max, initialValue]);

    React.useEffect(() => {
        setOutputValue(rangeOutputValue);
    }, [setOutputValue, rangeOutputValue]);

    const setHandlePosition = (value: number[]) => {
        const valuesPosition = getValuesPositionOnRange(value, crossingPoint);
        switch (valuesPosition) {
            case valuesPositionOnRange.lower:
                setValueInTheLowRange(value);
                break;
            case valuesPositionOnRange.higher:
                setValueInTheHighRange(value);
                break;
            case valuesPositionOnRange.both:
                lowRange === crossingPoint ? jumpValueFromHighToLowRange(value) : jumpValueFromLowToHighRange(value);
                break;
            default:
                setLowRange(value[0]);
                setHighRange(value[1]);
        }
    };

    const jumpValueFromHighToLowRange = (value: number[]) => {
        setHighRange(crossingPoint);
        setLowRange(value[0]);
    };

    const jumpValueFromLowToHighRange = (value: number[]) => {
        setLowRange(crossingPoint);
        setHighRange(value[1]);
    };

    const setValueInTheLowRange = (value: number[]) => {
        const correctLowRangeValue = value[1] < crossingPoint ? value[1] : value[0];
        setLowRange(correctLowRangeValue);
    };

    const setValueInTheHighRange = (value: number[]) => {
        const correctHighRangeValue = value[0] > crossingPoint ? value[0] : value[1];
        setHighRange(correctHighRangeValue);
    };

    const renderHandle = (handleProps: any) => {
        const customProps = {
            hasTooltip: hasTooltip,
            customTooltip: customTooltip,
            rangeOutput: rangeOutputValue,
        };
        if (!handleIsAtCrossingPoint(lowRange, highRange, handleProps.index, crossingPoint)) {
            return (
                <SliderHandle
                    key={handleProps.index}
                    handleProps={handleProps}
                    handleCustomProps={customProps}
                    tooltipProps={tooltipStyle}
                />
            );
        }
        return null;
    };

    const computedStep = computeStep(step, min, max);
    const isAppendedLeft = appendValue === AppendedValueSide.both || appendValue === AppendedValueSide.left;
    const isAppendedRight =
        (isBoolean(appendValue) && appendValue) ||
        appendValue === AppendedValueSide.right ||
        appendValue === AppendedValueSide.both;

    return (
        <div className="flex full-content-x slider-container">
            <div
                className={classNames('slider-value flex', {
                    hidden: !isAppendedLeft,
                })}
            >
                {appendValueFormatter(rangeOutputValue, AppendedValueSide.left)}
            </div>
            <Range
                key={id}
                value={[lowRange, highRange]}
                onChange={setHandlePosition}
                handle={renderHandle}
                className={classNames('vapor-slider input-wrapper input-field', {'appended-value': appendValue})}
                marks={marks}
                step={computedStep}
                disabled={!enabled}
            />
            <div
                className={classNames('slider-value flex', {
                    hidden: !isAppendedRight,
                })}
            >
                {appendValueFormatter(rangeOutputValue, AppendedValueSide.right)}
            </div>
        </div>
    );
};

export const MiddleSlider = connect(null, mapDispatchToProps)(MiddleSliderDisconnected);
