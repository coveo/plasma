import { IReduxAction } from '../../utils/ReduxUtils';

export const OptionPickerActions = {
  add: 'ADD_OPTION_PICKER',
  remove: 'REMOVE_OPTION_PICKER',
  change: 'CHANGE_OPTION',
  reset: 'RESET_OPTION_PICKERS'
};

export interface IOptionPickerPayload {
  id: string;
}

export interface IChangeOptionPayload extends IOptionPickerPayload {
  value: string;
}

export const addOptionPicker = (id: string): IReduxAction<IOptionPickerPayload> => ({
  type: OptionPickerActions.add,
  payload: {
    id
  }
});

export const removeOptionPicker = (id: string): IReduxAction<IOptionPickerPayload> => ({
  type: OptionPickerActions.remove,
  payload: {
    id
  }
});

export const changeOptionPicker = (id: string, value: string): IReduxAction<IChangeOptionPayload> => ({
  type: OptionPickerActions.change,
  payload: {
    id,
    value
  }
});

export const resetOptionPickers = (id: string): IReduxAction<IOptionPickerPayload> => ({
  type: OptionPickerActions.reset,
  payload: {
    id
  }
});
