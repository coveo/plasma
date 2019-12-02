import * as React from 'react';
import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ISetNumericInputPayload, NumericInputActionTypes} from './NumericInputActions';

export interface INumericInputState {
    value: React.ReactText;
    hasError: boolean;
}

export interface INumericInputsState {
    [key: string]: INumericInputState;
}

export const initialNumericInputsState: INumericInputsState = {};

export const initialNumericInputState = {value: 1, hasError: false};

const mount = (state: INumericInputsState, action: IReduxAction<ISetNumericInputPayload>) => {
    const initialValue = action.payload.value;
    const hasError = validateValueError(initialValue, action.payload.min, action.payload.max);

    return {
        ...state,
        [action.payload.id]: {value: initialValue, hasError},
    };
};

const unmount = (state: INumericInputsState, action: IReduxAction<ISetNumericInputPayload>) => {
    return _.omit(state, action.payload.id);
};

const set = (state: INumericInputState, action: IReduxAction<ISetNumericInputPayload>) => {
    const newValue = action.payload.value;
    const hasError = validateValueError(newValue, action.payload.min, action.payload.max);

    return {...state, value: newValue, hasError};
};

const NumericInputsReducers: {[key: string]: (...args: any[]) => INumericInputsState} = {
    [NumericInputActionTypes.mount]: mount,
    [NumericInputActionTypes.unmount]: unmount,
};

const NumericInputReducers: {[key: string]: (...args: any[]) => INumericInputState} = {
    [NumericInputActionTypes.set]: set,
};

function validateValueError(value: React.ReactText, min: number, max: number) {
    let hasError = false;
    if (!_.isUndefined(min) && value < min) {
        hasError = true;
    }

    if (!_.isUndefined(max) && value > max) {
        hasError = true;
    }

    if (_.isNaN(parseFloat('' + value))) {
        hasError = true;
    }
    return hasError;
}

export type INumericInputPayload = {id: string} | ISetNumericInputPayload;

export const numericInputReducer = (
    state: INumericInputsState = initialNumericInputsState,
    action?: IReduxAction<INumericInputPayload>
) => {
    if (!_.isUndefined(NumericInputsReducers[action.type])) {
        return NumericInputsReducers[action.type](state, action);
    }

    if (
        action &&
        action.payload &&
        action.payload.id &&
        state[action.payload.id] &&
        !_.isUndefined(NumericInputReducers[action.type])
    ) {
        return {
            ...state,
            [action.payload.id]: NumericInputReducers[action.type](state[action.payload.id], action),
        };
    }

    return state;
};
