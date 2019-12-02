import {IReduxAction} from '../../utils/ReduxUtils';

export const SliderActionTypes = {
    setValue: 'SLIDER_SET_VALUE',
};

export interface ISetSliderValuePayload {
    id: string;
    value: number;
    disabled: boolean;
}

const setValue = (id: string, value: number, disabled: boolean = false): IReduxAction<ISetSliderValuePayload> => ({
    type: SliderActionTypes.setValue,
    payload: {id, value, disabled},
});

export const SliderActions = {
    setValue,
};
