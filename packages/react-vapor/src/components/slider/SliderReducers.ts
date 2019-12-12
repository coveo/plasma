import {IReduxAction} from '../../utils/ReduxUtils';
import {ISetSliderValuePayload, SliderActionTypes} from './SliderActions';

export interface ISlidersState {
    [key: string]: ISliderState;
}

export interface ISliderState {
    id: string;
    value: number;
}

export const SliderReducer = (state: ISlidersState = null, action: IReduxAction<ISetSliderValuePayload>) => {
    if (action?.type === SliderActionTypes.setValue) {
        return {
            ...state,
            [action.payload.id]: {
                id: action.payload.id,
                value: action.payload.value,
            },
        };
    }
    return state;
};
