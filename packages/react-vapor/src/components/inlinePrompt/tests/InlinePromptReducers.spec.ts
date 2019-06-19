import {IReduxAction} from '../../../utils/ReduxUtils';
import {IAddPromptActionPayload, IPromptActionPayload, PromptActions} from '../InlinePromptActions';
import {
    IPromptState,
    promptInitialState,
    promptReducer,
    promptsInitialState,
    promptsReducer,
} from '../InlinePromptReducers';

describe('InlinePrompt', () => {
    describe('prompts', () => {
        const genericAction: IReduxAction<IPromptActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-prompt',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const promptsState: IPromptState[] = promptsReducer(undefined, genericAction);

            expect(promptsState).toBe(promptsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one prompt', () => {
            const promptState: IPromptState = promptReducer(undefined, genericAction);

            expect(promptState).toBe(promptInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IPromptState[] = [promptInitialState];
            const promptsState: IPromptState[] = promptsReducer(oldState, genericAction);

            expect(promptsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one prompt', () => {
            const oldState: IPromptState = promptInitialState;
            const promptState: IPromptState = promptReducer(oldState, genericAction);

            expect(promptState).toBe(oldState);
        });

        it('should return the old state with one more PromptState when the action is "ADD_PROMPT"', () => {
            let oldState: IPromptState[] = promptsInitialState;
            const action: IReduxAction<IAddPromptActionPayload> = {
                type: PromptActions.add,
                payload: {
                    id: 'some-prompt',
                    options: {userChoice: undefined, onClick: undefined},
                },
            };
            let promptsState: IPromptState[] = promptsReducer(oldState, action);

            expect(promptsState.length).toBe(oldState.length + 1);
            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(1);

            oldState = promptsState;
            action.payload.id = 'some-prompt2';
            promptsState = promptsReducer(oldState, action);

            expect(promptsState.length).toBe(oldState.length + 1);
            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the PromptState with the prompt id when the action is "REMOVE_PROMPT', () => {
            let oldState: IPromptState[] = [
                {
                    id: 'some-prompt2',
                    options: {userChoice: undefined, onClick: undefined},
                },
                {
                    id: 'some-prompt',
                    options: {userChoice: undefined, onClick: undefined},
                },
                {
                    id: 'some-prompt3',
                    options: {userChoice: undefined, onClick: undefined},
                },
            ];
            const action: IReduxAction<IPromptActionPayload> = {
                type: PromptActions.remove,
                payload: {
                    id: 'some-prompt',
                },
            };
            let promptsState: IPromptState[] = promptsReducer(oldState, action);

            expect(promptsState.length).toBe(oldState.length - 1);
            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);

            oldState = promptsState;
            action.payload.id = 'some-prompt2';
            promptsState = promptsReducer(oldState, action);

            expect(promptsState.length).toBe(oldState.length - 1);
            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);
        });

        it('should return the old state when the action is "REMOVE_PROMPT" and the prompt id does not exist', () => {
            const oldState: IPromptState[] = [
                {
                    id: 'some-prompt2',
                    options: {userChoice: undefined, onClick: undefined},
                },
                {
                    id: 'some-prompt',
                    options: {userChoice: undefined, onClick: undefined},
                },
                {
                    id: 'some-prompt3',
                    options: {userChoice: undefined, onClick: undefined},
                },
            ];
            const action: IReduxAction<IPromptActionPayload> = {
                type: PromptActions.remove,
                payload: {
                    id: 'some-prompt4',
                },
            };
            const promptsState: IPromptState[] = promptsReducer(oldState, action);

            expect(promptsState.length).toBe(oldState.length);
            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);
        });
    });
});
