import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IToastContainerActionPayload, ToastAction} from '../ToastActions';
import {
    IToastsState,
    toastContainerInitialState,
    toastContainerReducer,
    toastInitialState,
    toastsContainerInitialState,
    toastsContainerReducer,
} from '../ToastReducers';

describe('Reducers', () => {
    describe('toastContainers', () => {
        const genericAction: IReduxAction<IToastContainerActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'toast-container',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IToastsState[] = undefined;
            const newState: IToastsState[] = toastsContainerReducer(oldState, genericAction);

            expect(newState).toBe(toastsContainerInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one toast container', () => {
            const oldState: IToastsState = undefined;
            const newState: IToastsState = toastContainerReducer(oldState, genericAction);

            expect(newState).toBe(toastContainerInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IToastsState[] = [toastContainerInitialState];
            const newState: IToastsState[] = toastsContainerReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one container', () => {
            const oldState: IToastsState = toastContainerInitialState;
            const newState: IToastsState = toastContainerReducer(oldState, genericAction);

            expect(newState).toBe(oldState);
        });

        it('should return the old state with one more ToastsState when the action is "ADD_TOAST_CONTAINER"', () => {
            const oldState: IToastsState[] = toastsContainerInitialState;
            const action: IReduxAction<IToastContainerActionPayload> = {
                type: ToastAction.addToastContainer,
                payload: {id: 'some-id'},
            };
            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);

            expect(toastContainersState.length).toBe(oldState.length + 1);
            expect(toastContainersState.filter((container) => container.id === action.payload.id).length).toBe(1);
        });

        it('should return the old state without the ToastsState when the action is "REMOVE_TOAST_CONTAINER"', () => {
            const oldState: IToastsState[] = [
                {id: 'some-id', toasts: []},
                {id: 'some-other-id', toasts: []},
                {id: 'hello', toasts: []},
            ];
            const action: IReduxAction<IToastContainerActionPayload> = {
                type: ToastAction.removeToastContainer,
                payload: {id: oldState[1].id},
            };
            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);

            expect(toastContainersState.length).toBe(oldState.length - 1);
            expect(toastContainersState.filter((container) => container.id === action.payload.id).length).toBe(0);
        });

        it('should return the old state with one more ToastState when the action is "ADD_TOAST"', () => {
            const oldState: IToastsState[] = [{id: 'some-id', toasts: []}];
            const action: IReduxAction<any> = {
                type: ToastAction.addToast,
                payload: {id: null, containerId: 'some-id'},
            };
            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);
            const containerState = _.findWhere(toastContainersState, {id: action.payload.containerId});

            expect(toastContainersState.length).toBe(oldState.length);
            expect(containerState.toasts.length).toBe(1);
        });

        it('should return the old state state without the ToastState when the action is "REMOVE_TOAST"', () => {
            const toastToRemove = 'toast-id';
            const oldState: IToastsState[] = [
                {id: 'some-id', toasts: [_.extend({}, toastInitialState, {id: toastToRemove, title: 'test'})]},
            ];
            const action: IReduxAction<any> = {
                type: ToastAction.removeToast,
                payload: {id: toastToRemove, containerId: 'some-id'},
            };
            const toastContainersState: IToastsState[] = toastsContainerReducer(oldState, action);

            const containerState = _.findWhere(toastContainersState, {id: action.payload.containerId});
            expect(toastContainersState.length).toBe(oldState.length);
            expect(containerState.toasts.length).toBe(0);
        });
    });
});
