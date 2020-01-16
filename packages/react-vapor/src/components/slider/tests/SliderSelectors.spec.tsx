import {ISliderState} from '../SliderReducers';
import {SliderSelectors} from '../SliderSelectors';

describe('SliderSelectors', () => {
    describe('getSliderValue', () => {
        it('should not throw when no slider exist at the specified id', () => {
            expect(() => {
                SliderSelectors.getSliderValue({sliders: []}, {id: '🥔'});
            }).not.toThrow();
        });
        it('should return undefined when the slider does not exist in the state', () => {
            expect(SliderSelectors.getSliderValue({sliders: []}, {id: '🥔'})).toBeUndefined();
        });
        it('should return the slider value if it exist in the state', () => {
            const expectedSlider: ISliderState = {
                id: '🥔',
                value: 300,
            };

            const selectedSliderValue = SliderSelectors.getSliderValue({sliders: [expectedSlider]}, {id: '🥔'});

            expect(selectedSliderValue).toEqual(expectedSlider.value);
        });
    });
});
