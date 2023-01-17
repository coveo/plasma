import {BasePayload, IReduxAction} from '../../utils/ReduxUtils.js';
import {ISetSliderValuePayload, SliderActionTypes} from './SliderActions.js';

export interface ISlidersState {
    [key: string]: ISliderState;
}

export interface ISliderState {
    id: string;
    value: number;
}

export const SliderReducer = (
    state: ISlidersState = null,
    action: IReduxAction<ISetSliderValuePayload> | IReduxAction<BasePayload>
) => {
    if (action?.type === SliderActionTypes.setValue) {
        const {id, value} = action.payload as ISetSliderValuePayload;
        return {...state, [id]: {id, value}};
    }
    if (action?.type === SliderActionTypes.removeSlider) {
        const clone = structuredClone(state);
        delete clone[action.payload.id];
        return clone;
    }
    return state;
};
