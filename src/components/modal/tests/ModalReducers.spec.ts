import {IReduxAction} from '../../../utils/ReduxUtils';
import {IModalActionPayload, ModalAction} from '../ModalActions';
import {IModalState, modalInitialState, modalReducer, modalsInitialState, modalsReducer} from '../ModalReducers';

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

        it('should close a modal when the action is "ModalAction.closeModal"', () => {
            const oldState: IModalState[] = [
                {
                    id: 'some-modal1',
                    isOpened: true,
                }, {
                    id: 'some-modal2',
                    isOpened: false,
                }, {
                    id: 'some-modal3',
                    isOpened: true,
                },
            ];

            const action: IReduxAction<IModalActionPayload> = {
                type: ModalAction.closeModal,
                payload: {
                    id: 'some-modal1',
                },
            };
            const modalsState: IModalState[] = modalsReducer(oldState, action);

            expect(modalsState.length).toBe(oldState.length);
            expect(modalsState.filter((modal) => modal.id === action.payload.id)[0].isOpened).toBe(false);
            expect(modalsState.filter((modal) => modal.id === 'some-modal2')[0].isOpened).toBe(false);
            expect(modalsState.filter((modal) => modal.id === 'some-modal3')[0].isOpened).toBe(true);
        });
    });
});
