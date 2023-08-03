import {IReduxAction} from '../../utils/ReduxUtils';
import {DatePickerDateRange} from './DatePickerConstants';
import {IRangeLimit} from './DatesSelection';

export const DatePickerActions = {
    add: 'ADD_DATE_PICKER',
    remove: 'REMOVE_DATE_PICKER',
    changeLowerLimit: 'CHANGE_LOWER_LIMIT',
    changeUpperLimit: 'CHANGE_UPPER_LIMIT',
    select: 'SELECT_DATE',
    reset: 'RESET_DATE_PICKERS',
    apply: 'APPLY_DATE',
    clear: 'CLEAR_SELECTION',
};

export interface IDatePickerPayload {
    id: string;
}

export interface IAddDatePickerPayload extends IDatePickerPayload {
    calendarId: string;
    isRange: boolean;
    rangeLimit?: IRangeLimit;
    minimalRangeLimit?: IRangeLimit;
    initiallyUnselected?: boolean;
    isClearable?: boolean;
    simple?: boolean;
    initialDateRange?: DatePickerDateRange;
}

export interface IChangeDatePickerPayload extends IDatePickerPayload {
    date: Date;
}

export interface ISelectDatePickerPayload extends IDatePickerPayload {
    limit: string;
}

export const DateLimits = {
    lower: 'lower',
    upper: 'upper',
};

export const addDatePicker = (
    id: string,
    isRange: boolean,
    rangeLimit: IRangeLimit = undefined,
    calendarId: string = '',
    initiallyUnselected = false,
    isClearable = false,
    simple = false,
    initialDateRange?: DatePickerDateRange,
    minimalRangeLimit: IRangeLimit = undefined,
): IReduxAction<IAddDatePickerPayload> => ({
    type: DatePickerActions.add,
    payload: {
        id,
        calendarId,
        isRange,
        rangeLimit,
        initiallyUnselected,
        isClearable,
        simple,
        initialDateRange,
        minimalRangeLimit,
    },
});

export const removeDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({
    type: DatePickerActions.remove,
    payload: {
        id,
    },
});

export const resetDatePickers = (id: string): IReduxAction<IDatePickerPayload> => ({
    type: DatePickerActions.reset,
    payload: {
        id,
    },
});

export const applyDatePicker = (id: string): IReduxAction<IDatePickerPayload> => ({
    type: DatePickerActions.apply,
    payload: {
        id,
    },
});

export const changeDatePickerLowerLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({
    type: DatePickerActions.changeLowerLimit,
    payload: {
        id,
        date,
    },
});

export const changeDatePickerUpperLimit = (id: string, date: Date): IReduxAction<IChangeDatePickerPayload> => ({
    type: DatePickerActions.changeUpperLimit,
    payload: {
        id,
        date,
    },
});

export const selectDate = (id: string, limit: string): IReduxAction<ISelectDatePickerPayload> => ({
    type: DatePickerActions.select,
    payload: {
        id,
        limit,
    },
});

export const clearSelection = (id: string): IReduxAction<IDatePickerPayload> => ({
    type: DatePickerActions.clear,
    payload: {
        id,
    },
});
