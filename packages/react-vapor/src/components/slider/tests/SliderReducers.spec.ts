import {IReduxAction} from '../../../utils/ReduxUtils';
import {ISetSliderValuePayload, SliderActionTypes} from '../SliderActions';
import {ISlidersState, SliderReducer} from '../SliderReducers';

describe('SliderReducers', () => {
    const wrongSliderAction: IReduxAction<ISetSliderValuePayload> = {
        type: 'eat some 🍟 while sliding it',
        payload: {
            id: '🥔 slider',
            value: 300,
        },
    };

    let originalState: ISlidersState;
    let sliderState: ISlidersState;

    it('should return the default state if the action is not defined and the state is undefined', () => {
        originalState = undefined;
        sliderState = SliderReducer(originalState, wrongSliderAction);

        expect(sliderState).toEqual(null);
    });

    it('should return the default state if the action is not defined and the state is undefined for one slider', () => {
        originalState = undefined;
        sliderState = SliderReducer(originalState, undefined);

        expect(sliderState).toEqual(null);
    });

    it('should not modify the state if no good action type is passed', () => {
        originalState = {
            ['🍩 slider']: {id: '🍩 slider', value: 100},
            ['🥔 slider']: {id: '🥔 slider', value: 200},
        };

        sliderState = SliderReducer(originalState, wrongSliderAction);

        expect(sliderState).toEqual(originalState);
    });

    it('should change the value of the slider if the good action is dispatched', () => {
        originalState = {
            ['🍩 slider']: {id: '🍩 slider', value: 100},
            ['🥔 slider']: {id: '🥔 slider', value: 200},
        };
        const expectedState = {
            ['🍩 slider']: {id: '🍩 slider', value: 100},
            ['🥔 slider']: {id: '🥔 slider', value: 300},
        };
        const goodSliderAction: IReduxAction<ISetSliderValuePayload> = {
            type: SliderActionTypes.setValue,
            payload: {
                id: '🥔 slider',
                value: 300,
            },
        };

        sliderState = SliderReducer(originalState, goodSliderAction);
        expect(sliderState).toEqual(expectedState);
    });
});
