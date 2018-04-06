import {IReduxAction} from '../../../utils/ReduxUtils';
import {addCollapsibleContainer, removeCollapsibleContainer, setExpandedCollapsibleContainer} from '../CollapsibleContainerActions';
import {collapsibleContainerInitialState, collapsibleContainerReducer, collapsibleContainersInitialState, collapsibleContainersReducer, ICollapsibleContainerState} from '../CollapsibleContainerReducers';

describe('Reducers', () => {
    describe('CollapsibleContainerReducers', () => {
        const unrelatedAction: IReduxAction<any> = {
            type: 'DO_SOMETHING',
            payload: {id: ''},
        };

        it('should return the default state if the action is not related and the state is undefined ', () => {
            expect(collapsibleContainersReducer(undefined, unrelatedAction)).toEqual(collapsibleContainersInitialState);
        });

        it('should return the default state if the action is not related and the state is undefined for one collapsibleContainer state', () => {
            expect(collapsibleContainerReducer(undefined, unrelatedAction)).toEqual(collapsibleContainerInitialState);
        });

        it('should return the old state when the action is unrelated to collapsible containers', () => {
            const oldState: ICollapsibleContainerState[] = [{
                id: 'some-container',
                expanded: false,
            }];
            const newState: ICollapsibleContainerState[] = collapsibleContainersReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state when the action is unrelated for one container', () => {
            const oldState: ICollapsibleContainerState = {
                id: 'some-container',
                expanded: false,
            };
            const newState: ICollapsibleContainerState = collapsibleContainerReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state with one more CollapsibleContainer when the action is CollapsibleContainerActions.add', () => {
            const oldState: ICollapsibleContainerState[] = [{
                id: 'some-container',
                expanded: false,
            }];
            const action = addCollapsibleContainer('new-collapsible', true);
            const newState = collapsibleContainersReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(newState.filter((collapsible) => collapsible.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state with one less CollapsibleContainer when the action is CollapsibleContainerActions.remove', () => {
            const oldState: ICollapsibleContainerState[] = [{
                id: 'some-container',
                expanded: false,
            }];
            const action = removeCollapsibleContainer(oldState[0].id);
            const newState = collapsibleContainersReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((collapsible) => collapsible.id === oldState[0].id).length).toBe(0);
        });

        it('should modify the expanded state for the CollapsibleContainer having the same id as in the action payload', () => {
            const oldState: ICollapsibleContainerState[] = [{
                id: 'some-container',
                expanded: false,
            }];
            const setExpandedToTrueAction = setExpandedCollapsibleContainer(oldState[0].id, true);
            const newState = collapsibleContainersReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].expanded).toBe(true);

            const setExpandedToFalseAction = setExpandedCollapsibleContainer(oldState[0].id, false);
            const secondNewState = collapsibleContainersReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].expanded).toBe(false);
        });

        it('should not modify the expanded state for the CollapsibleContainer having a different id as in the action payload', () => {
            const oldState: ICollapsibleContainerState[] = [{
                id: 'some-container',
                expanded: undefined,
            }];
            const setExpandedToTrueAction = setExpandedCollapsibleContainer('a different id', true);
            const newState = collapsibleContainersReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].expanded).toBeUndefined();
            expect(oldState).toEqual(oldState);

            const setExpandedToFalseAction = setExpandedCollapsibleContainer('a different id', false);
            const secondNewState = collapsibleContainersReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].expanded).toBeUndefined();
            expect(oldState).toEqual(oldState);
        });
    });
});
