import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { DatePickerActions } from './DatePickerActions';
import * as _ from 'underscore';

export interface IDatePickerState {
  id: string;
  color: string;
  lowerLimit: Date;
  upperLimit: Date;
}

export const datePickerInitialState: IDatePickerState = {
  id: undefined,
  color: 'blue',
  lowerLimit: new Date(new Date().setHours(0, 0, 0, 0)),
  upperLimit: new Date(new Date().setHours(23, 59, 59, 999))
};
export const datePickersInitialState: IDatePickerState[] = [];

export const datePickerReducer = (state: IDatePickerState = datePickerInitialState,
  action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  switch (action.type) {
    case DatePickerActions.add:
      return {
        id: action.payload.id,
        color: action.payload.color,
        lowerLimit: state.lowerLimit,
        upperLimit: state.upperLimit
      };
    case DatePickerActions.changeLowerLimit:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        lowerLimit: action.payload.date
      });
    case DatePickerActions.changeUpperLimit:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        upperLimit: action.payload.date
      });
    default:
      return state;
  }
};

export const datePickersReducer = (state: IDatePickerState[] = datePickersInitialState,
  action: IReduxAction<IReduxActionsPayload>): IDatePickerState[] => {
  switch (action.type) {
    case DatePickerActions.add:
      return [
        ...state,
        datePickerReducer(undefined, action)
      ];
    case DatePickerActions.remove:
      return _.reject(state, (datePicker: IDatePickerState) => {
        return action.payload.id === datePicker.id;
      });
    case DatePickerActions.changeLowerLimit:
    case DatePickerActions.changeUpperLimit:
      return state.map((datePicker: IDatePickerState) =>
        datePickerReducer(datePicker, action)
      );
    default:
      return state;
  }
};
