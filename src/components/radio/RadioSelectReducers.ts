import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IRadioSelectActionPayload, RadioSelectActions} from './RadioSelectActions';

export interface IRadioSelectState {
    id: string;
    value: string;
    disabledValues: string[];
}

export const radioSelectInitialState: IRadioSelectState = {id: undefined, value: undefined, disabledValues: undefined};
export const radioSelectsInitialState: IRadioSelectState[] = [];

export const radioSelectsReducer = (
    state: IRadioSelectState[] = radioSelectsInitialState,
    action: IReduxAction<IRadioSelectActionPayload>,
): IRadioSelectState[] => {
    switch (action.type) {
        case RadioSelectActions.set:
            const radioSelect = _.findWhere(state, {id: action.payload.id});
            return radioSelect
                ? _.reject(state, (radio) => radio.id === action.payload.id).concat({...radioSelect, ...action.payload})
                : [...state, {...radioSelectInitialState, ...action.payload}];
        case RadioSelectActions.remove:
            return _.reject(state, (radio) => action.payload.id === radio.id);
        default:
            return state;
    }
};
