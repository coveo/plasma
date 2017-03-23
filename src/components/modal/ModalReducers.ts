import * as _ from 'underscore';
import { IModalActionPayload, ModalAction } from './ModalActions';
import { IReduxAction } from '../../utils/ReduxUtils';

export interface IModalState {
  id: string;
  isOpened: boolean;
}

export const modalInitialState: IModalState = { id: undefined, isOpened: false };
export const modalsInitialState: IModalState[] = [];

export const modalReducer = (state: IModalState = modalInitialState,
  action: IReduxAction<IModalActionPayload>): IModalState => {
  switch (action.type) {
    case ModalAction.addModal:
      return {
        id: action.payload.id,
        isOpened: false
      };
    case ModalAction.closeModal:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        isOpened: false
      };
    case ModalAction.openModal:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        isOpened: true
      };
    default:
      return state;
  }
};

export const modalsReducer = (state: IModalState[] = modalsInitialState,
  action: IReduxAction<IModalActionPayload>): IModalState[] => {
  switch (action.type) {
    case ModalAction.addModal:
      return [
        ...state,
        modalReducer(undefined, action)
      ];
    case ModalAction.removeModal:
      return _.reject(state, (modal: IModalState) => {
        return action.payload.id === modal.id;
      });
    case ModalAction.closeModal:
    case ModalAction.openModal:
      return state.map((modal: IModalState) => modalReducer(modal, action));
    default:
      return state;
  }
};
