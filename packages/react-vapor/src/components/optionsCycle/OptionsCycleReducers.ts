import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {OptionsCycleActions} from './OptionsCycleActions';

export interface IOptionsCycleState {
    id: string;
    currentOption: number;
}

export const optionsCycleInitialState: IOptionsCycleState = {id: undefined, currentOption: undefined};
export const optionsCyclesInitialState: IOptionsCycleState[] = [];

export const optionsCycleReducer = (
    state: IOptionsCycleState = optionsCycleInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IOptionsCycleState => {
    switch (action.type) {
        case OptionsCycleActions.change:
            if (state.id !== action.payload.id) {
                return state;
            }

            return {
                id: state.id,
                currentOption: action.payload.currentOption,
            };
        case OptionsCycleActions.add:
            return {
                id: action.payload.id,
                currentOption: action.payload.currentOption,
            };
        default:
            return state;
    }
};

export const optionsCyclesReducer = (
    state: IOptionsCycleState[] = optionsCyclesInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IOptionsCycleState[] => {
    switch (action.type) {
        case OptionsCycleActions.change:
            return state.map((optionsCycle: IOptionsCycleState) => optionsCycleReducer(optionsCycle, action));
        case OptionsCycleActions.add:
            return [...state, optionsCycleReducer(undefined, action)];
        case OptionsCycleActions.remove:
            return _.reject(state, (optionsCycle: IOptionsCycleState) => {
                return action.payload.id === optionsCycle.id;
            });
        default:
            return state;
    }
};
