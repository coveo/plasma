import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {addSelect, ISelectPayload, removeSelect} from '../SelectActions';
import {
    ISelectState,
    selectCompositeInitialState,
    selectCompositeReducer,
    selectInitialState,
    selectReducer,
} from '../SelectReducers';

describe('Select', () => {
    describe('Select Reducers', () => {
        const genericAction: IReduxAction<ISelectPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'select-id',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const newState: ISelectState[] = selectCompositeReducer(undefined, genericAction);

            expect(newState).toBe(selectCompositeInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one select', () => {
            const newState: ISelectState = selectReducer(undefined, genericAction);

            expect(newState).toBe(selectInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: ISelectState[] = [selectInitialState];
            const newState: ISelectState[] = selectCompositeReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one select', () => {
            const oldState: ISelectState = selectInitialState;
            const newState: ISelectState = selectReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one select which is in the state', () => {
            const oldState: ISelectState = {...selectInitialState, id: genericAction.payload.id};
            const newState: ISelectState = selectReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        describe('ADD_SELECT', () => {
            const id = 'added-select';

            it('should return the old state with one more select', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const newState: ISelectState[] = selectCompositeReducer(oldState, addSelect(id));

                expect(newState.length).toBe(oldState.length + 1);
                expect(newState[1].id).toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, addSelect(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });

        describe('REMOVE_SELECT', () => {
            const id = 'to-remove-select';
            let defaultState: ISelectState[];

            beforeEach(() => {
                defaultState = [_.extend({}, selectInitialState, {id}), selectInitialState];
            });

            it('should return the old state with one less select', () => {
                const oldState: ISelectState[] = defaultState;
                const newState: ISelectState[] = selectCompositeReducer(oldState, removeSelect(id));

                expect(newState.length).toBe(oldState.length - 1);
                expect(newState[0].id).not.toBe(id);
            });

            it('should not modify the old state', () => {
                const oldState: ISelectState[] = [selectInitialState];
                const oldStateBefore = _.clone(oldState);
                selectCompositeReducer(oldState, removeSelect(id));

                expect(oldState).toEqual(oldStateBefore);
            });
        });
    });
});
