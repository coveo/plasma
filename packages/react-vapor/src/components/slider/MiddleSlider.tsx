import 'rc-slider/assets/index.css';

import {createSliderWithTooltip, Handle, Range, SliderProps} from 'rc-slider';
import * as React from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../utils/ReduxUtils';
import {SliderActions} from './SliderActions';

// import {Tooltip} from '../tooltip/Tooltip';

export interface MiddleSliderOwnProps extends SliderProps {
    id: string;
    range: [number, number];
    initialValue?: number;
    hasTooltip?: boolean;
    tabIndex?: number[];
    marks?: {[key: number]: string};
    step?: number;
}

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: MiddleSliderOwnProps) => ({
    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),
});

export const MiddleSliderDisconnected: React.FunctionComponent<MiddleSliderOwnProps &
    ReturnType<typeof mapDispatchToProps>> = ({range, initialValue, setOutputValue, hasTooltip, marks, step}) => {
    const totalRange = range[1] - range[0];
    const crossingPoint = Math.round(((0 - range[0]) / totalRange) * 100);
    const valuesAreLowerthanCrossingPoint = (value: number[]) =>
        value.every((singleValue) => singleValue < crossingPoint);
    const valuesAreHigherthanCrossingPoint = (value: number[]) =>
        value.every((singleValue) => singleValue > crossingPoint);
    const noValuesAreAtCrossingPoint = (value: number[]) => value.every((singleValue) => singleValue !== crossingPoint);

    const [highRange, setHighRange] = React.useState(crossingPoint);
    const [lowRange, setLowRange] = React.useState(crossingPoint);

    React.useEffect(() => {
        propsValidator();
        if (initialValue) {
            const initialRangeValue: number = convertInitialValuetoRangeValue();
            setHandlePosition([initialRangeValue, initialRangeValue]);
        }
    }, []);

    React.useEffect(() => {
        const rangeOutputValue = getComputedRangeValue();
        setOutputValue(rangeOutputValue);

        // unComment logs to play with the slider values
        // console.log([lowRange, highRange]);
        // console.log(rangeOutputValue);
    });

    const propsValidator = () => {
        if (range[0] > 0) {
            throw new Error(
                `${range[0]} is not a valid minimum MiddleSlider range value. Minimum MiddleSlider range value should be under 0`
            );
        } else if (range[1] < 0) {
            throw new Error(
                `${range[1]} is not a valid maximum MiddleSlider range value. Maximum MiddleSlider range value should be over 0`
            );
        }
        if (initialValue < range[0] || initialValue > range[1]) {
            throw new Error(
                `MiddleSlider initial value is not within defined range. initialValue:${initialValue} should be set between ${range[0]} and ${range[1]}`
            );
        }
    };

    const convertInitialValuetoRangeValue = (): number =>
        Math.round(((initialValue - range[0]) / (range[1] - range[0])) * 100);

    const getComputedRangeValue = () => {
        if (lowRange < crossingPoint) {
            return Math.round(((crossingPoint - lowRange) * range[0]) / crossingPoint);
        } else if (highRange > crossingPoint) {
            return Math.round(((highRange - crossingPoint) * range[1]) / (100 - crossingPoint));
        }
        return 0;
    };

    const setHandlePosition = (value: number[]) => {
        if (valuesAreLowerthanCrossingPoint(value)) {
            setValueInTheLowRange(value);
        } else if (valuesAreHigherthanCrossingPoint(value)) {
            setValueInTheHighRange(value);
        } else if (noValuesAreAtCrossingPoint(value)) {
            lowRange === crossingPoint ? jumpValueFromHighToLowRange(value) : jumpValueFromLowToHighRange(value);
        } else {
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

    const handlesAreNotatCrossingPoint = (handleIndex: number) =>
        (handleIndex === 0 && lowRange <= crossingPoint && highRange === crossingPoint) ||
        (handleIndex === 1 && highRange >= crossingPoint && lowRange === crossingPoint);

    const sliderHandle = (handleProps: any) => {
        const {value, dragging, index, ...restProps} = handleProps;
        return handlesAreNotatCrossingPoint(index) ? (
            // This tooltip doesn't appear above the handle.
            // <Tooltip key={index} title="I am a tooltip!" placement="top">
            <Handle key={index} value={value} {...restProps} className="rc-slider-handle" />
        ) : (
            // </Tooltip>
            <span key={index} />
        );
    };

    // RC-slider Tooltip doesn't work
    const RangeSlider = hasTooltip ? createSliderWithTooltip(Range) : Range;

    return (
        <RangeSlider
            value={[lowRange, highRange]}
            onChange={setHandlePosition}
            handle={sliderHandle}
            className="vapor-slider"
            marks={marks}
            step={step}
        />
    );
};

export const MiddleSlider = connect(null, mapDispatchToProps)(MiddleSliderDisconnected);
