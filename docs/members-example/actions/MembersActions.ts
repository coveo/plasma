import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { IMemberAttributes } from '../models/Member';

export const MembersActionsType = {
  SetMembers: 'SET_MEMBERS',
  AddMember: 'ADD_MEMBER'
};

export interface ISetMembersPayload {
  members: IMemberAttributes[];
}

const setMembers = (members: IMemberAttributes[]): IReduxAction<ISetMembersPayload> => {
  return {
    type: MembersActionsType.SetMembers,
    payload: {
      members
    }
  };
};

const addMember = (): IReduxAction<any> => {
  return {
    type: MembersActionsType.AddMember
  };
};

export const MembersCompositeActions = {
  setMembers,
  addMember
};
