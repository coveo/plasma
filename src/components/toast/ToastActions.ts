import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';

export interface IToastContainerActionPayload {
    id: string;
}

export interface IToastActionPayload {
    containerId: string;
    id?: string;
}

export const ToastAction = {
    addToast: 'ADD_TOAST',
    removeToast: 'REMOVE_TOAST',
    addToastContainer: 'ADD_TOAST_CONTAINER',
    removeToastContainer: 'REMOVE_TOAST_CONTAINER',
};

export interface IToastAddOptionalPayload {
    dismiss?: number;
    dismissible?: boolean;
    type?: string;
    animate?: boolean;
    content?: React.ReactNode;
}

export interface IToastAddPayload extends IToastActionPayload, IToastAddOptionalPayload {
    title: string;
}

export const addToast = (containerId: string, title: string, optionals: IToastAddOptionalPayload = {}): IReduxAction<IToastAddPayload> => ({
    type: ToastAction.addToast,
    payload: {
        title,
        containerId,
        id: _.uniqueId('toast'),
        type: optionals.type,
        dismiss: optionals.dismiss,
        dismissible: optionals.dismissible,
        animate: optionals.animate,
        content: optionals.content,
    },
});

export const removeToast = (containerId: string, id: string): IReduxAction<IToastActionPayload> => ({
    type: ToastAction.removeToast,
    payload: {containerId, id},
});

export const addToastContainer = (id: string): IReduxAction<IToastContainerActionPayload> => ({
    type: ToastAction.addToastContainer,
    payload: {id},
});

export const removeToastContainer = (id: string): IReduxAction<IToastContainerActionPayload> => ({
    type: ToastAction.removeToastContainer,
    payload: {id},
});
