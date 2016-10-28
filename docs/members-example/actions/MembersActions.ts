import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { IMemberAttributes } from '../models/Member';

export const MembersActionsType = {
  SetMembers: 'SET_MEMBERS',
  AddMember: 'ADD_MEMBER'
};

export interface ISetMembersPayload {
  members: IMemberAttributes[];
}

export const setMembers = (members: IMemberAttributes[]): IReduxAction<ISetMembersPayload> => {
  return {
    type: MembersActionsType.SetMembers,
    payload: {
      members
    }
  };
};

export const addMember = (): IReduxAction<any> => {
  return {
    type: MembersActionsType.AddMember
  };
};
