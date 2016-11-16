import { IInlinePromptOptions, IUserChoice } from './InlinePrompt';
import { IReduxAction } from '../../utils/ReduxUtils';

export interface IPromptActionPayload {
  id: string;
  options?: IInlinePromptOptions;
}

export const promptActions = {
  add: 'ADD_PROMPT',
  remove: 'REMOVE_PROMPT'
};

export const addPrompt = (id: string, onClick: () => void, userChoice: IUserChoice, isOpened: boolean, className: string): IReduxAction<IPromptActionPayload> => ({
  type: promptActions.add,
  payload: {
    id,
    options: {
      onClick,
      userChoice,
      isOpened,
      className
    }
  }
});

export const removePrompt = (id: string): IReduxAction<IPromptActionPayload> => ({
  type: promptActions.remove,
  payload: {
    id
  }
});
