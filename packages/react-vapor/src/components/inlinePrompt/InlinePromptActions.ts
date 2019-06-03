import {IReduxAction} from '../../utils/ReduxUtils';
import {IInlinePromptOptions} from './InlinePrompt';

export interface IPromptActionPayload {
    id: string;
}

export interface IAddPromptActionPayload extends IPromptActionPayload {
    options: IInlinePromptOptions;
}

export const PromptActions = {
    add: 'ADD_PROMPT',
    remove: 'REMOVE_PROMPT',
};

export const addPrompt = (id: string, options: IInlinePromptOptions): IReduxAction<IAddPromptActionPayload> => ({
    type: PromptActions.add,
    payload: {
        id,
        options,
    },
});

export const removePrompt = (id: string): IReduxAction<IPromptActionPayload> => ({
    type: PromptActions.remove,
    payload: {
        id,
    },
});
