import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { DatePickerActions } from './DatePickerActions';
import * as _ from 'underscore';
import * as moment from 'moment';

export interface IDatePickerState {
  id: string;
  calendarId: string;
  color: string;
  lowerLimit: Date;
  upperLimit: Date;
  isRange: boolean;
  selected: string;
  appliedLowerLimit: Date;
  appliedUpperLimit: Date;
}

export const datePickerInitialState: IDatePickerState = {
  id: undefined,
  calendarId: undefined,
  color: undefined,
  isRange: false,
  lowerLimit: moment().startOf('day').toDate(),
  upperLimit: moment().endOf('day').toDate(),
  selected: '',
  appliedLowerLimit: moment().startOf('day').toDate(),
  appliedUpperLimit: moment().endOf('day').toDate()
};
export const datePickersInitialState: IDatePickerState[] = [];

export const datePickerReducer = (state: IDatePickerState = datePickerInitialState,
  action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  switch (action.type) {
    case DatePickerActions.add:
      return {
        id: action.payload.id,
        calendarId: action.payload.calendarId,
        color: action.payload.color,
        isRange: action.payload.isRange,
        lowerLimit: state.lowerLimit,
        upperLimit: state.upperLimit,
        selected: state.selected,
        appliedLowerLimit: state.appliedLowerLimit,
        appliedUpperLimit: state.appliedUpperLimit
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
    case DatePickerActions.select:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        selected: action.payload.limit
      });
    case DatePickerActions.apply:
      if (state.id.indexOf(action.payload.id) !== 0) {
        return state;
      }
      return _.extend({}, state, {
        appliedLowerLimit: state.lowerLimit,
        appliedUpperLimit: state.upperLimit
      });
    case DatePickerActions.reset:
      if (state.id.indexOf(action.payload.id) !== 0) {
        return state;
      }
      return _.extend({}, state, {
        lowerLimit: state.appliedLowerLimit,
        upperLimit: state.appliedUpperLimit
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
    case DatePickerActions.select:
    case DatePickerActions.apply:
    case DatePickerActions.reset:
      return state.map((datePicker: IDatePickerState) =>
        datePickerReducer(datePicker, action)
      );
    default:
      return state;
  }
};
