import { IReduxAction } from '../../../utils/ReduxUtils';
import { IModalPromptActionPayload, ModalPromptAction } from '../ModalPromptActions';
import { IModalPromptState, modalPromptsInitialState, modalPromptInitialState, modalPromptsReducer, modalPromptReducer } from '../ModalPromptReducers';

describe('ModalPrompt', () => {

  describe('ModalPromptReducers', () => {

    const ids = ['some-modal-prompt-0', 'some-modal-prompt1', 'some-modal-prompt2', 'some-modal-prompt3'];

    const genericAction: IReduxAction<IModalPromptActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: ids[0]
      }
    };

    const findInState = (state: IModalPromptState[], id: string): IModalPromptState[] => {
      return state.filter(modalPrompt => modalPrompt.id === id);
    };

    const findOneInState = (state: IModalPromptState[], id: string): IModalPromptState => {
      return findInState(state, id)[0];
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      const oldState: IModalPromptState[] = undefined;
      const modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, genericAction);

      expect(modalPromptsState).toBe(modalPromptsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one modalPrompt', () => {
      const oldState: IModalPromptState = undefined;
      const modalPromptState: IModalPromptState = modalPromptReducer(oldState, genericAction);

      expect(modalPromptState).toBe(modalPromptInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      const oldState: IModalPromptState[] = [modalPromptInitialState];
      const modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, genericAction);

      expect(modalPromptsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one modalPrompt', () => {
      const oldState: IModalPromptState = modalPromptInitialState;
      const modalPromptState: IModalPromptState = modalPromptReducer(oldState, genericAction);

      expect(modalPromptState).toBe(oldState);
    });

    it('should return the old state with one more IModalPromptState when the action is "ModalPromptAction.addModalPrompt"', () => {
      let oldState: IModalPromptState[] = modalPromptsInitialState;
      const action: IReduxAction<IModalPromptActionPayload> = {
        type: ModalPromptAction.addModalPrompt,
        payload: {
          id: ids[0]
        }
      };
      let modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length + 1);
      expect(findInState(modalPromptsState, action.payload.id).length).toBe(1);

      oldState = modalPromptsState;
      action.payload.id = ids[2];
      modalPromptsState = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length + 1);
      expect(findInState(modalPromptsState, action.payload.id).length).toBe(1);
    });

    it('should return the old state without the IModalPromptState when the action is "ModalPromptAction.removeModalPrompt"', () => {
      let oldState: IModalPromptState[] = [
        {
          id: ids[2],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[1],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[3],
          isOpened: false,
          confirmed: false
        }
      ];
      const action: IReduxAction<IModalPromptActionPayload> = {
        type: ModalPromptAction.removeModalPrompt,
        payload: {
          id: ids[1]
        }
      };
      let modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length - 1);
      expect(findInState(modalPromptsState, action.payload.id).length).toBe(0);

      oldState = modalPromptsState;
      action.payload.id = ids[2];
      modalPromptsState = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length - 1);
      expect(findInState(modalPromptsState, action.payload.id).length).toBe(0);
    });

    it('should open a modalPrompt when the action is "ModalPromptAction.openModalPrompt"', () => {
      const oldState: IModalPromptState[] = [
        {
          id: ids[1],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[2],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[3],
          isOpened: true,
          confirmed: false
        }
      ];

      const action: IReduxAction<IModalPromptActionPayload> = {
        type: ModalPromptAction.openModalPrompt,
        payload: {
          id: ids[1]
        }
      };
      const modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length);
      expect(findOneInState(modalPromptsState, action.payload.id).isOpened).toBe(true);
      expect(findOneInState(modalPromptsState, ids[2]).isOpened).toBe(false);
      expect(findOneInState(modalPromptsState, ids[3]).isOpened).toBe(true);
    });

    it('should close a modalPrompt when the action is "ModalPromptAction.cancelModalPrompt"', () => {
      const oldState: IModalPromptState[] = [
        {
          id: ids[1],
          isOpened: true,
          confirmed: false
        }, {
          id: ids[2],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[3],
          isOpened: true,
          confirmed: false
        }
      ];

      const action: IReduxAction<IModalPromptActionPayload> = {
        type: ModalPromptAction.cancelModalPrompt,
        payload: {
          id: ids[1]
        }
      };
      const modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length);
      expect(findOneInState(modalPromptsState, action.payload.id).isOpened).toBe(false);
      expect(findOneInState(modalPromptsState, ids[2]).isOpened).toBe(false);
      expect(findOneInState(modalPromptsState, ids[3]).isOpened).toBe(true);
    });

    it('should set confirmed of modalPrompt to true when the action is "ModalPromptAction.confirmModalPrompt"', () => {
      const oldState: IModalPromptState[] = [
        {
          id: ids[1],
          isOpened: true,
          confirmed: false
        }, {
          id: ids[2],
          isOpened: false,
          confirmed: false
        }, {
          id: ids[3],
          isOpened: true,
          confirmed: true
        }
      ];

      const action: IReduxAction<IModalPromptActionPayload> = {
        type: ModalPromptAction.confirmModalPrompt,
        payload: {
          id: ids[1]
        }
      };
      const modalPromptsState: IModalPromptState[] = modalPromptsReducer(oldState, action);

      expect(modalPromptsState.length).toBe(oldState.length);

      expect(findOneInState(modalPromptsState, action.payload.id).confirmed).toBe(true);
      expect(findOneInState(modalPromptsState, ids[2]).confirmed).toBe(false);
      expect(findOneInState(modalPromptsState, ids[3]).confirmed).toBe(true);
    });
  });
});
