import { IReduxAction } from '../../utils/ReduxUtils';

export interface IModalPromptActionPayload {
  id: string;
}

export const ModalPromptAction = {
  cancelModalPrompt: 'CANCEL_MODAL_PROMPT',
  openModalPrompt: 'OPEN_MODAL_PROMPT',
  addModalPrompt: 'ADD_MODAL_PROMPT',
  removeModalPrompt: 'REMOVE_MODAL_PROMPT',
  confirmModalPrompt: 'CONFIRM_MODAL_PROMPT',
};

export const cancelModalPrompt = (id: string): IReduxAction<IModalPromptActionPayload> => ({
  type: ModalPromptAction.cancelModalPrompt,
  payload: {
    id
  }
});

export const openModalPrompt = (id: string): IReduxAction<IModalPromptActionPayload> => ({
  type: ModalPromptAction.openModalPrompt,
  payload: {
    id
  }
});

export const addModalPrompt = (id: string): IReduxAction<IModalPromptActionPayload> => ({
  type: ModalPromptAction.addModalPrompt,
  payload: {
    id
  }
});

export const removeModalPrompt = (id: string): IReduxAction<IModalPromptActionPayload> => ({
  type: ModalPromptAction.removeModalPrompt,
  payload: {
    id
  }
});

export const confirmModalPrompt = (id: string): IReduxAction<IModalPromptActionPayload> => ({
  type: ModalPromptAction.confirmModalPrompt,
  payload: {
    id
  }
});

