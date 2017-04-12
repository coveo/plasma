import * as _ from 'underscore';
import { IModalPromptActionPayload, ModalPromptAction } from './ModalPromptActions';
import { IReduxAction } from '../../utils/ReduxUtils';

export interface IModalPromptState {
  id: string;
  isOpened: boolean;
  confirmed: boolean;
}

export const modalPromptInitialState: IModalPromptState = { id: undefined, isOpened: false, confirmed: false };
export const modalPromptsInitialState: IModalPromptState[] = [];

export const modalPromptReducer = (state: IModalPromptState = modalPromptInitialState,
  action: IReduxAction<IModalPromptActionPayload>): IModalPromptState => {
  switch (action.type) {
    case ModalPromptAction.addModalPrompt:
      return {
        id: action.payload.id,
        isOpened: false,
        confirmed: false
      };
    case ModalPromptAction.cancelModalPrompt:
      return state.id !== action.payload.id
        ? state
        : {
          id: state.id,
          isOpened: false,
          confirmed: false
        };
    case ModalPromptAction.openModalPrompt:
      return state.id !== action.payload.id
        ? state
        : {
          id: state.id,
          isOpened: true,
          confirmed: false
        };
    case ModalPromptAction.confirmModalPrompt:
      return state.id !== action.payload.id
        ? state
        : {
          id: state.id,
          isOpened: false,
          confirmed: true
        };
    default:
      return state;
  }
};

export const modalPromptsReducer = (state: IModalPromptState[] = modalPromptsInitialState,
  action: IReduxAction<IModalPromptActionPayload>): IModalPromptState[] => {
  switch (action.type) {
    case ModalPromptAction.addModalPrompt:
      return [
        ...state,
        modalPromptReducer(undefined, action)
      ];
    case ModalPromptAction.removeModalPrompt:
      return _.reject(state, (modalPrompt: IModalPromptState) => {
        return action.payload.id === modalPrompt.id;
      });
    case ModalPromptAction.cancelModalPrompt:
    case ModalPromptAction.openModalPrompt:
      return state.map((modal: IModalPromptState) => modalPromptReducer(modal, action));
    case ModalPromptAction.confirmModalPrompt:
      return state.map((modal: IModalPromptState) => modalPromptReducer(modal, action));
    default:
      return state;
  }
};
