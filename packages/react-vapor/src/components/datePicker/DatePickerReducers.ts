import moment from 'moment';
import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {DateLimits, DatePickerActions, IAddDatePickerPayload} from './DatePickerActions';
import {IRangeLimit} from './DatesSelection';

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
    isClearable: boolean;
    selected: string;
    appliedLowerLimit: Date;
    appliedUpperLimit: Date;
    simple: boolean;
}

export const datePickerInitialState: IDatePickerState = {
    id: undefined,
    calendarId: undefined,
    color: undefined,
    isRange: false,
    isClearable: false,
    simple: false,
    lowerLimit: moment()
        .startOf('day')
        .toDate(),
    upperLimit: moment()
        .endOf('day')
        .toDate(),
    selected: '',
    inputLowerLimit: moment()
        .startOf('day')
        .toDate(),
    inputUpperLimit: moment()
        .endOf('day')
        .toDate(),
    appliedLowerLimit: moment()
        .startOf('day')
        .toDate(),
    appliedUpperLimit: moment()
        .endOf('day')
        .toDate(),
};
export const datePickersInitialState: IDatePickerState[] = [];

const addDatePicker = (state: IDatePickerState, action: IReduxAction<IAddDatePickerPayload>): IDatePickerState => {
    const mayBeNull = (d: Date) => (action.payload.initiallyUnselected ? null : d);
    const appliedLowerLimit = (action.payload.initialDateRange || [])[0];
    const appliedUpperLimit = (action.payload.initialDateRange || [])[1];

    return {
        id: action.payload.id,
        calendarId: action.payload.calendarId,
        color: action.payload.color,
        isRange: action.payload.isRange,
        rangeLimit: action.payload.rangeLimit,
        lowerLimit: appliedLowerLimit || mayBeNull(state.lowerLimit),
        upperLimit: appliedUpperLimit || mayBeNull(state.upperLimit),
        inputLowerLimit: appliedLowerLimit || mayBeNull(state.inputLowerLimit),
        inputUpperLimit: appliedUpperLimit || mayBeNull(state.inputUpperLimit),
        selected: state.selected,
        appliedLowerLimit: appliedLowerLimit || mayBeNull(state.appliedLowerLimit),
        appliedUpperLimit: appliedUpperLimit || mayBeNull(state.appliedUpperLimit),
        isClearable: action.payload.isClearable,
        simple: action.payload.simple,
    };
};

const changeLowerLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
    const nullifyIfBefore = (currentUpperLimit: Date, newLowerLimit: Date) =>
        newLowerLimit && state.isRange && moment(newLowerLimit).isAfter(currentUpperLimit) ? null : currentUpperLimit;

    const simpleSelected = state.simple ? DateLimits.lower : '';

    return state.id !== action.payload.id
        ? state
        : _.extend({}, state, {
              lowerLimit: action.payload.date,
              inputLowerLimit: action.payload.date,
              upperLimit: nullifyIfBefore(state.upperLimit, action.payload.date),
              inputUpperLimit: nullifyIfBefore(state.inputUpperLimit, action.payload.date),
              selected: state.isRange ? DateLimits.upper : simpleSelected,
          });
};

const changeUpperLimit = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
    return state.id !== action.payload.id
        ? state
        : _.extend({}, state, {
              upperLimit: action.payload.date,
              inputUpperLimit: action.payload.date,
              selected: '',
          });
};

const selectDate = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
    return state.id !== action.payload.id ? state : _.extend({}, state, {selected: action.payload.limit});
};

const applyDates = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
    const lowerLimit: Date =
        state.lowerLimit || !state.isClearable
            ? state.lowerLimit || state.inputLowerLimit || state.appliedLowerLimit
            : null;
    let upperLimit: Date =
        state.upperLimit || !state.isClearable
            ? state.upperLimit || state.inputUpperLimit || state.appliedUpperLimit
            : null;
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

const clearSelection = (state: IDatePickerState, action: IReduxAction<IReduxActionsPayload>): IDatePickerState => {
    return state.id.indexOf(action.payload.id) !== 0 || !state.isClearable
        ? state
        : _.extend({}, state, {
              selected: DateLimits.lower,
              lowerLimit: null,
              upperLimit: null,
              inputLowerLimit: null,
              inputUpperLimit: null,
          });
};

export const datePickerReducer = (
    state: IDatePickerState = datePickerInitialState,
    action: IReduxAction<any>
): IDatePickerState => {
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
        case DatePickerActions.clear:
            return clearSelection(state, action);
        default:
            return state;
    }
};

export const datePickersReducer = (
    state: IDatePickerState[] = datePickersInitialState,
    action: IReduxAction<IReduxActionsPayload>
): IDatePickerState[] => {
    switch (action.type) {
        case DatePickerActions.add:
            return [...state, datePickerReducer(undefined, action)];
        case DatePickerActions.remove:
            return _.reject(state, (datePicker: IDatePickerState) => {
                return action.payload.id === datePicker.id;
            });
        case DatePickerActions.changeLowerLimit:
        case DatePickerActions.changeUpperLimit:
        case DatePickerActions.select:
        case DatePickerActions.apply:
        case DatePickerActions.reset:
        case DatePickerActions.clear:
            return state.map((datePicker: IDatePickerState) => datePickerReducer(datePicker, action));
        default:
            return state;
    }
};
