import { IReduxAction } from '../../utils/ReduxUtils';

export const DatePickerActions = {
  add: 'ADD_DATE_PICKER',
  remove: 'REMOVE_DATE_PICKER',
  changeLowerLimit: 'CHANGE_LOWER_LIMIT',
  changeUpperLimit: 'CHANGE_UPPER_LIMIT'
};

export interface IDatePickerPayload {
  id: string;
}

export interface IAddDatePickerPayload extends IDatePickerPayload {
  color: string;
}

export interface IChangeDatePickerPayload extends IDatePickerPayload {
  date: Date;
}

export const addDatePicker = (id: string, color: string = 'blue',
  calendarId: string = ''): IReduxAction<IAddDatePickerPayload> => ({
    type: DatePickerActions.add,
    payload: {
      id,
      color
    }
  });

export const removeDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({
  type: DatePickerActions.remove,
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
