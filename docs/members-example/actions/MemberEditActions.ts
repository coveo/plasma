import { IReduxAction } from '../../../src/utils/ReduxUtils';

export const MemberEditActionsType = {
  ToggleMemberOpen: 'TOGGLE_MEMBER_OPEN',
  ChangeMemberEmail: 'CHANGE_MEMBER_EMAIL',
  ChangeMemberSendEmail: 'CHANGE_MEMBER_SEND_EMAIL',
  ApplyMemberChanges: 'APPLY_MEMBER_CHANGES',
  CancelMemberChanges: 'CANCEL_MEMBER_CHANGES'
};

export interface IMemberEditActionPayload {
  id: string;
}

export interface IToggleMemberOpenPayload extends IMemberEditActionPayload {
  isOpen: boolean;
}

export interface IChangeMemberEmailPayload extends IMemberEditActionPayload {
  email: string;
}

export interface IChangeMemberSendEmailPayload extends IMemberEditActionPayload {
  sendEmail: boolean;
}

export const toggleMemberOpen = (id: string, isOpen: boolean): IReduxAction<IToggleMemberOpenPayload> => {
  return {
    type: MemberEditActionsType.ToggleMemberOpen,
    payload: {
      id,
      isOpen
    }
  };
};

export const changeMemberEmail = (id: string, email: string): IReduxAction<IChangeMemberEmailPayload> => {
  return {
    type: MemberEditActionsType.ChangeMemberEmail,
    payload: {
      id,
      email
    },
  };
};

export const changeMemberSendEmail = (id: string, sendEmail: boolean): IReduxAction<IChangeMemberSendEmailPayload> => {
  return {
    type: MemberEditActionsType.ChangeMemberSendEmail,
    payload: {
      id,
      sendEmail
    }
  };
};

export const applyMemberChanges = (id: string): IReduxAction<IMemberEditActionPayload> => {
  return {
    type: MemberEditActionsType.ApplyMemberChanges,
    payload: {
      id
    }
  };
};

export const cancelMemberChanges = (id: string): IReduxAction<IMemberEditActionPayload> => {
  return {
    type: MemberEditActionsType.CancelMemberChanges,
    payload: {
      id
    }
  };
};
