import * as utils from '../SliderUtils';

describe('SliderUtils', () => {
    describe('getValuesPositionOnRange', () => {
        it('should return the correct string according to passed params for the <MiddleSlider/> component', () => {
            expect(utils.getValuesPositionOnRange([20, 30], 50)).toEqual(utils.valuesPositionOnRange.lower);
            expect(utils.getValuesPositionOnRange([60, 70], 50)).toEqual(utils.valuesPositionOnRange.higher);
            expect(utils.getValuesPositionOnRange([40, 70], 50)).toEqual(utils.valuesPositionOnRange.both);
        });
    });

    describe('getCrossingPoint', () => {
        it('should get the correct crossing point of the slider handles for the <MiddleSlider/> component', () => {
            expect(utils.getCrossingPoint(-1000, 1000)).toEqual(50);
            expect(utils.getCrossingPoint(-333, 1000)).toEqual(25);
            expect(utils.getCrossingPoint(-1000, 333)).toEqual(75);
        });
    });

    describe('convertInitialValuetoRangeValue', () => {
        it('should convert the initial slider value to the actual range value of the <MiddleSlider/> component', () => {
            expect(utils.convertInitialValuetoRangeValue(-1000, 1000, 1000)).toEqual(100);
            expect(utils.convertInitialValuetoRangeValue(-500, 500, -500)).toEqual(0);
            expect(utils.convertInitialValuetoRangeValue(-500, 1500, 0)).toEqual(25);
        });
    });

    describe('handleIsNotatCrossingPoint', () => {
        it('should return true if handle is at crossing point and false if handle is not at crossing point', () => {
            expect(utils.handleIsAtCrossingPoint(25, 50, 1, 50)).toBeTruthy();
            expect(utils.handleIsAtCrossingPoint(50, 75, 1, 50)).toBeFalsy();
            expect(utils.handleIsAtCrossingPoint(50, 75, 0, 50)).toBeTruthy();
            expect(utils.handleIsAtCrossingPoint(25, 50, 0, 50)).toBeFalsy();
        });
    });

    describe('getComputedRange', () => {
        it('should compute the wanted value from the slider range according to the chosen custom range', () => {
            expect(utils.getComputedRangeValue(25, 50, -5000, 5000, 50)).toEqual(-2500);
            expect(utils.getComputedRangeValue(50, 60, -500, 500, 50)).toEqual(100);
        });
    });

    describe('propsValidator', () =>
        it('should validate that the <MiddleSlider/> props are valid', () => {
            expect(() => {
                utils.propsValidator(100, 200, 150);
            }).toThrow(
                new Error(
                    '100 is not a valid minimum MiddleSlider range value. Minimum MiddleSlider range value should be under 0'
                )
            );
            expect(() => {
                utils.propsValidator(-200, -100, -150);
            }).toThrow(
                new Error(
                    `-100 is not a valid maximum MiddleSlider range value. Maximum MiddleSlider range value should be over 0`
                )
            );
            expect(() => {
                utils.propsValidator(-100, 100, 200);
            }).toThrow(
                new Error(
                    `MiddleSlider initial value is not within defined range. initialValue:200 should be set between -100 and 100`
                )
            );
            expect(() => {
                utils.propsValidator(-100, 100, -200);
            }).toThrow(
                new Error(
                    `MiddleSlider initial value is not within defined range. initialValue:-200 should be set between -100 and 100`
                )
            );
            expect(() => {
                utils.propsValidator(-200, 100, 50);
            }).not.toThrow();
        }));
});
