import {IReduxAction} from '../../utils/ReduxUtils';

export const SliderActionTypes = {
    setValue: 'SLIDER_SET_VALUE',
};

export interface ISetSliderValuePayload {
    id: string;
    value: number;
}

const setValue = (id: string, value: number): IReduxAction<ISetSliderValuePayload> => ({
    type: SliderActionTypes.setValue,
    payload: {id, value},
});

export const SliderActions = {
    setValue,
};
