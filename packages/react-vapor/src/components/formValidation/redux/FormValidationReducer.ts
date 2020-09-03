import {IReduxAction} from '../../../utils/ReduxUtils';
import {FormValidationActionsName, IFormValidationPayload} from './FormValidationActions';

export interface FormValidationValueState {
    isValid: boolean;
    isInitialValue: boolean;
}

export type FormValidationState = {[id: string]: {[id: string]: FormValidationValueState}};

export const formValidationReducer = (
    state: FormValidationState = {},
    action: IReduxAction<IFormValidationPayload>
) => {
    switch (action.type) {
        case FormValidationActionsName.toggleIsValid:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    [action.payload.childId]: {
                        ...state?.[action.payload.id]?.[action.payload.childId],
                        isValid: action.payload?.isValid,
                    },
                },
            };
        case FormValidationActionsName.toggleIsInitialValue:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    [action.payload.childId]: {
                        ...state?.[action.payload.id]?.[action.payload.childId],
                        isInitialValue: action.payload?.isInitialValue,
                    },
                },
            };
        default:
            return state;
    }
};
