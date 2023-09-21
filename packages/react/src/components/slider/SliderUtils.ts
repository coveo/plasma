import {SliderOwnProps} from './Slider';

export const valuesPositionOnRange = {
    lower: 'LOWER_THAN_CROSSING_POINT',
    higher: 'HIGHER_THAN_CROSSING_POINT',
    both: 'NO_VALUE_AT_CROSSING_POINT',
};

export const getValuesPositionOnRange = (value: number[], crossingPoint: number): string => {
    if (value.every((singleValue) => singleValue < crossingPoint)) {
        return valuesPositionOnRange.lower;
    } else if (value.every((singleValue) => singleValue > crossingPoint)) {
        return valuesPositionOnRange.higher;
    } else if (value.every((singleValue) => singleValue !== crossingPoint)) {
        return valuesPositionOnRange.both;
    }
    return null;
};

export const handleIsAtCrossingPoint = (
    leftHandlePosition: number,
    rightHandlePosition: number,
    handleIndex: number,
    crossingPoint: number,
) =>
    (handleIndex === 1 && leftHandlePosition < crossingPoint && rightHandlePosition === crossingPoint) ||
    (handleIndex === 0 && rightHandlePosition > crossingPoint && leftHandlePosition === crossingPoint);

export const getOutputValue = (
    leftHandlePosition: number,
    rightHandlePosition: number,
    crossingPoint: number,
): number => {
    if (leftHandlePosition < crossingPoint) {
        return leftHandlePosition;
    } else if (rightHandlePosition > crossingPoint) {
        return rightHandlePosition;
    } else {
        return crossingPoint;
    }
};

export const propsValidator = ({id, max = 100, min = 0, initialValue, step}: SliderOwnProps) => {
    if (min > max) {
        throw new Error(
            `${min} is not a valid minimum Slider range value. Minimum Slider range value should be under ${max}`,
        );
    } else if (max < min) {
        throw new Error(
            `${max} is not a valid maximum Slider range value. Maximum Slider range value should be over ${min}`,
        );
    }
    if (initialValue < min || initialValue > max) {
        throw new Error(
            `Slider initial value is not within defined range. initialValue:${initialValue} should be set between ${min} and ${max}`,
        );
    }
    if (!!step && (max - min) % step !== 0) {
        throw new Error(
            `Slider with id "${id}"'s step value (${step}) is invalid: the total range (${
                max - min
            }) must be evenly divisible the step.`,
        );
    }
};
