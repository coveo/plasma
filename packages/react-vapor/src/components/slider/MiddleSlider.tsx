import 'rc-slider/assets/index.css';

import {createSliderWithTooltip, Handle, Range, SliderProps} from 'rc-slider';
import * as React from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../utils/ReduxUtils';
import {SliderActions} from './SliderActions';
// import {Tooltip} from '../tooltip/Tooltip';

export interface MiddleSliderOwnProps extends SliderProps {
    id: string;
    range: number;
    defaultValue?: number;
    hasTooltip?: boolean;
    tabIndex?: number[];
}

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: MiddleSliderOwnProps) => ({
    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),
});

export const MiddleSliderDisconnected: React.FunctionComponent<MiddleSliderOwnProps &
    ReturnType<typeof mapDispatchToProps>> = ({range, setOutputValue, hasTooltip}) => {
    const [highRange, setHighRange] = React.useState(50);
    const [lowRange, setLowRange] = React.useState(50);

    const valuesAreLowerthanFifty = (value: number[]) => value.every((singleValue) => singleValue < 50);
    const valuesAreHigherthanFifty = (value: number[]) => value.every((singleValue) => singleValue > 50);
    const noValuesAreAtFifty = (value: number[]) => value.every((singleValue) => singleValue !== 50);
    const handlesAreNotInTheCenter = (handleIndex: number) =>
        (handleIndex === 0 && lowRange <= 50 && highRange === 50) ||
        (handleIndex === 1 && highRange >= 50 && lowRange === 50);

    React.useEffect(() => {
        const rangeOutputValue = getComputedRangeValue();
        setOutputValue(rangeOutputValue);
    });

    const setRange = (value: number[]) => {
        if (valuesAreLowerthanFifty(value)) {
            setValueInTheLowRange(value);
        } else if (valuesAreHigherthanFifty(value)) {
            setValueInTheHighRange(value);
        } else if (noValuesAreAtFifty(value)) {
            lowRange === 50 ? jumpValueFromHighToLowRange(value) : jumpValueFromLowToHighRange(value);
        } else {
            setLowRange(value[0]);
            setHighRange(value[1]);
        }
    };

    const getComputedRangeValue = () => {
        return lowRange === 50 ? ((highRange - 50) / 50) * range : -Math.abs(((lowRange - 50) / 50) * range);
    };

    const jumpValueFromHighToLowRange = (value: number[]) => {
        setHighRange(50);
        setLowRange(value[0]);
    };

    const jumpValueFromLowToHighRange = (value: number[]) => {
        setLowRange(50);
        setHighRange(value[1]);
    };

    const setValueInTheLowRange = (value: number[]) => {
        const correctLowRangeValue = value[1] < 50 ? value[1] : value[0];
        setLowRange(correctLowRangeValue);
    };

    const setValueInTheHighRange = (value: number[]) => {
        const correctHighRangeValue = value[0] > 50 ? value[0] : value[1];
        setHighRange(correctHighRangeValue);
    };

    const sliderHandle = (handleProps: any) => {
        const {value, dragging, index, ...restProps} = handleProps;
        return handlesAreNotInTheCenter(index) ? (
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
        <RangeSlider value={[lowRange, highRange]} onChange={setRange} handle={sliderHandle} className="vapor-slider" />
    );
};

export const MiddleSlider = connect(null, mapDispatchToProps)(MiddleSliderDisconnected);
