import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IListBoxExamplePayload, ListBoxExampleActions} from './ListBoxExampleActions';

export type IListBoxExampleCompositeState = {[id: string]: IListBoxExampleState};

export interface IListBoxExampleState {
    id: string;
    options: string[];
}

export const listBoxExampleCompositeInitialState: IListBoxExampleCompositeState = {};

export const listBoxExampleReducer = (
    state: IListBoxExampleCompositeState = listBoxExampleCompositeInitialState,
    action: IReduxAction<IListBoxExamplePayload>,
): IListBoxExampleCompositeState => {
    switch (action.type) {
        case ListBoxExampleActions.add:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    options: action.payload.options || [],
                },
            };
        case ListBoxExampleActions.remove:
            return {
                ..._.omit(state, [action.payload.id]),
            };
        case ListBoxExampleActions.update:
            const listBoxExample = state[action.payload.id];
            if (listBoxExample) {
                state[action.payload.id] = {
                    ...listBoxExample,
                    options: action.payload.options,
                };

                return {
                    ...state,
                };
            }
        default:
            return state;
    }
};
