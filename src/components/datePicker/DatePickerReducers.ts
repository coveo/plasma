import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { DatePickerActions } from './DatePickerActions';
import * as _ from 'underscore';
import * as moment from 'moment';

export interface IDatePickerValidation {
  rule: (date: Date, secondDate?: Date) => boolean;
  errorMessage: string;
  forLowerLimit?: boolean;
  forUpperLimit?: boolean;
  forRange?: boolean;
}

export interface IDatePickerState {
  id: string;
  calendarId: string;
  color: string;
  lowerLimit: Date;
  lowerLimitError?: string;
  upperLimit: Date;
  upperLimitError?: string;
  isRange: boolean;
  selected: string;
  appliedLowerLimit: Date;
  appliedUpperLimit: Date;
  validation: IDatePickerValidation[];
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
  appliedUpperLimit: moment().endOf('day').toDate(),
  validation: []
};
export const datePickersInitialState: IDatePickerState[] = [];

const addDatePicker = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return {
    id: action.payload.id,
    calendarId: action.payload.calendarId,
    color: action.payload.color,
    isRange: action.payload.isRange,
    lowerLimit: state.lowerLimit,
    upperLimit: state.upperLimit,
    selected: state.selected,
    appliedLowerLimit: state.appliedLowerLimit,
    appliedUpperLimit: state.appliedUpperLimit,
    validation: action.payload.validation
  };
};

const validate = (state: IDatePickerState, date: Date, isUpper: boolean): IDatePickerState => {
  let newState = _.extend({}, state, {
    lowerLimitError: !isUpper ? '' : state.lowerLimitError,
    upperLimitError: isUpper ? '' : state.upperLimitError
  });
  _.each(state.validation, (validation: IDatePickerValidation) => {
    if ((validation.forLowerLimit && !isUpper) || (validation.forUpperLimit && isUpper)) {
      if (!validation.rule(date)) {
        newState.lowerLimitError = validation.forLowerLimit ? validation.errorMessage : newState.lowerLimitError;
        newState.upperLimitError = validation.forUpperLimit ? validation.errorMessage : newState.upperLimitError;
      }
    }
    if (validation.forRange && isUpper) {
      if (!validation.rule(newState.lowerLimit, date)) {
        newState.upperLimitError = validation.errorMessage;
      }
    }
  });
  return newState;
};

const changeLowerLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  if (state.id !== action.payload.id) {
    return state;
  }
  const validatedState: IDatePickerState = validate(state, action.payload.date, false);
  return _.extend({}, validatedState,
    { lowerLimit: validatedState.lowerLimitError ? state.lowerLimit : action.payload.date });
};

const changeUpperLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  if (state.id !== action.payload.id) {
    return state;
  }
  const validatedState: IDatePickerState = validate(state, action.payload.date, true);
  return _.extend({}, validatedState,
    { upperLimit: validatedState.upperLimitError ? state.upperLimit : action.payload.date });
};

const selectDate = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id !== action.payload.id ? state : _.extend({}, state, { selected: action.payload.limit });
};

const applyDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id.indexOf(action.payload.id) !== 0
    ? state
    : _.extend({}, state, {
      appliedLowerLimit: state.lowerLimit,
      appliedUpperLimit: state.upperLimit >= state.lowerLimit ? state.upperLimit : state.lowerLimit
    });
};

const resetDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
  return state.id.indexOf(action.payload.id) !== 0
    ? state
    : _.extend({}, state, {
      selected: '',
      lowerLimit: state.appliedLowerLimit,
      upperLimit: state.appliedUpperLimit
    });
};

export const datePickerReducer = (state: IDatePickerState = datePickerInitialState,
  action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
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
