import classNames from 'clsx';
import {Range, SliderProps, SliderTooltip} from 'rc-slider';
import {ComponentProps, FunctionComponent, ReactNode, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {isBoolean} from 'underscore';

import {IDispatch} from '../../utils/ReduxUtils';
import {SliderActions} from './SliderActions';
import SliderHandle from './SliderHandle';
import {
    getOutputValue,
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

export interface SliderOwnProps extends SliderProps {
    /**
     * The unique identifier of the Slider
     */
    id: string;
    /**
     * The initial value
     */
    initialValue?: number;
    /**
     * Crossing point, if the value is lower than that the filling will be on the right and if it's higher, it will be on the left
     */
    crossingPoint?: number;
    /**
     * @deprecated do not use
     */
    tabIndex?: number;
    /**
     * A callback function executed when the slider moves
     *
     * @param rangeOutputValue the current value
     */
    onChange?: (rangeOutputValue: number) => any;
    /**
     * A callback function that is used to display information when the user is changing the value
     *
     * @param value the current value
     */
    customTooltip?: (value: any) => JSX.Element;
    /**
     * Whether to display a value around the slider (true or AppendedValueSide.both) or only on one side (AppendedValueSide.left, AppendedValueSide.right)
     *
     * @default false
     */
    appendValue?: boolean | AppendedValueSide;
    /**
     * Function that receives the current value and a side and renders a component the specified side of the slider
     *
     * @param value the current value of the slider
     * @param side a value of AppendedValueSide
     */
    appendValueFormatter?: (value: number, side?: Exclude<AppendedValueSide, AppendedValueSide.both>) => ReactNode;
    /**
     * Overrides for the style of the tooltip
     */
    tooltipStyle?: Partial<ComponentProps<typeof SliderTooltip>>;
    /**
     * Whether to display a tooltip
     */
    hasTooltip?: boolean;
}

/**
 * @deprecated Use Mantine Slider instead: https://mantine.dev/core/slider/
 */
export const Slider: FunctionComponent<SliderOwnProps> = (props) => {
    propsValidator(props);
    const crossingPoint = props.crossingPoint ?? (props.min > 0 ? props.min : 0);
    const [rightHandlePosition, setRightHandlePosition] = useState(crossingPoint);
    const [leftHandlePosition, setLeftHandlePosition] = useState(crossingPoint);
    const outputValue = getOutputValue(leftHandlePosition, rightHandlePosition, crossingPoint);
    const dispatch: IDispatch = useDispatch();

    useEffect(
        () => () => {
            dispatch(SliderActions.remove(props.id));
        },
        [],
    );

    useEffect(() => {
        props.onChange?.(outputValue);
        dispatch(SliderActions.setValue(props.id, outputValue));
    }, [outputValue]);

    const jumpValueFromHighToLowRange = useCallback(
        (handlePositions: number[]) => {
            setRightHandlePosition(crossingPoint);
            setLeftHandlePosition(handlePositions[0]);
        },
        [crossingPoint],
    );

    const jumpValueFromLowToHighRange = useCallback(
        (handlePositions: number[]) => {
            setLeftHandlePosition(crossingPoint);
            setRightHandlePosition(handlePositions[1]);
        },
        [crossingPoint],
    );

    const computeNewLeftHandlePosition = useCallback(
        ([handleA, handleb]: number[]) => {
            const newPosition = handleb < crossingPoint ? handleb : handleA;
            setLeftHandlePosition(newPosition);
        },
        [crossingPoint],
    );

    const computeNewRightHandlePosition = useCallback(
        ([handleA, handleB]: number[]) => {
            const newPosition = handleA > crossingPoint ? handleA : handleB;
            setRightHandlePosition(newPosition);
        },
        [crossingPoint],
    );

    const setHandlePosition = useCallback(
        (handlePositions: number[]) => {
            const valuesPosition = getValuesPositionOnRange(handlePositions, crossingPoint);
            switch (valuesPosition) {
                case valuesPositionOnRange.lower:
                    computeNewLeftHandlePosition(handlePositions);
                    break;
                case valuesPositionOnRange.higher:
                    computeNewRightHandlePosition(handlePositions);
                    break;
                case valuesPositionOnRange.both:
                    leftHandlePosition === crossingPoint
                        ? jumpValueFromHighToLowRange(handlePositions)
                        : jumpValueFromLowToHighRange(handlePositions);
                    break;
                default:
                    setLeftHandlePosition(handlePositions[0]);
                    setRightHandlePosition(handlePositions[1]);
            }
        },
        [
            computeNewLeftHandlePosition,
            crossingPoint,
            computeNewRightHandlePosition,
            jumpValueFromHighToLowRange,
            jumpValueFromLowToHighRange,
            leftHandlePosition,
        ],
    );

    useEffect(() => {
        setHandlePosition([props.initialValue, props.initialValue]);
    }, [props.initialValue]);

    const renderHandle = (handleProps: any) => {
        const customProps = {
            hasTooltip: props.hasTooltip,
            customTooltip: props.customTooltip,
            rangeOutput: outputValue,
        };
        if (!handleIsAtCrossingPoint(leftHandlePosition, rightHandlePosition, handleProps.index, crossingPoint)) {
            return (
                <SliderHandle
                    key={handleProps.index}
                    handleProps={handleProps}
                    handleCustomProps={customProps as any}
                    tooltipProps={
                        props.tooltipStyle ?? {
                            overlayClassName: 'vapor-slider-overlay',
                        }
                    }
                />
            );
        }
        return null;
    };

    const valueFormatter = props.appendValueFormatter ?? ((value: number) => value);

    const isAppendedLeft = props.appendValue === AppendedValueSide.both || props.appendValue === AppendedValueSide.left;
    const isAppendedRight =
        (isBoolean(props.appendValue) && props.appendValue) ||
        props.appendValue === AppendedValueSide.right ||
        props.appendValue === AppendedValueSide.both;

    return (
        <div className="flex full-content-x slider-container">
            <div
                className={classNames('slider-value flex', {
                    hidden: !isAppendedLeft,
                })}
            >
                {valueFormatter(outputValue, AppendedValueSide.left)}
            </div>
            <Range
                key={props.id}
                value={[leftHandlePosition, rightHandlePosition]}
                onChange={setHandlePosition}
                handle={renderHandle}
                className={classNames('vapor-slider input-wrapper input-field', {'appended-value': props.appendValue})}
                marks={props.marks}
                step={props.step}
                disabled={props.disabled}
                min={props.min}
                max={props.max}
            />
            <div
                className={classNames('slider-value flex', {
                    hidden: !isAppendedRight,
                })}
            >
                {valueFormatter(outputValue, AppendedValueSide.right)}
            </div>
        </div>
    );
};
