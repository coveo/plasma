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

export const getCrossingPoint = (range: [number, number]): number =>
    Math.round(((0 - range[0]) / (range[1] - range[0])) * 100);

export const convertInitialValuetoRangeValue = (range: [number, number], initialValue: number): number =>
    Math.round(((initialValue - range[0]) / (range[1] - range[0])) * 100);

export const handleIsAtCrossingPoint = (
    lowRange: number,
    highRange: number,
    handleIndex: number,
    crossingPoint: number
) =>
    (handleIndex === 1 && lowRange < crossingPoint && highRange === crossingPoint) ||
    (handleIndex === 0 && highRange > crossingPoint && lowRange === crossingPoint);

export const getComputedRangeValue = (
    lowRange: number,
    highRange: number,
    range: [number, number],
    crossingPoint: number
): number => {
    if (lowRange < crossingPoint) {
        return Math.round(((crossingPoint - lowRange) * range[0]) / crossingPoint);
    } else if (highRange > crossingPoint) {
        return Math.round(((highRange - crossingPoint) * range[1]) / (100 - crossingPoint));
    }
    return 0;
};

export const propsValidator = (range: [number, number], initialValue: number) => {
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
