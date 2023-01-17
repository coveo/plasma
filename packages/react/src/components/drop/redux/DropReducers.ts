import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState.js';
import {IReduxAction} from '../../../utils/ReduxUtils.js';
import {ListBoxActions} from '../../listBox/ListBoxActions.js';
import {DropReducerActions, IDropPayload} from './DropActions.js';
import {SelectConstants} from '../../select/SelectConstants.js';

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
            const selectGroup = DropSelectors.getByGroup({drop: state}, {groupId: SelectConstants.DropGroupId});
            if (selectGroup && action.payload.id === selectGroup.id) {
                return {
                    ...state,
                    [SelectConstants.DropGroupId]: {
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

const getDropByGroup = (state: PlasmaState, {groupId}: {groupId: string}) =>
    (state.drop && state.drop[groupId]) || undefined;

const isDropOpen = (state: PlasmaState, {id, groupId}: {id: string; groupId: string}): boolean => {
    const drop = getDropByGroup(state, {groupId});
    return drop && drop.id === id ? drop.isOpen : false;
};

export const DropSelectors = {
    isOpen: isDropOpen,
    getByGroup: getDropByGroup,
};
