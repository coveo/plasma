import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {OptionPickerActions} from './OptionPickerActions';

export interface IOptionPickerState {
    id: string;
    selectedLabel: string;
    selectedValue: string;
}

export const optionPickerInitialState: IOptionPickerState = {
    id: undefined,
    selectedLabel: '',
    selectedValue: '',
};
export const optionPickersInitialState: IOptionPickerState[] = [];

export const optionPickerReducer = (
    state: IOptionPickerState = optionPickerInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IOptionPickerState => {
    switch (action.type) {
        case OptionPickerActions.add:
            return {
                id: action.payload.id,
                selectedLabel: state.selectedLabel,
                selectedValue: state.selectedValue,
            };
        case OptionPickerActions.change:
            if (state.id !== action.payload.id) {
                return state;
            }
            return _.extend({}, state, {
                selectedLabel: action.payload.label,
                selectedValue: action.payload.value,
            });
        case OptionPickerActions.reset:
            if (state.id.indexOf(action.payload.id) !== 0) {
                return state;
            }
            return _.extend({}, optionPickerInitialState, {
                id: state.id,
            });
        default:
            return state;
    }
};

export const optionPickersReducer = (
    state: IOptionPickerState[] = optionPickersInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IOptionPickerState[] => {
    switch (action.type) {
        case OptionPickerActions.add:
            return [...state, optionPickerReducer(undefined, action)];
        case OptionPickerActions.remove:
            return _.reject(state, (optionPicker: IOptionPickerState) => {
                return action.payload.id === optionPicker.id;
            });
        case OptionPickerActions.change:
            return state.map((optionPicker: IOptionPickerState) => optionPickerReducer(optionPicker, action));
        case OptionPickerActions.reset:
            return state.map((optionPicker: IOptionPickerState) => optionPickerReducer(optionPicker, action));
        default:
            return state;
    }
};
