import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IModalSelectActionPayload, removeModalSelect, setModalSelect} from '../ModalSelectActions';
import {
    IModalSelectState,
    modalSelectInitialState,
    modalSelectsInitialState,
    modalSelectsReducer,
} from '../ModalSelectReducers';

describe('ModalSelect', () => {
    describe('ModalSelectReducers', () => {
        const genericAction: IReduxAction<IModalSelectActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-modalselect',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IModalSelectState[] = undefined;
            const modalSelectsState: IModalSelectState[] = modalSelectsReducer(oldState, genericAction);

            expect(modalSelectsState).toBe(modalSelectsInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IModalSelectState[] = [modalSelectInitialState];
            const modalSelectsState: IModalSelectState[] = modalSelectsReducer(oldState, genericAction);

            expect(modalSelectsState).toBe(oldState);
        });

        it('should return the old state with one more IModalSelectState when the action is "ModalSelectAction.set" and the id is not yet in the state', () => {
            let oldState: IModalSelectState[] = modalSelectsInitialState;
            const action = setModalSelect('idontexistinthestateyet', 'anywoulddo');
            let modalSelectsState: IModalSelectState[] = modalSelectsReducer(oldState, action);

            expect(modalSelectsState.length).toBe(oldState.length + 1);
            expect(modalSelectsState.filter((modalSelect) => modalSelect.id === action.payload.id).length).toBe(1);

            oldState = modalSelectsState;
            action.payload.id = 'ialsodontexistinthestateyet';
            modalSelectsState = modalSelectsReducer(oldState, action);

            expect(modalSelectsState.length).toBe(oldState.length + 1);
            expect(modalSelectsState.filter((modalSelect) => modalSelect.id === action.payload.id).length).toBe(1);
        });

        describe('"ModalSelectAction.set" when id is arleady in the state', () => {
            it('should return the old state with the same number of IModalSelectState and update the proper IModalSelectState', () => {
                let oldState: IModalSelectState[] = [
                    {...modalSelectInitialState, id: 'somealreadyexistingmodalselect'},
                ];
                const modalSelectId = 'testModalSelect';
                const action = setModalSelect(modalSelectId, 'anywoulddo');
                let modalSelectsState: IModalSelectState[] = modalSelectsReducer(oldState, action);

                expect(modalSelectsState.length).toBe(oldState.length + 1);
                expect(modalSelectsState.filter((modalSelect) => modalSelect.id === action.payload.id).length).toBe(1);

                oldState = modalSelectsState;
                action.payload.value = 'check if the value changed';
                modalSelectsState = modalSelectsReducer(oldState, action);

                expect(modalSelectsState.length).toBe(oldState.length);
                expect(_.findWhere(modalSelectsState, {id: action.payload.id}).value).toBe(action.payload.value);
                expect(_.reject(modalSelectsState, (modal) => modal.id === action.payload.id)).toEqual(
                    _.reject(oldState, (modal) => modal.id === action.payload.id)
                );
            });
        });

        it('should return the old state without the IModalSelectState when the action is "ModalSelectAction.remove"', () => {
            const oldState: IModalSelectState[] = [
                {
                    id: 'some-modalSelect1',
                    value: 'somevalue',
                },
                {
                    id: 'some-modalSelect2',
                    value: 'somevalue2',
                },
            ];
            const action: IReduxAction<IModalSelectActionPayload> = removeModalSelect('some-modalSelect1');
            const modalSelectsState: IModalSelectState[] = modalSelectsReducer(oldState, action);

            expect(modalSelectsState.length).toBe(oldState.length - 1);
            expect(modalSelectsState.filter((modalSelect) => modalSelect.id === action.payload.id).length).toBe(0);
        });
    });
});
