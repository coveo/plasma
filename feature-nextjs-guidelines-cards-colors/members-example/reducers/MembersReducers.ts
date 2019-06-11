import * as _ from 'underscore';
import {IReduxAction} from '../../../src/utils/ReduxUtils';
import {IMemberEditionActionsPayloads, MemberEditionActionsType} from '../actions/MemberEditionActions';
import {IMembersActionsPayloads, ISetMembersPayload, MembersActionsType} from '../actions/MembersActions';
import {IMemberAttributes} from '../models/Member';
import {defaultMemberEditionState, IMemberEditionState, memberEditionReducers} from './MemberEditionReducers';

export interface IMembersCompositeState {
    addMemberState: IMemberEditionState;
    members: IMemberEditionState[];
}

const defaultMembersCompositeState: IMembersCompositeState = {
    addMemberState: _.extend({}, defaultMemberEditionState),
    members: [],
};

const generateMemberId = (): string => _.uniqueId('member');

const setMembersReduder = (state: IMembersCompositeState, action: IReduxAction<ISetMembersPayload>): IMembersCompositeState => {
    return _.extend({}, state, {
        members: _.map(action.payload.members, (member: IMemberAttributes): IMemberEditionState => {
            return {
                appliedState: _.extend({}, member),
                editionState: _.extend({}, member),
                id: generateMemberId(),
                isOpen: false,
            };
        }),
    });
};

const addMemberReducer = (state: IMembersCompositeState): IMembersCompositeState => {
    const newState: IMembersCompositeState = _.extend({}, state);

    // Clone and add the new member
    const newMember: IMemberEditionState = _.extend({}, {
        appliedState: _.extend({}, state.addMemberState.editionState),
        editionState: _.extend({}, state.addMemberState.editionState),
        id: generateMemberId(),
        isOpen: false,
    });
    newState.members = [].concat(state.members, [newMember]);

    // Reset the addMemberState
    newState.addMemberState = _.extend({}, defaultMemberEditionState);

    return newState;
};

const applyMemberEditionReducers = (
    state: IMembersCompositeState,
    action: IReduxAction<IMemberEditionActionsPayloads>,
): IMembersCompositeState => {
    const newState: IMembersCompositeState = _.extend({}, state);

    if (_.isNull(action.payload.id)) {
        newState.addMemberState = memberEditionReducers(newState.addMemberState, action);
    } else {
        newState.members = _.map(state.members, (member: IMemberEditionState) => memberEditionReducers(member, action));
    }

    return newState;
};

interface IMembersActionsReducers {
    [key: string]: (state: IMembersCompositeState, action: IReduxAction<IMembersActionsPayloads>) => IMembersCompositeState;
}

const membersActionsReducers: IMembersActionsReducers = {
    [MembersActionsType.SetMembers]: setMembersReduder,
    [MembersActionsType.AddMember]: addMemberReducer,
    [MemberEditionActionsType.ApplyChanges]: applyMemberEditionReducers,
    [MemberEditionActionsType.CancelChanges]: applyMemberEditionReducers,
    [MemberEditionActionsType.ChangeEmail]: applyMemberEditionReducers,
    [MemberEditionActionsType.ChangeSendEmail]: applyMemberEditionReducers,
    [MemberEditionActionsType.ToggleOpen]: applyMemberEditionReducers,
};

export const membersReducers = (
    state: IMembersCompositeState = defaultMembersCompositeState,
    action: IReduxAction<IMembersActionsPayloads>,
): IMembersCompositeState => {
    if (_.isUndefined(membersActionsReducers[action.type])) {
        return state;
    }
    return membersActionsReducers[action.type](state, action);
};
