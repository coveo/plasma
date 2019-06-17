import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {CheckboxActions, ICheckboxActionPayload} from './CheckboxActions';

export interface ICheckboxState {
    id: string;
    checked: boolean;
    disabled: boolean;
}

export const checkboxInitialState: ICheckboxState = {id: undefined, checked: false, disabled: false};
export const checkboxesInitialState: ICheckboxState[] = [];

export const checkboxReducer = (
    state: ICheckboxState = checkboxInitialState,
    action: IReduxAction<ICheckboxActionPayload>
): ICheckboxState => {
    switch (action.type) {
        case CheckboxActions.add:
            return {
                id: action.payload.id,
                checked: !!action.payload.checked,
                disabled: !!action.payload.disabled,
            };
        case CheckboxActions.toggle:
            return state.id !== action.payload.id
                ? state
                : {
                      ...state,
                      checked: _.isUndefined(action.payload.checked) ? !state.checked : action.payload.checked,
                  };
        default:
            return state;
    }
};

export const checkboxesReducer = (
    state: ICheckboxState[] = checkboxesInitialState,
    action: IReduxAction<ICheckboxActionPayload>
): ICheckboxState[] => {
    switch (action.type) {
        case CheckboxActions.add:
            return [...state, checkboxReducer(undefined, action)];
        case CheckboxActions.remove:
            return _.reject(state, (checkbox: ICheckboxState) => {
                return action.payload.id === checkbox.id;
            });
        case CheckboxActions.toggle:
            return state.map((checkbox: ICheckboxState) => checkboxReducer(checkbox, action));
        default:
            return state;
    }
};
