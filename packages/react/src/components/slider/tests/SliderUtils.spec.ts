import * as utils from '../SliderUtils.js';

describe('SliderUtils', () => {
    describe('getValuesPositionOnRange', () => {
        it('should return the correct string according to passed params for the <Slider/> component', () => {
            expect(utils.getValuesPositionOnRange([20, 30], 50)).toEqual(utils.valuesPositionOnRange.lower);
            expect(utils.getValuesPositionOnRange([60, 70], 50)).toEqual(utils.valuesPositionOnRange.higher);
            expect(utils.getValuesPositionOnRange([40, 70], 50)).toEqual(utils.valuesPositionOnRange.both);
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
            expect(utils.getOutputValue(-2500, 50, 50)).toEqual(-2500);
            expect(utils.getOutputValue(50, 100, 50)).toEqual(100);
        });
    });

    describe('propsValidator', () => {
        it('should validate that the min is smaller than the max', () => {
            expect(() => {
                utils.propsValidator({id: '🍅', min: 200, max: 100, initialValue: 150});
            }).toThrow();
        });

        it('should validate that the initial value is smaller than the max', () => {
            expect(() => {
                utils.propsValidator({id: '🍅', min: -100, max: 100, initialValue: 200});
            }).toThrow();
        });

        it('should validate that initial valie is bigger than the min', () => {
            expect(() => {
                utils.propsValidator({id: '🍅', min: -100, max: 100, initialValue: -200});
            }).toThrow();
        });

        it('should validate that the step is a divisor of the total range', () => {
            expect(() => {
                // 100 not dividable by 3
                utils.propsValidator({id: '🍅', min: 0, max: 100, initialValue: 50, step: 3});
            }).toThrow();

            expect(() => {
                // 99 dividable by 3
                utils.propsValidator({id: '🍅', min: 1, max: 100, initialValue: 50, step: 3});
            }).not.toThrow();
        });
    });
});
