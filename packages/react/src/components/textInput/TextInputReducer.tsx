import * as React from 'react';
import {TextInputState} from './TextInputState';

export type TextInputAction =
    | {type: 'change-value'; payload: string}
    | {type: 'show-validation'}
    | {type: 'hide-validation'}
    | {type: 'set-valid'}
    | {type: 'set-invalid'}
    | {type: 'set-warning'}
    | {type: 'set-message'; payload: string}
    | {type: 'set-dirty'}
    | {type: 'set-pristine'}
    | {type: 'reset'};

export const textInputDefaultState: TextInputState = {
    value: '',
    status: 'indeterminate',
    message: '',
    visibleStatus: false,
    isDirty: false,
};

export const textInputReducer: React.Reducer<TextInputState, TextInputAction> = (
    state = textInputDefaultState,
    action
) => {
    switch (action.type) {
        case 'change-value':
            return action.payload === state.value ? state : {...state, value: action.payload};
        case 'show-validation':
            return {...state, visibleStatus: true};
        case 'hide-validation':
            return {...state, visibleStatus: false};
        case 'set-valid':
            return {...state, status: 'valid'};
        case 'set-invalid':
            return {...state, status: 'invalid'};
        case 'set-warning':
            return {...state, status: 'warning'};
        case 'set-message':
            return action.payload === state.message ? state : {...state, message: action.payload};
        case 'set-dirty':
            return {...state, isDirty: true};
        case 'set-pristine':
            return {...state, isDirty: false};
        case 'reset':
            return textInputDefaultState;
        default:
            throw new Error(`Unhandled action type: ${(action as {type: 'string'}).type}.`);
    }
};
