import * as moment from 'moment';
import * as _ from 'underscore';
import { IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction } from '../../utils/ReduxUtils';
import { DateLimits, DatePickerActions, IAddDatePickerPayload } from './DatePickerActions';
import { IRangeLimit } from './DatesSelection';

export interface IDatePickerState {
  id: string;
  calendarId: string;
  color: string;
  lowerLimit: Date;
  upperLimit: Date;
  inputLowerLimit: Date;
  inputUpperLimit: Date;
  rangeLimit?: IRangeLimit;
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
  inputLowerLimit: moment().startOf('day').toDate(),
  inputUpperLimit: moment().endOf('day').toDate(),
  appliedLowerLimit: moment().startOf('day').toDate(),
  appliedUpperLimit: moment().endOf('day').toDate(),
};
export const datePickersInitialState: IDatePickerState[] = [];

const addDatePicker = (state: IDatePickerState, action: IReduxAction<IAddDatePickerPayload>): IDatePickerState => {
  return {
    id: action.payload.id,
    calendarId: action.payload.calendarId,
    color: action.payload.color,
    isRange: action.payload.isRange,
    rangeLimit: action.payload.rangeLimit,
    lowerLimit: state.lowerLimit,
    upperLimit: state.upperLimit,
    inputLowerLimit: state.appliedLowerLimit,
    inputUpperLimit: state.appliedUpperLimit,
    selected: state.selected,
    appliedLowerLimit: state.appliedLowerLimit,
    appliedUpperLimit: state.appliedUpperLimit,
  };
};

const changeLowerLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id !== action.payload.id ? state : _.extend({}, state, {
    lowerLimit: action.payload.date,
    inputLowerLimit: action.payload.date,
    selected: '',
  });
};

const changeUpperLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id !== action.payload.id ? state : _.extend({}, state, {
    upperLimit: action.payload.date,
    inputUpperLimit: action.payload.date,
    selected: '',
  });
};

const selectDate = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id !== action.payload.id ? state : _.extend({}, state,
    {
      selected: action.payload.limit,
      lowerLimit: action.payload.limit === DateLimits.lower ? undefined : state.lowerLimit,
      upperLimit: action.payload.limit === DateLimits.upper ? undefined : state.upperLimit,
    },
  );
};

const applyDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  const lowerLimit: Date = state.lowerLimit || state.inputLowerLimit || state.appliedLowerLimit;
  let upperLimit: Date = state.upperLimit || state.inputUpperLimit || state.appliedUpperLimit;
  upperLimit = upperLimit >= lowerLimit ? upperLimit : lowerLimit;

  return state.id.indexOf(action.payload.id) !== 0
    ? state
    : _.extend({}, state, {
      appliedLowerLimit: lowerLimit,
      appliedUpperLimit: upperLimit,
      inputLowerLimit: lowerLimit,
      inputUpperLimit: upperLimit,
    });
};

const resetDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id.indexOf(action.payload.id) !== 0
    ? state
    : _.extend({}, state, {
      selected: '',
      lowerLimit: state.appliedLowerLimit,
      upperLimit: state.appliedUpperLimit,
    });
};

export const datePickerReducer = (state: IDatePickerState = datePickerInitialState,
                                  action: IReduxAction<any>): IDatePickerState => {
  switch (action.type) {
    case DatePickerActions.add:
      return addDatePicker(state, action);
    case DatePickerActions.changeLowerLimit:
      return changeLowerLimit(state, action);
    case DatePickerActions.changeUpperLimit:
      return changeUpperLimit(state, action);
    case DatePickerActions.select:
      return selectDate(state, action);
    case DatePickerActions.apply:
      return applyDates(state, action);
    case DatePickerActions.reset:
      return resetDates(state, action);
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
        datePickerReducer(undefined, action),
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
        datePickerReducer(datePicker, action),
      );
    default:
      return state;
  }
};
