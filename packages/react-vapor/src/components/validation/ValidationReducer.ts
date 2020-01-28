import * as _ from 'underscore';
import {ValidationActions, ValidationActionsTypes} from './ValidationActions';
import {ValidationsState, ValidationState} from './ValidationState';

type ValidationActions =
    | ReturnType<typeof ValidationActions.setError>
    | ReturnType<typeof ValidationActions.setWarning>
    | ReturnType<typeof ValidationActions.setDirty>;

export const validationReducer = (state: ValidationsState = {}, action: ValidationActions): ValidationsState => {
    switch (action.type) {
        case ValidationActionsTypes.updateError:
        case ValidationActionsTypes.updateWarning:
        case ValidationActionsTypes.updateDirty:
            return {
                ...state,
                [action.payload.id]: oneValidationReducer(state[action.payload.id], action),
            };
        default:
            return state;
    }
};

const oneValidationReducer = (
    state: ValidationState = {error: [], isDirty: [], warning: []},
    action: ValidationActions
): ValidationState => {
    switch (action.type) {
        case ValidationActionsTypes.updateError:
            return {
                ...state,
                error: [
                    ...state.error.filter((error) => error.validationType !== action.payload.validationType),
                    {validationType: action.payload.validationType, value: action.payload.value as string},
                ],
            };
        case ValidationActionsTypes.updateWarning:
            return {
                ...state,
                warning: [
                    ...state.warning.filter((warning) => warning.validationType !== action.payload.validationType),
                    {validationType: action.payload.validationType, value: action.payload.value as string},
                ],
            };
        case ValidationActionsTypes.updateDirty:
            return {
                ...state,
                isDirty: [
                    ...state.isDirty.filter((dirty) => dirty.validationType !== action.payload.validationType),
                    {validationType: action.payload.validationType, value: action.payload.value as boolean},
                ],
            };
        default:
            return state;
    }
};
