import {IReduxAction} from '../../utils/ReduxUtils';
import {ISetSliderValuePayload, SliderActionTypes} from './SliderActions';

export interface ISlidersState {
    [key: string]: ISliderState;
}

export interface ISliderState {
    value: number;
    disabled: boolean;
}

export const SliderReducer = (state: ISlidersState = {}, action: IReduxAction<ISetSliderValuePayload>) => {
    if (action?.type === SliderActionTypes.setValue) {
        return {...state, [action.payload.id]: {value: action.payload.value, disabled: action.payload.disabled}};
    }
    return state;
};
