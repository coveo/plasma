import {ValidationTypes} from './ValidationTypes';

export const ValidationActionsTypes = {
    updateError: 'UPDATE_VALIDATION_ERROR',
    updateWarning: 'UPDATE_VALIDATION_WARNING',
    updateDirty: 'UPDATE_VALIDATION_DIRTY',
};

export const ValidationActions = {
    setError: (id: string, error: string, validationType: string = ValidationTypes.default) => ({
        type: ValidationActionsTypes.updateError,
        payload: {
            id,
            validationType,
            value: error,
        },
    }),
    clearError: (id: string, validationType: string = ValidationTypes.default) =>
        ValidationActions.setError(id, null, validationType),
    setWarning: (id: string, warning: string, validationType: string = ValidationTypes.default) => ({
        type: ValidationActionsTypes.updateWarning,
        payload: {
            id,
            validationType,
            value: warning,
        },
    }),
    clearWarning: (id: string, validationType: string = ValidationTypes.default) =>
        ValidationActions.setWarning(id, null, validationType),
    setDirty: (id: string, isDirty: boolean, validationType: string = ValidationTypes.default) => ({
        type: ValidationActionsTypes.updateDirty,
        payload: {
            id,
            validationType,
            value: isDirty,
        },
    }),
    clearDirty: (id: string, validationType: string = ValidationTypes.default) =>
        ValidationActions.setDirty(id, null, validationType),
};
