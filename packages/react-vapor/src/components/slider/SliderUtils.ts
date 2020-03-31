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

export const getCrossingPoint = (min: number, max: number): number => Math.round(((0 - min) / (max - min)) * 100);

export const convertInitialValuetoRangeValue = (min: number, max: number, initialValue: number): number =>
    Math.round(((initialValue - min) / (max - min)) * 100);

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
    min: number,
    max: number,
    crossingPoint: number
): number => {
    if (lowRange < crossingPoint) {
        return Math.round(((crossingPoint - lowRange) * min) / crossingPoint);
    } else if (highRange > crossingPoint) {
        return Math.round(((highRange - crossingPoint) * max) / (100 - crossingPoint));
    }
    return 0;
};

export const computeStep = (step: number, min: number, max: number) => {
    if (!step) {
        return undefined;
    }
    return (step * 100) / (max - min);
};

export const propsValidator = (min: number, max: number, initialValue: number) => {
    if (min > 0) {
        throw new Error(
            `${min} is not a valid minimum MiddleSlider range value. Minimum MiddleSlider range value should be under 0`
        );
    } else if (max < 0) {
        throw new Error(
            `${max} is not a valid maximum MiddleSlider range value. Maximum MiddleSlider range value should be over 0`
        );
    }
    if (initialValue < min || initialValue > max) {
        throw new Error(
            `MiddleSlider initial value is not within defined range. initialValue:${initialValue} should be set between ${min} and ${max}`
        );
    }
};
