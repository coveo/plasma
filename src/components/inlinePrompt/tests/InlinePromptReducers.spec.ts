import { IReduxAction } from '../../../utils/ReduxUtils';
import { IPromptActionPayload, PromptActions, IAddPromptActionPayload } from '../InlinePromptActions';
import {
  IPromptState,
  promptsReducer,
  promptsInitialState,
  promptInitialState,
  promptReducer
} from '../InlinePromptReducers';

describe('InlinePrompt', () => {

  describe('prompts', () => {
    let genericAction: IReduxAction<IPromptActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'some-modalPrompt'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IPromptState[] = undefined;
      let promptsState: IPromptState[] = promptsReducer(oldState, genericAction);

      expect(promptsState).toBe(promptsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one modalPrompt', () => {
      let oldState: IPromptState = undefined;
      let promptState: IPromptState = promptReducer(oldState, genericAction);

      expect(promptState).toBe(promptInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IPromptState[] = [promptInitialState];
      let promptsState: IPromptState[] = promptsReducer(oldState, genericAction);

      expect(promptsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one modalPrompt', () => {
      let oldState: IPromptState = promptInitialState;
      let promptState: IPromptState = promptReducer(oldState, genericAction);

      expect(promptState).toBe(oldState);
    });

    it('should return the old state with one more PromptState when the action is "ADD_PROMPT"', () => {
      let oldState: IPromptState[] = promptsInitialState;
      let action: IReduxAction<IAddPromptActionPayload> = {
        type: PromptActions.add,
        payload: {
          id: 'some-modalPrompt',
          options: { userChoice: undefined, onClick: undefined }
        }
      };
      let promptsState: IPromptState[] = promptsReducer(oldState, action);

      expect(promptsState.length).toBe(oldState.length + 1);
      expect(promptsState.filter(prompt => prompt.id === action.payload.id).length).toBe(1);

      oldState = promptsState;
      action.payload.id = 'some-prompt2';
      promptsState = promptsReducer(oldState, action);

      expect(promptsState.length).toBe(oldState.length + 1);
      expect(promptsState.filter(prompt => prompt.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the PromptState with the modalPrompt id when the action is "REMOVE_PROMPT', () => {
      let oldState: IPromptState[] = [
        {
          id: 'some-prompt2',
          options: { userChoice: undefined, onClick: undefined }
        }, {
          id: 'some-modalPrompt',
          options: { userChoice: undefined, onClick: undefined }
        }, {
          id: 'some-prompt3',
          options: { userChoice: undefined, onClick: undefined }
        }
      ];
      let action: IReduxAction<IPromptActionPayload> = {
        type: PromptActions.remove,
        payload: {
          id: 'some-modalPrompt'
        }
      };
      let promptsState: IPromptState[] = promptsReducer(oldState, action);

      expect(promptsState.length).toBe(oldState.length - 1);
      expect(promptsState.filter(prompt => prompt.id === action.payload.id).length).toBe(0);

      oldState = promptsState;
      action.payload.id = 'some-prompt2';
      promptsState = promptsReducer(oldState, action);

      expect(promptsState.length).toBe(oldState.length - 1);
      expect(promptsState.filter(prompt => prompt.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_PROMPT" and the modalPrompt id does not exist', () => {
      let oldState: IPromptState[] = [
        {
          id: 'some-prompt2',
          options: { userChoice: undefined, onClick: undefined }
        }, {
          id: 'some-modalPrompt',
          options: { userChoice: undefined, onClick: undefined }
        }, {
          id: 'some-prompt3',
          options: { userChoice: undefined, onClick: undefined }
        }
      ];
      let action: IReduxAction<IPromptActionPayload> = {
        type: PromptActions.remove,
        payload: {
          id: 'some-prompt4'
        }
      };
      let promptsState: IPromptState[] = promptsReducer(oldState, action);

      expect(promptsState.length).toBe(oldState.length);
      expect(promptsState.filter(prompt => prompt.id === action.payload.id).length).toBe(0);
    });
  });
});
