import { IReduxAction } from '../../utils/ReduxUtils';
import { DEFAULT_DATE_PICKER_COLOR } from './DatePicker';
import { IDatePickerValidation } from './DatePickerReducers';

export const DatePickerActions = {
  add: 'ADD_DATE_PICKER',
  remove: 'REMOVE_DATE_PICKER',
  changeLowerLimit: 'CHANGE_LOWER_LIMIT',
  changeUpperLimit: 'CHANGE_UPPER_LIMIT',
  select: 'SELECT_DATE',
  reset: 'RESET_DATE_PICKERS',
  apply: 'APPLY_DATE'
};

export interface IDatePickerPayload {
  id: string;
}

export interface IAddDatePickerPayload extends IDatePickerPayload {
  color: string;
  calendarId: string;
  isRange: boolean;
  validation: IDatePickerValidation[];
}

export interface IChangeDatePickerPayload extends IDatePickerPayload {
  date: Date;
}

export interface ISelectDatePickerPayload extends IDatePickerPayload {
  limit: string;
}

export const DateLimits = {
  lower: 'lower',
  upper: 'upper'
};

export const addDatePicker = (id: string, isRange: boolean, color: string = DEFAULT_DATE_PICKER_COLOR,
  calendarId: string = '', validation: IDatePickerValidation[] = []): IReduxAction<IAddDatePickerPayload> => ({
    type: DatePickerActions.add,
    payload: {
      id,
      color,
      calendarId,
      isRange,
      validation
    }
  });

export const removeDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({
  type: DatePickerActions.remove,
  payload: {
    id
  }
});

export const resetDatePickers = (id: string): IReduxAction<IDatePickerPayload> => ({
  type: DatePickerActions.reset,
  payload: {
    id
  }
});

export const applyDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({
  type: DatePickerActions.apply,
  payload: {
    id
  }
});

export const changeDatePickerLowerLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({
  type: DatePickerActions.changeLowerLimit,
  payload: {
    id,
    date
  }
});

export const changeDatePickerUpperLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({
  type: DatePickerActions.changeUpperLimit,
  payload: {
    id,
    date
  }
});

export const selectDate = (id: string, limit: string): IReduxAction<ISelectDatePickerPayload> => ({
  type: DatePickerActions.select,
  payload: {
    id,
    limit
  }
});
