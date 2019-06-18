import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ICheckboxState} from './CheckboxReducers';
import {GroupableCheckboxActions, IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';
import {
    addChildCheckbox,
    addParentCheckbox,
    disabledAllCheckbox,
    disabledChildCheckbox,
    disabledParentCheckbox,
    removeChildCheckbox,
    removeParentCheckbox,
    toggleChildCheckbox,
    toggleParentCheckbox,
} from './GroupableCheckboxReducersUtils';

export interface IGroupableCheckboxesState {
    total: number;
    nbChecked: number;
    parentId?: string;
    parent?: ICheckboxState;
    checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbChecked: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];

export const groupableCheckboxReducer = (
    state: IGroupableCheckboxesState = groupableCheckboxInitialState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
): IGroupableCheckboxesState => {
    switch (action.type) {
        case GroupableCheckboxActions.addGroup:
            return action.payload.isParent ? addParentCheckbox(state, action) : addChildCheckbox(state, action);

        case GroupableCheckboxActions.toggleGroup:
            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
                return action.payload.isParent
                    ? toggleParentCheckbox(state, action)
                    : toggleChildCheckbox(state, action);
            }
        case GroupableCheckboxActions.disabledGroup:
            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
                return action.payload.isParent
                    ? disabledParentCheckbox(state, action)
                    : disabledChildCheckbox(state, action);
            }
        case GroupableCheckboxActions.disabledAllGroup:
            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
                return disabledAllCheckbox(state, action);
            }
        default:
            return state;
    }
};

export const groupableCheckboxesReducer = (
    state: IGroupableCheckboxesState[] = groupableCheckboxesInitialState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
): IGroupableCheckboxesState[] => {
    switch (action.type) {
        case GroupableCheckboxActions.addGroup:
            if (
                _.some(
                    state,
                    (groupableCheckboxes: IGroupableCheckboxesState) =>
                        groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)
                )
            ) {
                return _.map(state, (groupableCheckboxes: IGroupableCheckboxesState) =>
                    groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)
                        ? _.extend({}, groupableCheckboxes, groupableCheckboxReducer(groupableCheckboxes, action))
                        : groupableCheckboxes
                );
            }

            return [...state, groupableCheckboxReducer(undefined, action)];
        case GroupableCheckboxActions.removeGroup:
            if (action.payload.isParent) {
                return removeParentCheckbox(state, action);
            }

            return _.map(state, (groupableCheckboxes: IGroupableCheckboxesState) =>
                groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)
                    ? _.extend({}, groupableCheckboxes, removeChildCheckbox(groupableCheckboxes, action))
                    : groupableCheckboxes
            );
        case GroupableCheckboxActions.toggleGroup:
        case GroupableCheckboxActions.disabledGroup:
        case GroupableCheckboxActions.disabledAllGroup:
            return state.map((groupableCheckboxes: IGroupableCheckboxesState) =>
                groupableCheckboxReducer(groupableCheckboxes, action)
            );
        default:
            return state;
    }
};
