import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ToastType} from './Toast';
import {IToastActionPayload, IToastAddPayload, IToastContainerActionPayload, ToastAction} from './ToastActions';

export interface IToastsState {
    id: string;
    toasts: IToastState[];
}

export interface IToastState {
    id: string;
    title: string;
    type?: string;
    dismiss?: number;
    dismissible?: boolean;
    animate?: boolean;
    content?: React.ReactNode;
}

export const toastContainerInitialState: IToastsState = {
    id: undefined,
    toasts: [],
};

export const toastInitialState: IToastState = {
    id: undefined,
    title: '',
    type: ToastType.Success,
    dismiss: 0,
    dismissible: true,
    animate: true,
    content: '',
};

export const toastsContainerInitialState: IToastsState[] = [];

export const toastContainerReducer = (
    state: IToastsState = toastContainerInitialState,
    action: IReduxAction<IToastContainerActionPayload>,
): IToastsState => {
    switch (action.type) {
        case ToastAction.addToastContainer:
            return {
                ...state,
                id: action.payload.id,
                toasts: [],
            };
        default:
            return state;
    }
};

const toastsReducer = (state: IToastState[], action: IReduxAction<IToastActionPayload>): IToastState[] => {
    if (action.type === ToastAction.addToast) {
        const payload = action.payload as IToastAddPayload;
        return [...state, {
            id: payload.id,
            title: payload.title,
            animate: payload.animate,
            dismiss: payload.dismiss,
            dismissible: payload.dismissible,
            content: payload.content,
            type: payload.type,
        }];
    } else {
        return _.reject(state, (toast: IToastState) => action.payload.id === toast.id);
    }
};

export const toastsContainerReducer = (
    state: IToastsState[] = toastsContainerInitialState,
    action: IReduxAction<IToastContainerActionPayload>,
): IToastsState[] => {
    switch (action.type) {
        case ToastAction.addToastContainer:
            return [...state, toastContainerReducer(undefined, action)];
        case ToastAction.removeToastContainer:
            return _.reject(state, (container: IToastsState) => action.payload.id === container.id);
        case ToastAction.addToast:
        case ToastAction.removeToast:
            return state.map((container: IToastsState): IToastsState => {
                const toastAction = action as IReduxAction<IToastActionPayload>;
                return toastAction.payload.containerId === container.id
                    ? {...container, toasts: toastsReducer(container.toasts, toastAction)}
                    : container;
            });
        default:
            return state;
    }
};
