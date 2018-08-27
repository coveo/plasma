import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IModalActionPayload, ModalAction} from '../ModalActions';
import {IModalState, modalInitialState, modalReducer, modalsInitialState, modalsReducer, openModalsReducer} from '../ModalReducers';

describe('Modal', () => {

    describe('ModalReducers', () => {
        const genericAction: IReduxAction<IModalActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-modal',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const modalsState: IModalState[] = modalsReducer(undefined, genericAction);

            expect(modalsState).toBe(modalsInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one modal', () => {
            const modalState: IModalState = modalReducer(undefined, genericAction);

            expect(modalState).toBe(modalInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IModalState[] = [modalInitialState];
            const modalsState: IModalState[] = modalsReducer(oldState, genericAction);

            expect(modalsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one modal', () => {
            const oldState: IModalState = modalInitialState;
            const modalState: IModalState = modalReducer(oldState, genericAction);

            expect(modalState).toBe(oldState);
        });

        it('should return the old state with one more IModalState when the action is "ModalAction.addModal"', () => {
            let oldState: IModalState[] = modalsInitialState;
            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.addModal,
                payload: {
                    id: 'some-modal',
                },
            };
            let modalsState: IModalState[] = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length + 1);
            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(1);

            oldState = modalsState;
            action.payload.id = 'some-modal2';
            modalsState = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length + 1);
            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state with one more IModalState with isOpened false when the action is "ModalAction.addModal" without isOpened in the payload', () => {
            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.addModal,
                payload: {
                    id: 'some-modal',
                },
            };
            const modalsState: IModalState[] = modalsReducer(modalsInitialState, action);

            expect(modalsState[0].isOpened).toBe(false);
        });

        it('should return the old state with one more IModalState with isOpened true when the action is "ModalAction.addModal" with isOpened set to true in the payload', () => {
            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.addModal,
                payload: {
                    id: 'some-modal',
                    isOpened: true,
                },
            };
            const modalsState: IModalState[] = modalsReducer(modalsInitialState, action);

            expect(modalsState[0].isOpened).toBe(true);
        });

        it('should return the old state without the IModalState when the action is "ModalAction.removeModal"', () => {
            let oldState: IModalState[] = [
                {
                    id: 'some-modal2',
                    isOpened: false,
                }, {
                    id: 'some-modal1',
                    isOpened: false,
                }, {
                    id: 'some-modal3',
                    isOpened: false,
                },
            ];
            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.removeModal,
                payload: {
                    id: 'some-modal1',
                },
            };
            let modalsState: IModalState[] = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length - 1);
            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(0);

            oldState = modalsState;
            action.payload.id = 'some-modal2';
            modalsState = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length - 1);
            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(0);
        });

        it('should open a modal when the action is "ModalAction.openModal"', () => {
            const oldState: IModalState[] = [
                {
                    id: 'some-modal1',
                    isOpened: false,
                }, {
                    id: 'some-modal2',
                    isOpened: false,
                }, {
                    id: 'some-modal3',
                    isOpened: true,
                },
            ];

            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.openModal,
                payload: {
                    id: 'some-modal1',
                },
            };
            const modalsState: IModalState[] = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length);
            expect(modalsState.filter((modal) => modal.id === action.payload.id)[0].isOpened).toBe(true);
            expect(modalsState.filter((modal) => modal.id === 'some-modal2')[0].isOpened).toBe(false);
            expect(modalsState.filter((modal) => modal.id === 'some-modal3')[0].isOpened).toBe(true);
        });

        describe('openModalsReducer', () => {
            it('should return the default state if the action is not defined and the state is undefined', () => {
                const openModalsState: string[] = openModalsReducer(undefined, genericAction);

                expect(openModalsState).toEqual([]);
            });

            it('should return the old state when the action is not defined', () => {
                const oldState: string[] = ['an-id'];
                const openModalsState: string[] = openModalsReducer(oldState, genericAction);

                expect(openModalsState).toBe(oldState);
            });

            it('should return the old state with one more id when the action is "ModalAction.openModal"', () => {
                let oldState: string[] = [];
                const action: IReduxAction<IModalActionPayload> = {
                    type: ModalAction.openModal,
                    payload: {
                        id: 'some-modal',
                    },
                };
                let openModalsState: string[] = openModalsReducer(oldState, action);

                expect(openModalsState.length).toBe(1);
                expect(openModalsState[0]).toBe(action.payload.id);

                oldState = openModalsState;
                action.payload.id = 'some-modal2';
                openModalsState = openModalsReducer(oldState, action);

                expect(openModalsState.length).toBe(2);
                expect(openModalsState[1]).toBe(action.payload.id);
            });

            it('should return the old state without all of the ids when the action is "ModalAction.closeModals"', () => {
                const oldState: string[] = [
                    'some-modal2',
                    'some-modal1',
                    'some-modal3',
                ];
                const action: IReduxAction<IModalActionPayload> = {
                    type: ModalAction.closeModals,
                    payload: {
                        ids: ['some-modal1', 'some-modal2'],
                    },
                };
                const openModalsState: string[] = openModalsReducer(oldState, action);

                expect(openModalsState.length).toBe(oldState.length - action.payload.ids.length);
                expect(_.contains(openModalsState, action.payload.ids[0])).toBe(false);
                expect(_.contains(openModalsState, action.payload.ids[1])).toBe(false);
            });
        });
    });
});
