import {IReduxAction} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';

export const MenuActions = {
    add: 'ADD_MENU',
    remove: 'REMOVE_MENU',
    toggle: 'TOGGLE_MENU',
};

export interface IMenuPayload {
    id: string;
    open?: boolean;
    list?: IItemBoxProps[];
}

export const addMenu = (id: string): IReduxAction<IMenuPayload> => ({
    type: MenuActions.add,
    payload: {id},
});

export const removeMenu = (id: string): IReduxAction<IMenuPayload> => ({
    type: MenuActions.remove,
    payload: {id},
});

export const toggleMenu = (id: string, open?: boolean): IReduxAction<IMenuPayload> => ({
    type: MenuActions.toggle,
    payload: {id, open},
});
