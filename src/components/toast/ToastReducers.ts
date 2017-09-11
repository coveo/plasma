import * as React from 'react';
import * as _ from 'underscore';
import { IToastActionPayload, IToastAddPayload, IToastContainerActionPayload, ToastAction } from './ToastActions';
import { IReduxAction } from '../../utils/ReduxUtils';
import { ToastType } from './Toast';

export interface IToastsState {
  id: string;
  toasts: IToastState[];
}

export interface IToastState {
  id: string;
  title: string;
  type?: string;
  dismiss?: number;
  animate?: boolean;
  content?: typeof React.Component | string | (() => JSX.Element);
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
  animate: true,
  content: '',
};

export const toastsContainerInitialState: IToastsState[] = [];

export const toastContainerReducer = (state: IToastsState = toastContainerInitialState,
  action: IReduxAction<IToastContainerActionPayload>): IToastsState => {
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
      content: payload.content,
      type: payload.type,
    }];
  } else {
    return _.reject(state, (toast: IToastState) => action.payload.id === toast.id);
  }
};

export const toastsContainerReducer = (state: IToastsState[] = toastsContainerInitialState,
  action: IReduxAction<IToastContainerActionPayload>): IToastsState[] => {
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
          ? { ...container, toasts: toastsReducer(container.toasts, toastAction) }
          : container;
      });
    default:
      return state;
  }
};
