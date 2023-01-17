import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../PlasmaState.js';
import {IReduxAction} from '../../utils/ReduxUtils.js';
import {IInlinePromptOptions} from './InlinePrompt.js';
import {PromptActions} from './InlinePromptActions.js';

export interface IPromptState {
    id: string;
    options: IInlinePromptOptions;
}

export const promptInitialState: IPromptState = {id: undefined, options: {userChoice: undefined, onClick: undefined}};
export const promptsInitialState: IPromptState[] = [];

export const promptReducer = (
    state: IPromptState = promptInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IPromptState => {
    switch (action.type) {
        case PromptActions.add:
            return _.extend({}, state, {
                id: action.payload.id,
                options: action.payload.options,
            });
        default:
            return state;
    }
};

export const promptsReducer = (
    state: IPromptState[] = promptsInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IPromptState[] => {
    switch (action.type) {
        case PromptActions.add:
            return [...state, promptReducer(undefined, action)];
        case PromptActions.remove:
            return _.reject(state, (prompt: IPromptState) => action.payload.id === prompt.id);
        default:
            return state;
    }
};
