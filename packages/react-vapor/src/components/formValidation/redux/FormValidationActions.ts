import {IReduxAction} from '../../../utils/ReduxUtils';

export const FormValidationActionsName = {
    toggleIsValid: 'FORM_VALIDATION_TOGGLE_IS_VALID',
    toggleIsInitialValue: 'FORM_VALIDATION_TOGGLE_IS_INITIAL_VALUE',
};

export interface IFormValidationPayload {
    id: string;
    childId: string;
    isValid?: boolean;
    isInitialValue?: boolean;
}

const toggleIsValid = (id: string, childId: string, isValid: boolean): IReduxAction<IFormValidationPayload> => ({
    type: FormValidationActionsName.toggleIsValid,
    payload: {
        id,
        childId,
        isValid,
    },
});

const toggleIsInitialValue = (
    id: string,
    childId: string,
    isInitialValue: boolean
): IReduxAction<IFormValidationPayload> => ({
    type: FormValidationActionsName.toggleIsInitialValue,
    payload: {
        id,
        childId,
        isInitialValue,
    },
});

export const FormValidationActions = {
    toggleIsValid,
    toggleIsInitialValue,
};
