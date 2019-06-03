import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IModalActionPayload, ModalAction} from './ModalActions';

export interface IModalState {
    id: string;
    isOpened: boolean;
}

export const modalInitialState: IModalState = {id: undefined, isOpened: false};
export const modalsInitialState: IModalState[] = [];

export const modalReducer = (
    state: IModalState = modalInitialState,
    action: IReduxAction<IModalActionPayload>,
): IModalState => {
    switch (action.type) {
        case ModalAction.addModal:
            return {
                id: action.payload.id,
                isOpened: !!action.payload.isOpened,
            };
        case ModalAction.openModal:
            return state.id !== action.payload.id
                ? state
                : {
                    ...state,
                    isOpened: true,
                };
        case ModalAction.closeModals:
            return action.payload.ids && action.payload.ids.length !== 0 && !_.contains(action.payload.ids, state.id)
                ? state
                : {
                    ...state,
                    isOpened: false,
                };

        default:
            return state;
    }
};

export const modalsReducer = (
    state: IModalState[] = modalsInitialState,
    action: IReduxAction<IModalActionPayload>,
): IModalState[] => {
    switch (action.type) {
        case ModalAction.addModal:
            return [
                ...state,
                modalReducer(undefined, action),
            ];
        case ModalAction.removeModal:
            return _.reject(state, (modal: IModalState) => {
                return action.payload.id === modal.id;
            });
        case ModalAction.closeModals:
        case ModalAction.openModal:
            return state.map((modal: IModalState) => modalReducer(modal, action));
        default:
            return state;
    }
};

export const openModalsReducer = (state: string[] = [], action: IReduxAction<IModalActionPayload>): string[] => {
    switch (action.type) {
        case ModalAction.openModal:
            return [
                ...state,
                action.payload.id,
            ];
        case ModalAction.closeModals:
            return _.without(state, ...action.payload.ids);
        default:
            return state;
    }
};
