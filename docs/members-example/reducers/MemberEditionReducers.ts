import * as _ from 'underscore';
import {IReduxAction} from '../../../src/utils/ReduxUtils';
import {
    IChangeEmailPayload,
    IChangeSendEmailPayload,
    IMemberEditionActionPayload,
    IMemberEditionActionsPayloads,
    IToggleOpenPayload,
    MemberEditionActionsType,
} from '../actions/MemberEditionActions';
import {defaultMemberAttributes, IMemberAttributes} from '../models/Member';

export interface IMemberEditionState {
    id: string;
    appliedState: IMemberAttributes;
    editionState: IMemberAttributes;
    isOpen: boolean;
}

export const defaultMemberEditionState: IMemberEditionState = {
    id: null,
    appliedState: null,
    editionState: _.extend({}, defaultMemberAttributes),
    isOpen: false,
};

const applyChangesReducer = (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionPayload>): IMemberEditionState => {
    if (action.payload.id !== state.id) {
        return state;
    }
    return _.extend({}, state, {
        appliedState: _.extend({}, state.editionState),
        isOpen: false,
    });
};

const cancelChangesReducer = (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionPayload>): IMemberEditionState => {
    if (action.payload.id !== state.id) {
        return state;
    }
    return _.extend({}, state, {
        editionState: _.extend({}, _.isNull(state.appliedState) ? defaultMemberAttributes : state.appliedState),
        isOpen: false,
    });
};

const changeEmailReducer = (state: IMemberEditionState, action: IReduxAction<IChangeEmailPayload>): IMemberEditionState => {
    if (action.payload.id !== state.id) {
        return state;
    }
    return _.extend({}, state, {
        editionState: _.extend({}, state.editionState, {
            email: action.payload.email,
        }),
    });
};

const changeSendEmailReducer = (state: IMemberEditionState, action: IReduxAction<IChangeSendEmailPayload>): IMemberEditionState => {
    if (action.payload.id !== state.id) {
        return state;
    }
    return _.extend({}, state, {
        editionState: _.extend({}, state.editionState, {
            sendEmail: action.payload.sendEmail,
        }),
    });
};

const toggleOpen = (state: IMemberEditionState, action: IReduxAction<IToggleOpenPayload>): IMemberEditionState => {
    if (action.payload.id !== state.id) {
        return state;
    }
    return _.extend({}, state, {
        isOpen: action.payload.isOpen,
    });
};

interface IMemberEditionActionsReducers {
    [key: string]: (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionsPayloads>) => IMemberEditionState;
}

const memberEditionActionsReducers: IMemberEditionActionsReducers = {
    [MemberEditionActionsType.ApplyChanges]: applyChangesReducer,
    [MemberEditionActionsType.CancelChanges]: cancelChangesReducer,
    [MemberEditionActionsType.ChangeEmail]: changeEmailReducer,
    [MemberEditionActionsType.ChangeSendEmail]: changeSendEmailReducer,
    [MemberEditionActionsType.ToggleOpen]: toggleOpen,
};

export const memberEditionReducers = (
    state: IMemberEditionState = defaultMemberEditionState,
    action: IReduxAction<IMemberEditionActionsPayloads>,
): IMemberEditionState => {
    if (_.isUndefined(memberEditionActionsReducers[action.type])) {
        return state;
    }
    return memberEditionActionsReducers[action.type](state, action);
};
