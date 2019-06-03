import {IReduxAction} from '../../../utils/ReduxUtils';
import {addPopover, removePopover, setPopoverIsOpen} from '../PopoverActions';
import {popoversInitialState, popoversReducer, PopoverState} from '../PopoverReducers';

describe('Reducers', () => {
    describe('PopoversReducers', () => {
        const unrelatedAction: IReduxAction<any> = {
            type: 'DO_SOMETHING',
            payload: {id: ''},
        };

        it('should return the default state if the action is not related and the state is undefined ', () => {
            expect(popoversReducer(undefined, unrelatedAction)).toEqual(popoversInitialState);
        });

        it('should return the old state when the action is unrelated to popover s', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: false,
            }];
            const newState: PopoverState[] = popoversReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state when the action is unrelated for one ', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: false,
            }];
            const newState: PopoverState[] = popoversReducer(oldState, unrelatedAction);

            expect(oldState).toEqual(newState);
        });

        it('should return the old state with one more Popover when the action is PopoverActions.add', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: false,
            }];
            const action = addPopover('new-popover', true);
            const newState = popoversReducer(oldState, action);

            expect(newState.length).toBe(oldState.length + 1);
            expect(newState.filter((popover) => popover.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state with one less Popover when the action is PopoverActions.remove', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: false,
            }];
            const action = removePopover(oldState[0].id);
            const newState = popoversReducer(oldState, action);

            expect(newState.length).toBe(oldState.length - 1);
            expect(newState.filter((popover) => popover.id === oldState[0].id).length).toBe(0);
        });

        it('should modify the isOpen state for the Popover having the same id as in the action payload', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: false,
            }];
            const setExpandedToTrueAction = setPopoverIsOpen(oldState[0].id, true);
            const newState = popoversReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].isOpen).toBe(true);

            const setExpandedToFalseAction = setPopoverIsOpen(oldState[0].id, false);
            const secondNewState = popoversReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].isOpen).toBe(false);
        });

        it('should not modify the isOpen state for the Popover having a different id as in the action payload', () => {
            const oldState: PopoverState[] = [{
                id: 'some-',
                isOpen: undefined,
            }];
            const setExpandedToTrueAction = setPopoverIsOpen('a different id', true);
            const newState = popoversReducer(oldState, setExpandedToTrueAction);

            expect(newState[0].isOpen).toBeUndefined();
            expect(oldState).toEqual(oldState);

            const setExpandedToFalseAction = setPopoverIsOpen('a different id', false);
            const secondNewState = popoversReducer(oldState, setExpandedToFalseAction);

            expect(secondNewState[0].isOpen).toBeUndefined();
            expect(oldState).toEqual(oldState);
        });
    });
});
