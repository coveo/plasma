import {findWhere} from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ISubNavigationActionPayload, SubNavigationActions} from '../SubNavigationActions';
import {
    ISubNavigationState,
    subNavigationInitialState,
    subNavigationReducer,
    subNavigationsInitialState,
    subNavigationsReducer,
} from '../SubNavigationReducers';

describe('Reducers', () => {
    describe('subNavigations', () => {
        const genericAction: IReduxAction<ISubNavigationActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'sub-navigation',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: ISubNavigationState[] = subNavigationsReducer(undefined, genericAction);

            expect(newState).toBe(subNavigationsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one sub navigation', () => {
            const newState: ISubNavigationState = subNavigationReducer(undefined, genericAction);

            expect(newState).toBe(subNavigationInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ISubNavigationState[] = [subNavigationInitialState];
            const newState: ISubNavigationState[] = subNavigationsReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one facet', () => {
            const oldState: ISubNavigationState = subNavigationInitialState;
            const newState: ISubNavigationState = subNavigationReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state with one more SubNavigationState when the action is "ADD_SUB_NAVIGATION"', () => {
            let oldState: ISubNavigationState[] = subNavigationsInitialState;
            const action: IReduxAction<ISubNavigationActionPayload> = {
                type: SubNavigationActions.add,
                payload: {
                    id: 'one',
                },
            };
            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(1);

            oldState = newState;
            action.payload.id = 'two';
            newState = subNavigationsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the SubNavigationState with the action facet when the action is "REMOVE_SUB_NAVIGATION"', () => {
            const firstIdtoRemove = 'sub-nav-3';
            const secondIdtoRemove = 'sub-nav-2';
            let oldState: ISubNavigationState[] = [
                {
                    id: secondIdtoRemove,
                    selected: '',
                },
                {
                    id: firstIdtoRemove,
                    selected: 'one',
                },
                {
                    id: 'sub-nav-1',
                    selected: 'test',
                },
            ];
            const action: IReduxAction<ISubNavigationActionPayload> = {
                type: SubNavigationActions.remove,
                payload: {
                    id: firstIdtoRemove,
                },
            };
            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(0);

            oldState = newState;
            action.payload.id = secondIdtoRemove;
            newState = subNavigationsReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((subNav) => subNav.id === action.payload.id).length).toBe(0);
        });

        it('should set the selected value in SubNavigationState when the action is "SELECT_SUB_NAVIGATION"', () => {
            const firstIdToSet = 'sub-nav-1';
            const firstExpectedSelected = 'k';

            const secondIdToSet = 'sub-nav-2';
            const secondExpectedSelected = 'k-again';

            const oldState: ISubNavigationState[] = [
                {
                    id: secondIdToSet,
                    selected: '',
                },
                {
                    id: 'sub-nav-3',
                    selected: 'one',
                },
                {
                    id: firstIdToSet,
                    selected: 'test',
                },
            ];
            const action: IReduxAction<ISubNavigationActionPayload> = {
                type: SubNavigationActions.select,
                payload: {
                    id: firstIdToSet,
                    selected: firstExpectedSelected,
                },
            };
            let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

            expect(findWhere(newState, {id: firstIdToSet}).selected).toBe(firstExpectedSelected);

            action.payload = {id: secondIdToSet, selected: secondExpectedSelected};
            newState = subNavigationsReducer(oldState, action);

            expect(findWhere(newState, {id: secondIdToSet}).selected).toBe(secondExpectedSelected);
        });
    });
});
