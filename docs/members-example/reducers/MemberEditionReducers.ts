import * as _ from 'underscore';
import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { defaultMemberAttributes, IMemberAttributes } from '../models/Member';
import {
  MemberEditionActionsType,
  IMemberEditionActionPayload,
  IChangeEmailPayload,
  IChangeSendEmailPayload,
  IToggleOpenPayload,
  IMemberEditionActionsPayloads
} from '../actions/MemberEditionActions';

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
  isOpen: false
};

const applyMemberChangesReducer = (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionPayload>): IMemberEditionState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    appliedState: _.extend({}, state.editionState),
    isOpen: false
  });
};

const cancelMemberChangesReducer = (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionPayload>): IMemberEditionState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, _.isNull(state.appliedState) ? defaultMemberAttributes : state.appliedState),
    isOpen: false
  });
};

const changeMemberEmailReducer = (state: IMemberEditionState, action: IReduxAction<IChangeEmailPayload>): IMemberEditionState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, state.editionState, {
      email: action.payload.email
    })
  });
};

const changeMemberSendEmailReducer = (state: IMemberEditionState,
  action: IReduxAction<IChangeSendEmailPayload>): IMemberEditionState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, state.editionState, {
      sendEmail: action.payload.sendEmail
    })
  });
};

const toggleMemberOpen = (state: IMemberEditionState, action: IReduxAction<IToggleOpenPayload>): IMemberEditionState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    isOpen: action.payload.isOpen
  });
};

interface IMemberEditionActionsReducers {
  [key: string]: (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionsPayloads>) => IMemberEditionState;
}

const memberEditionActionsReducers: IMemberEditionActionsReducers = {
  [MemberEditionActionsType.ApplyChanges]: applyMemberChangesReducer,
  [MemberEditionActionsType.CancelChanges]: cancelMemberChangesReducer,
  [MemberEditionActionsType.ChangeEmail]: changeMemberEmailReducer,
  [MemberEditionActionsType.ChangeSendEmail]: changeMemberSendEmailReducer,
  [MemberEditionActionsType.ToggleOpen]: toggleMemberOpen
};

export const memberEditReducers = (state: IMemberEditionState = defaultMemberEditionState,
  action: IReduxAction<IMemberEditionActionsPayloads>): IMemberEditionState => {
  if (_.isUndefined(memberEditionActionsReducers[action.type])) {
    return state;
  }
  return memberEditionActionsReducers[action.type](state, action);
};
