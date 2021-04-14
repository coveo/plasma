import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IModalSelectActionPayload, ModalSelectActions} from './ModalSelectActions';

export interface IModalSelectState {
    id: string;
    value: string;
}

export const modalSelectInitialState: IModalSelectState = {id: undefined, value: undefined};
export const modalSelectsInitialState: IModalSelectState[] = [];

export const modalSelectsReducer = (
    state: IModalSelectState[] = modalSelectsInitialState,
    action: IReduxAction<IModalSelectActionPayload>
): IModalSelectState[] => {
    switch (action.type) {
        case ModalSelectActions.set:
            const modalSelect = _.findWhere(state, {id: action.payload.id});
            const shouldReplaceValue = modalSelect && !_.isUndefined(action.payload.value);

            return modalSelect
                ? _.reject(state, (modalRadio) => modalRadio.id === action.payload.id).concat({
                      ...modalSelect,
                      ...action.payload,
                      value: shouldReplaceValue ? action.payload.value : modalSelect.value,
                  })
                : [...state, {...modalSelectInitialState, ...action.payload}];
        case ModalSelectActions.remove:
            return _.reject(state, (modalRadio) => action.payload.id === modalRadio.id);
        default:
            return state;
    }
};
