import {IReduxAction} from '../../../utils/ReduxUtils';
import {addCollapsible, removeCollapsible, setCollapsibleExpanded} from '../CollapsibleActions';
import {collapsiblesInitialState, collapsiblesReducer, CollapsibleState} from '../CollapsibleReducers';

describe('Reducers', () => {
    describe('CollapsiblesReducers', () => {
        const unrelatedAction: IReduxAction<any> = {
            type: 'DO_SOMETHING',
            payload: {id: ''},
        };

        it('should return the default state if the action is not related and the state is undefined ', () => {
            expect(collapsiblesReducer(undefined, unrelatedAction)).toEqual(collapsiblesInitialState);
        });

        it('should return the old state when the action is unrelated to collapsible s', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: false,
                },
            ];
            const newState: CollapsibleState[] = collapsiblesReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state when the action is unrelated for one ', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: false,
                },
            ];
            const newState: CollapsibleState[] = collapsiblesReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state with one more Collapsible when the action is CollapsibleActions.add', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: false,
                },
            ];
            const action = addCollapsible('new-collapsible', true);
            const newState = collapsiblesReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(newState.filter((collapsible) => collapsible.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state with one less Collapsible when the action is CollapsibleActions.remove', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: false,
                },
            ];
            const action = removeCollapsible(oldState[0].id);
            const newState = collapsiblesReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((collapsible) => collapsible.id === oldState[0].id).length).toBe(0);
        });

        it('should modify the expanded state for the Collapsible having the same id as in the action payload', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: false,
                },
            ];
            const setExpandedToTrueAction = setCollapsibleExpanded(oldState[0].id, true);
            const newState = collapsiblesReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].expanded).toBe(true);

            const setExpandedToFalseAction = setCollapsibleExpanded(oldState[0].id, false);
            const secondNewState = collapsiblesReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].expanded).toBe(false);
        });

        it('should not modify the expanded state for the Collapsible having a different id as in the action payload', () => {
            const oldState: CollapsibleState[] = [
                {
                    id: 'some-',
                    expanded: undefined,
                },
            ];
            const setExpandedToTrueAction = setCollapsibleExpanded('a different id', true);
            const newState = collapsiblesReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].expanded).toBeUndefined();
            expect(oldState).toEqual(oldState);

            const setExpandedToFalseAction = setCollapsibleExpanded('a different id', false);
            const secondNewState = collapsiblesReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].expanded).toBeUndefined();
            expect(oldState).toEqual(oldState);
        });
    });
});
