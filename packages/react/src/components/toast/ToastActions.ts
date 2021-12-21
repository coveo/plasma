import * as React from 'react';
import * as _ from 'underscore';

import {IReduxAction} from '../../utils/ReduxUtils';
import {IToastProps} from './Toast';

export interface IToastContainerActionPayload {
    id: string;
}

export interface IToastActionPayload {
    containerId: string;
    id: string;
}

export const ToastAction = {
    addToast: 'ADD_TOAST',
    removeToast: 'REMOVE_TOAST',
    addToastContainer: 'ADD_TOAST_CONTAINER',
    removeToastContainer: 'REMOVE_TOAST_CONTAINER',
};

export interface IToastAddOptionalPayload extends Partial<IToastProps> {
    id: string;
}

export interface IToastAddPayload extends IToastActionPayload, IToastAddOptionalPayload {
    title: React.ReactNode;
}

export const addToast = (
    containerId: string,
    title: string,
    optionals: Partial<React.PropsWithChildren<IToastProps>> = {}
): IReduxAction<IToastAddPayload> => ({
    type: ToastAction.addToast,
    payload: {
        title,
        containerId,
        id: _.uniqueId('toast'),
        ...optionals,
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
