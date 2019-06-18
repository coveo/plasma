import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IChangeOptionsCyclePayload, IOptionsCyclePayload, OptionsCycleActions} from '../OptionsCycleActions';
import {
    IOptionsCycleState,
    optionsCycleInitialState,
    optionsCycleReducer,
    optionsCyclesInitialState,
    optionsCyclesReducer,
} from '../OptionsCycleReducers';

describe('Options cycle', () => {
    const genericAction: IReduxAction<IOptionsCyclePayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'some-options-cycle',
        },
    };

    describe('optionsCyclesReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(undefined, genericAction);

            expect(optionsCyclesState).toBe(optionsCyclesInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IOptionsCycleState[] = [{id: 'some-options-cycle', currentOption: 3}];
            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, genericAction);

            expect(optionsCyclesState).toBe(oldState);
        });

        it('should return the old state with one more IOptionsCycleState when the action is "ADD_OPTIONS_CYCLE"', () => {
            let oldState: IOptionsCycleState[] = optionsCyclesInitialState;
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.add,
                payload: {
                    id: 'some-options-cycle',
                    currentOption: 2,
                },
            };
            let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

            expect(optionsCyclesState.length).toBe(oldState.length + 1);
            expect(
                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)
                    .length
            ).toBe(1);

            oldState = optionsCyclesState;
            action.payload.id = 'some-options-cycle2';
            optionsCyclesState = optionsCyclesReducer(oldState, action);

            expect(optionsCyclesState.length).toBe(oldState.length + 1);
            expect(
                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)
                    .length
            ).toBe(1);
        });

        it('should return the old state without the IOptionsCycleState when the action is "REMOVE_OPTIONS_CYCLE', () => {
            let oldState: IOptionsCycleState[] = [
                {
                    id: 'some-options-cycle2',
                    currentOption: 1,
                },
                {
                    id: 'some-options-cycle',
                    currentOption: 0,
                },
                {
                    id: 'some-options-cycle3',
                    currentOption: 2,
                },
            ];
            const action: IReduxAction<IOptionsCyclePayload> = {
                type: OptionsCycleActions.remove,
                payload: {
                    id: 'some-options-cycle',
                },
            };
            let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

            expect(optionsCyclesState.length).toBe(oldState.length - 1);
            expect(
                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)
                    .length
            ).toBe(0);

            oldState = optionsCyclesState;
            action.payload.id = 'some-options-cycle2';
            optionsCyclesState = optionsCyclesReducer(oldState, action);

            expect(optionsCyclesState.length).toBe(oldState.length - 1);
            expect(
                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)
                    .length
            ).toBe(0);
        });

        it('should return the old state when the action is "REMOVE_OPTIONS_CYCLE" and the options cycle id does not exist', () => {
            const oldState: IOptionsCycleState[] = [
                {
                    id: 'some-options-cycle2',
                    currentOption: 4,
                },
                {
                    id: 'some-options-cycle',
                    currentOption: 2,
                },
                {
                    id: 'some-options-cycle3',
                    currentOption: 1,
                },
            ];
            const action: IReduxAction<IOptionsCyclePayload> = {
                type: OptionsCycleActions.remove,
                payload: {
                    id: 'some-option-cycle4',
                },
            };
            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

            expect(optionsCyclesState.length).toBe(oldState.length);
            expect(
                optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id)
                    .length
            ).toBe(0);
        });

        it('should return the state with the new current option for the options cycle with the action id when the action is "CHANGE_OPTIONS_CYCLE"', () => {
            const oldState: IOptionsCycleState[] = [
                {
                    id: 'some-options-cycle2',
                    currentOption: 7,
                },
                {
                    id: 'some-options-cycle',
                    currentOption: 9,
                },
                {
                    id: 'some-options-cycle3',
                    currentOption: 3,
                },
            ];
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.change,
                payload: {
                    id: 'some-options-cycle',
                    currentOption: 4,
                },
            };
            const optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);
            expect(_.findWhere(optionsCyclesState, {id: action.payload.id}).currentOption).toBe(
                action.payload.currentOption
            );
        });

        it('should not change the original state', () => {
            const expectedState = optionsCyclesInitialState.slice(0);
            const action: IReduxAction<IOptionsCyclePayload> = {
                type: OptionsCycleActions.add,
                payload: {
                    id: 'some-options-cycle',
                },
            };
            optionsCyclesReducer(optionsCyclesInitialState, action);

            expect(expectedState).toEqual(optionsCyclesInitialState);
        });
    });

    describe('optionsCycleReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(undefined, genericAction);

            expect(optionsCycleState).toBe(optionsCycleInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IOptionsCycleState = {id: 'some-option-cycle', currentOption: 2};
            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, genericAction);

            expect(optionsCycleState).toBe(oldState);
        });

        it('should return a new options cycle with the specified id and current option when the action is "ADD_OPTIONS_CYCLE"', () => {
            const oldState: IOptionsCycleState = optionsCycleInitialState;
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.add,
                payload: {
                    id: 'some-options-cycle',
                    currentOption: 4,
                },
            };
            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

            expect(optionsCycleState.id).toBe(action.payload.id);
            expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);
        });

        it('should return the original state if the action is "CHANGE_OPTIONS_CYCLE" and the id is not the one specified in the action', () => {
            const oldState: IOptionsCycleState = {
                id: 'some-options-cycle',
                currentOption: 7,
            };
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.change,
                payload: {
                    id: 'some-options-cycle5',
                    currentOption: 2,
                },
            };
            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

            expect(optionsCycleState.currentOption).toBe(oldState.currentOption);
        });

        it('should return the options cycle with a new item when the action is "CHANGE_OPTIONS_CYCLE" and the id is the one specified', () => {
            const oldState: IOptionsCycleState = {
                id: 'some-options-cycle',
                currentOption: 2,
            };
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.change,
                payload: {
                    id: 'some-options-cycle',
                    currentOption: 3,
                },
            };
            const optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

            expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);
        });

        it('should not change the original state', () => {
            const expectedState = _.extend({}, optionsCycleInitialState);
            const action: IReduxAction<IChangeOptionsCyclePayload> = {
                type: OptionsCycleActions.change,
                payload: {
                    id: 'some-options-cycle',
                    currentOption: 3,
                },
            };
            optionsCycleReducer(optionsCycleInitialState, action);

            expect(expectedState).toEqual(optionsCycleInitialState);
        });
    });
});
