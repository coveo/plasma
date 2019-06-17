import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IInlinePromptOptions} from './InlinePrompt';
import {PromptActions} from './InlinePromptActions';

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
            return _.reject(state, (prompt: IPromptState) => {
                return action.payload.id === prompt.id;
            });
        default:
            return state;
    }
};
