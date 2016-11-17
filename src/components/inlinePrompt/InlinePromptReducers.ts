import { IInlinePromptOptions } from './InlinePrompt';
import { IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { PromptActions } from './InlinePromptActions';
import * as _ from 'underscore';

export interface IPromptState {
  id: string;
  options: IInlinePromptOptions;
}

export const promptInitialState: IPromptState = { id: undefined, options: { userChoice: undefined, onClick: undefined } };
export const promptsInitialState: IPromptState[] = [];

export const promptReducer = (state: IPromptState = promptInitialState, action: IReduxAction<IReduxActionPayload>): IPromptState => {
  switch (action.type) {
    case PromptActions.add:
      return _.extend({}, state, {
        id: action.payload.id,
        options: action.payload.options
      });
    default:
      return state;
  }
};

export const promptsReducer = (state: IPromptState[] = promptsInitialState, action: IReduxAction<IReduxActionPayload>): IPromptState[] => {
  switch (action.type) {
    case PromptActions.add:
      return [
        ...state,
        promptReducer(undefined, action)
      ];
    case PromptActions.remove:
      return _.reject(state, (p) => {
        return action.payload.id === p.id;
      });
    default:
      return state;
  }
};
