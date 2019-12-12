import 'rc-slider/assets/index.css';

import {Range, SliderProps} from 'rc-slider';
import * as React from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../utils/ReduxUtils';
import {SliderActions} from './SliderActions';
import SliderHandle from './SliderHandle';
import {
    convertInitialValuetoRangeValue,
    getComputedRangeValue,
    getCrossingPoint,
    getValuesPositionOnRange,
    handleIsAtCrossingPoint,
    propsValidator,
    valuesPositionOnRange,
} from './SliderUtils';

export interface MiddleSliderOwnProps extends SliderProps {
    id: string;
    enabled?: boolean;
    hasTooltip?: boolean;
    initialValue?: number;
    marks?: {[key: number]: string};
    range: [number, number];
    step?: number;
    tabIndex?: number[];
    onChange?: (rangeOutputValue: number) => any;
    customTooltip?: (value: any) => JSX.Element;
}

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: MiddleSliderOwnProps) => ({
    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),
});

const MiddleSliderDisconnected: React.FunctionComponent<MiddleSliderOwnProps &
    ReturnType<typeof mapDispatchToProps>> = ({
    enabled = true,
    customTooltip,
    hasTooltip,
    initialValue,
    marks,
    range,
    setOutputValue,
    step,
    onChange,
}) => {
    const crossingPoint = getCrossingPoint(range);
    const [highRange, setHighRange] = React.useState(crossingPoint);
    const [lowRange, setLowRange] = React.useState(crossingPoint);
    const rangeOutputValue = getComputedRangeValue(lowRange, highRange, range, crossingPoint);

    if (onChange) {
        onChange(rangeOutputValue);
    }

    React.useEffect(() => {
        propsValidator(range, initialValue);
        if (initialValue) {
            const initialRangeValue: number = convertInitialValuetoRangeValue(range, initialValue);
            setHandlePosition([initialRangeValue, initialRangeValue]);
        }
    }, []);

    React.useEffect(() => {
        setOutputValue(rangeOutputValue);
    }, [rangeOutputValue]);

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
            return <SliderHandle key={handleProps.index} handleProps={handleProps} handleCustomProps={customProps} />;
        }
        return null;
    };

    return (
        <Range
            value={[lowRange, highRange]}
            onChange={setHandlePosition}
            handle={renderHandle}
            className="vapor-slider input-wrapper input-field"
            marks={marks}
            step={step}
            disabled={!enabled}
        />
    );
};

export const MiddleSlider = connect(null, mapDispatchToProps)(MiddleSliderDisconnected);
