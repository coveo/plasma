import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IMenuPayload, MenuActions} from './MenuActions';

export interface IMenuState {
    id: string;
    open: boolean;
    list: IItemBoxProps[];
}

export const menuInitialState: IMenuState = {id: undefined, open: false, list: []};
export const menuCompositeInitialState: IMenuState[] = [];

export const menuReducer = (state: IMenuState = menuInitialState, action: IReduxAction<IMenuPayload>): IMenuState => {
    if (state.id !== action.payload.id && action.type !== MenuActions.add) {
        return state;
    }

    switch (action.type) {
        case MenuActions.add:
            return {
                id: action.payload.id,
                open: state.open,
                list: action.payload.list,
            };
        case MenuActions.toggle:
            return {...state, open: !_.isUndefined(action.payload.open) ? action.payload.open : !state.open};
        case MenuActions.updateList:
            return {...state, list: action.payload.list};
        default:
            return state;
    }
};

export const menuCompositeReducer = (
    state: IMenuState[] = menuCompositeInitialState,
    action: IReduxAction<IMenuPayload>,
): IMenuState[] => {
    switch (action.type) {
        case MenuActions.add:
            return [
                ...state,
                menuReducer(undefined, action),
            ];
        case MenuActions.remove:
            return _.reject(state, (listBox: IMenuState) => action.payload.id === listBox.id);
        case MenuActions.toggle:
        case MenuActions.updateList:
            return state.map((menu: IMenuState) => menuReducer(menu, action));
        default:
            return state;
    }
};
