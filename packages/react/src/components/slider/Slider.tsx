import 'rc-slider/assets/index.css';

import classNames from 'classnames';
import {Range, SliderProps, SliderTooltip} from 'rc-slider';
import * as React from 'react';
import {connect} from 'react-redux';
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
    id: string;
    initialValue?: number;
    crossingPoint?: number;
    tabIndex?: number;
    onChange?: (rangeOutputValue: number) => any;
    customTooltip?: (value: any) => JSX.Element;
    appendValue?: boolean | AppendedValueSide;
    appendValueFormatter?: (
        value: number,
        side?: Exclude<AppendedValueSide, AppendedValueSide.both>
    ) => React.ReactNode;
    tooltipStyle?: Partial<React.ComponentProps<typeof SliderTooltip>>;
    hasTooltip?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch, ownProps: SliderOwnProps) => ({
    setOutputValue: (value: number) => dispatch(SliderActions.setValue(ownProps.id, value)),
});

const SliderDisconnected: React.FunctionComponent<SliderOwnProps & ReturnType<typeof mapDispatchToProps>> = (props) => {
    propsValidator(props);
    const crossingPoint = props.crossingPoint ?? (props.min > 0 ? props.min : 0);
    const [rightHandlePosition, setRightHandlePosition] = React.useState(crossingPoint);
    const [leftHandlePosition, setLeftHandlePosition] = React.useState(crossingPoint);
    const outputValue = getOutputValue(leftHandlePosition, rightHandlePosition, crossingPoint);
    const {onChange, setOutputValue} = props;

    React.useEffect(() => {
        onChange?.(outputValue);
        setOutputValue(outputValue);
    }, [outputValue]);

    const jumpValueFromHighToLowRange = React.useCallback(
        (handlePositions: number[]) => {
            setRightHandlePosition(crossingPoint);
            setLeftHandlePosition(handlePositions[0]);
        },
        [crossingPoint]
    );

    const jumpValueFromLowToHighRange = React.useCallback(
        (handlePositions: number[]) => {
            setLeftHandlePosition(crossingPoint);
            setRightHandlePosition(handlePositions[1]);
        },
        [crossingPoint]
    );

    const computeNewLeftHandlePosition = React.useCallback(
        ([handleA, handleb]: number[]) => {
            const newPosition = handleb < crossingPoint ? handleb : handleA;
            setLeftHandlePosition(newPosition);
        },
        [crossingPoint]
    );

    const computeNewRightHandlePosition = React.useCallback(
        ([handleA, handleB]: number[]) => {
            const newPosition = handleA > crossingPoint ? handleA : handleB;
            setRightHandlePosition(newPosition);
        },
        [crossingPoint]
    );

    const setHandlePosition = React.useCallback(
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
        ]
    );

    React.useEffect(() => {
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
                    handleCustomProps={customProps}
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

export const Slider = connect(null, mapDispatchToProps)(SliderDisconnected);
