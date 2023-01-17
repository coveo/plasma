import {BasePayload, IReduxAction} from '../../utils/ReduxUtils.js';

export const SliderActionTypes = {
    setValue: 'SLIDER_SET_VALUE',
    removeSlider: 'REMOVE_SLIDER',
};

export interface ISetSliderValuePayload {
    id: string;
    value: number;
}

const setValue = (id: string, value: number): IReduxAction<ISetSliderValuePayload> => ({
    type: SliderActionTypes.setValue,
    payload: {id, value},
});

const remove = (id: string): IReduxAction<BasePayload> => ({
    type: SliderActionTypes.removeSlider,
    payload: {id},
});

export const SliderActions = {
    setValue,
    remove,
};
