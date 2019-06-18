import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ListBoxActions} from '../../listBox/ListBoxActions';
import {SelectConnected} from '../../select/SelectConnected';
import {DropReducerActions, IDropPayload} from './DropActions';

export interface IDropState {
    [groupId: string]: {
        id: string;
        isOpen: boolean;
    };
}

export const dropInitialState: IDropState = {};

export const dropReducer = (state: IDropState = dropInitialState, action: IReduxAction<IDropPayload>): IDropState => {
    switch (action.type) {
        case ListBoxActions.select:
            const selectGroup = DropSelectors.getByGroup({drop: state}, {groupId: SelectConnected.DropGroup});
            if (selectGroup && action.payload.id === selectGroup.id) {
                return {
                    ...state,
                    [SelectConnected.DropGroup]: {
                        ...selectGroup,
                        isOpen: false,
                    },
                };
            }
            return state;
        case DropReducerActions.toggle:
            const group = DropSelectors.getByGroup({drop: state}, {groupId: action.payload.groupId});
            if (group && action.payload.id === group.id) {
                return {
                    ...state,
                    [action.payload.groupId]: {
                        ...group,
                        isOpen: !group.isOpen,
                    },
                };
            }
            return {
                ...state,
                [action.payload.groupId]: {
                    id: action.payload.id,
                    isOpen: _.isUndefined(action.payload.isOpen) ? true : action.payload.isOpen,
                },
            };
        default:
            return state;
    }
};

const getDropByGroup = (state: IReactVaporState, {groupId}: {groupId: string}) =>
    (state.drop && state.drop[groupId]) || undefined;

const isDropOpen = (state: IReactVaporState, {id, groupId}: {id: string; groupId: string}): boolean => {
    const drop = getDropByGroup(state, {groupId});
    return drop && drop.id === id ? drop.isOpen : false;
};

export const DropSelectors = {
    isOpen: isDropOpen,
    getByGroup: getDropByGroup,
};
