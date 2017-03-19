import { IReduxAction } from '../../utils/ReduxUtils';

export interface IModalActionPayload {
  id: string;
}

export const ModalAction = {
  closeModal: 'CLOSE_MODAL',
  openModal: 'OPEN_MODAL',
  addModal: 'ADD_MODAL',
  removeModal: 'REMOVE_MODAL'
};

export const closeModal = (id: string): IReduxAction<IModalActionPayload> => ({
  type: ModalAction.closeModal,
  payload: {
    id
  }
});

export const openModal = (id: string): IReduxAction<IModalActionPayload> => ({
  type: ModalAction.openModal,
  payload: {
    id
  }
});

export const addModal = (id: string): IReduxAction<IModalActionPayload> => ({
  type: ModalAction.addModal,
  payload: {
    id
  }
});

export const removeModal = (id: string): IReduxAction<IModalActionPayload> => ({
  type: ModalAction.removeModal,
  payload: {
    id
  }
});
