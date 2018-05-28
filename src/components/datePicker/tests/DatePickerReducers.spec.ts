import * as moment from 'moment';
import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    DateLimits,
    DatePickerActions,
    IAddDatePickerPayload,
    IChangeDatePickerPayload,
    IDatePickerPayload,
    ISelectDatePickerPayload,
} from '../DatePickerActions';
import {
    datePickerInitialState,
    datePickerReducer,
    datePickersInitialState,
    datePickersReducer,
    IDatePickerState,
} from '../DatePickerReducers';
import {IRangeLimit} from '../DatesSelection';

describe('Date picker', () => {

    const GENERIC_ACTION: IReduxAction<IDatePickerPayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'some-date-picker',
        },
    };

    const BASE_DATE_PICKER_STATE: IDatePickerState = {
        id: 'some-date-picker',
        calendarId: 'some-calendar',
        color: 'teal',
        isRange: false,
        lowerLimit: new Date(new Date().setHours(2, 1, 2, 1)),
        upperLimit: new Date(new Date().setHours(3, 2, 1, 2)),
        selected: '',
        appliedLowerLimit: new Date(new Date().setHours(0, 0, 0, 0)),
        appliedUpperLimit: new Date(new Date().setHours(23, 59, 59, 999)),
        inputLowerLimit: new Date(new Date().setHours(0, 0, 0, 0)),
        inputUpperLimit: new Date(new Date().setHours(23, 59, 59, 999)),
        isClearable: false,
        simple: false,
    };

    describe('datePickersReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const datePickersState: IDatePickerState[] = datePickersReducer(undefined, GENERIC_ACTION);

            expect(datePickersState).toBe(datePickersInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldDatePickers: IDatePickerState[] = [_.extend({}, BASE_DATE_PICKER_STATE)];
            const newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, GENERIC_ACTION);

            expect(newDatePickers).toBe(oldDatePickers);
        });

        it('should return the old state with one more IOptionPickerState when the action is "ADD_DATE_PICKER"', () => {
            let oldDatePickers: IDatePickerState[] = datePickersInitialState;
            const action: IReduxAction<IAddDatePickerPayload> = {
                type: DatePickerActions.add,
                payload: {
                    id: 'some-date-picker',
                    isRange: true,
                    calendarId: 'calendar-321',
                    color: 'magenta',
                },
            };
            let newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

            expect(newDatePickers.length).toBe(oldDatePickers.length + 1);
            expect(newDatePickers.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
                .toBe(1);

            oldDatePickers = newDatePickers;
            action.payload.id = 'some-date-picker2';
            newDatePickers = datePickersReducer(oldDatePickers, action);

            expect(newDatePickers.length).toBe(oldDatePickers.length + 1);
            expect(newDatePickers.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
                .toBe(1);
        });

        it('should return the old state without the IDatePickerState when the action is "REMOVE_DATE_PICKER', () => {
            let oldDatePickers: IDatePickerState[] = [
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                _.extend({}, BASE_DATE_PICKER_STATE),
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker3'}),
            ];
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.remove,
                payload: {
                    id: 'some-date-picker',
                },
            };
            let newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

            expect(newDatePickers.length).toBe(oldDatePickers.length - 1);
            expect(newDatePickers.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
                .toBe(0);

            oldDatePickers = newDatePickers;
            action.payload.id = 'some-date-picker2';
            newDatePickers = datePickersReducer(oldDatePickers, action);

            expect(newDatePickers.length).toBe(oldDatePickers.length - 1);
            expect(newDatePickers.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
                .toBe(0);
        });

        it('should return the old state when the action is "REMOVE_DATE_PICKER" and the options cycle id does not exist',
            () => {
                const oldDatePickers: IDatePickerState[] = [
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                    _.extend({}, BASE_DATE_PICKER_STATE),
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker3'}),
                ];
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.remove,
                    payload: {
                        id: 'some-date-picker4',
                    },
                };
                const newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

                expect(newDatePickers.length).toBe(oldDatePickers.length);
                expect(newDatePickers.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
                    .toBe(0);
            });

        it('should reset all date pickers starting with the action id if the action is "RESET_DATE_PICKERS"', () => {
            const oldDatePickers: IDatePickerState[] = [
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                _.extend({}, BASE_DATE_PICKER_STATE),
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'other-id'}),
            ];
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.reset,
                payload: {
                    id: 'some-date-picker',
                },
            };
            const newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

            const datePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker'});
            expect(datePicker.lowerLimit).toBe(datePicker.appliedLowerLimit);
            expect(datePicker.upperLimit).toBe(datePicker.appliedUpperLimit);

            const datePicker2: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker2'});
            expect(datePicker2.lowerLimit).toBe(datePicker2.appliedLowerLimit);
            expect(datePicker2.upperLimit).toBe(datePicker2.appliedUpperLimit);

            const otherDatePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'other-id'});
            expect(otherDatePicker.lowerLimit).not.toBe(otherDatePicker.appliedLowerLimit);
            expect(otherDatePicker.upperLimit).not.toBe(otherDatePicker.appliedUpperLimit);
        });

        it('should apply all date pickers starting with the action id if the action is "APPLY_DATE"', () => {
            const oldDatePickers: IDatePickerState[] = [
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                _.extend({}, BASE_DATE_PICKER_STATE),
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'other-id'}),
            ];
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.reset,
                payload: {
                    id: 'some-date-picker',
                },
            };
            const newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

            const datePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker'});
            expect(datePicker.appliedLowerLimit).toBe(datePicker.lowerLimit);
            expect(datePicker.appliedUpperLimit).toBe(datePicker.upperLimit);

            const datePicker2: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker2'});
            expect(datePicker2.appliedLowerLimit).toBe(datePicker2.lowerLimit);
            expect(datePicker2.appliedUpperLimit).toBe(datePicker2.upperLimit);

            const otherDatePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'other-id'});
            expect(otherDatePicker.appliedLowerLimit).not.toBe(otherDatePicker.lowerLimit);
            expect(otherDatePicker.appliedUpperLimit).not.toBe(otherDatePicker.upperLimit);
        });

        it('should clear all clearable date pickers starting with the action id if the action is "CLEAR_SELECTION"', () => {
            const oldDatePickers: IDatePickerState[] = [
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2', isClearable: true}),
                _.extend({}, BASE_DATE_PICKER_STATE),
                _.extend({}, BASE_DATE_PICKER_STATE, {id: 'other-id'}),
            ];
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.clear,
                payload: {
                    id: 'some-date-picker',
                },
            };
            const newDatePickers: IDatePickerState[] = datePickersReducer(oldDatePickers, action);

            const datePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker'});
            expect(datePicker).toBe(_.findWhere(oldDatePickers, {id: 'some-date-picker'}));

            const datePicker2: IDatePickerState = _.findWhere(newDatePickers, {id: 'some-date-picker2'});
            expect(datePicker2.selected).toBe(DateLimits.lower);
            expect(datePicker2.lowerLimit).toBeNull();
            expect(datePicker2.upperLimit).toBeNull();
            expect(datePicker2.inputLowerLimit).toBeNull();
            expect(datePicker2.inputUpperLimit).toBeNull();

            const otherDatePicker: IDatePickerState = _.findWhere(newDatePickers, {id: 'other-id'});
            expect(otherDatePicker).toBe(_.findWhere(oldDatePickers, {id: 'other-id'}));
        });

        it('should return the state with the new lower limit for the date picker with the action id when the action is ' +
            '"CHANGE_LOWER_LIMIT"', () => {
                const oldDatePickers: IDatePickerState[] = [
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                    _.extend({}, BASE_DATE_PICKER_STATE),
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker3'}),
                ];
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeLowerLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: new Date(new Date().setHours(4, 4, 4, 4)),
                    },
                };
                const newDatePicker: IDatePickerState = _.findWhere(datePickersReducer(oldDatePickers, action), {id: action.payload.id});

                expect(newDatePicker.lowerLimit).toBe(action.payload.date);
                expect(newDatePicker.selected).toBe('');
            });

        it('should return the state with the new upper limit and selected to empty for the date picker with the action id when the action is ' +
            '"CHANGE_UPPER_LIMIT"', () => {
                const oldDatePickers: IDatePickerState[] = [
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker2'}),
                    _.extend({}, BASE_DATE_PICKER_STATE),
                    _.extend({}, BASE_DATE_PICKER_STATE, {id: 'some-date-picker3'}),
                ];
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeUpperLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: new Date(new Date().setHours(4, 4, 4, 4)),
                    },
                };
                const newDatePicker: IDatePickerState = _.findWhere(datePickersReducer(oldDatePickers, action), {id: action.payload.id});
                expect(newDatePicker.upperLimit).toBe(action.payload.date);
                expect(newDatePicker.selected).toBe('');
            });

        it('should not change the original state', () => {
            const expectedState = datePickersInitialState.slice(0);
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.add,
                payload: {
                    id: 'some-date-picker',
                },
            };
            datePickersReducer(datePickersInitialState, action);

            expect(expectedState).toEqual(datePickersInitialState);
        });
    });

    describe('datePickerReducer', () => {
        it('should return the default state if the action is not defined and the state is undefined', () => {
            const datePickerState: IDatePickerState = datePickerReducer(undefined, GENERIC_ACTION);

            expect(datePickerState).toBe(datePickerInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, GENERIC_ACTION);

            expect(newDatePicker).toBe(oldDatePicker);
        });

        it('should return a new date picker with the specified id when the action is "ADD_DATE_PICKER"', () => {
            const oldDatePicker: IDatePickerState = datePickerInitialState;
            const action: IReduxAction<IAddDatePickerPayload> = {
                type: DatePickerActions.add,
                payload: {
                    id: 'some-date-picker',
                    isRange: true,
                    color: 'rainbow',
                    calendarId: 'radnelac',
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.id).toBe(action.payload.id);
            expect(newDatePicker.isRange).toBe(action.payload.isRange);
            expect(newDatePicker.color).toBe(action.payload.color);
            expect(newDatePicker.calendarId).toBe(action.payload.calendarId);
        });

        it('should return a new datepicker state that is unselected when the actions is "ADD_DATE_PICKER" ' +
            'and the payload contains initiallyUnselected true', () => {
                const oldDatePicker: IDatePickerState = datePickerInitialState;
                const action: IReduxAction<IAddDatePickerPayload> = {
                    type: DatePickerActions.add,
                    payload: {
                        id: 'some-date-picker',
                        isRange: true,
                        calendarId: 'calendar-321',
                        color: 'green',
                        initiallyUnselected: true,
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBeNull();
                expect(newDatePicker.upperLimit).toBeNull();
                expect(newDatePicker.appliedLowerLimit).toBeNull();
                expect(newDatePicker.appliedUpperLimit).toBeNull();
                expect(newDatePicker.inputLowerLimit).toBeNull();
                expect(newDatePicker.inputUpperLimit).toBeNull();
            });

        it('should return a new date picker with the rangeLimit when the action is "ADD_DATE_PICKER"', () => {
            const oldDatePicker: IDatePickerState = datePickerInitialState;
            const rangeLimit: IRangeLimit = {
                weeks: 1,
                days: 1,
                hours: 1,
                message: 'test',
            };
            const action: IReduxAction<IAddDatePickerPayload> = {
                type: DatePickerActions.add,
                payload: {
                    id: 'some-date-picker',
                    isRange: true,
                    rangeLimit,
                    color: 'rainbow',
                    calendarId: 'radnelac',
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.rangeLimit).toBe(rangeLimit);
        });

        it('should return the original state if the action is "CHANGE_LOWER_LIMIT" and the id is not the one specified ' +
            'in the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeLowerLimit,
                    payload: {
                        id: 'some-date-picker5',
                        date: new Date(new Date().setHours(3, 3, 3, 3)),
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(oldDatePicker.lowerLimit);
            });

        it('should return the original state if the action is "CHANGE_UPPER_LIMIT" and the id is not the one specified ' +
            'in the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeUpperLimit,
                    payload: {
                        id: 'some-date-picker5',
                        date: new Date(new Date().setHours(3, 3, 3, 3)),
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.upperLimit).toBe(oldDatePicker.upperLimit);
            });

        it('should return the date picker with the new lower limit if the action is "CHANGE_LOWER_LIMIT" and the id is ' +
            'the one specified', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeLowerLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: new Date(new Date().setHours(3, 3, 3, 3)),
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(action.payload.date);
            });

        it('should return the state with the upper limit selected when the datepicker state isRange ' +
            'and the action is "CHANGE_LOWER_LIMIT"', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                    id: 'some-date-picker',
                    isRange: true,
                });
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeLowerLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: new Date(),
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.selected).toBe(DateLimits.upper);
            });

        it('should return the state with a null upper limit when the datepicker state isRange, ' +
            'the action is "CHANGE_LOWER_LIMIT" and the new lower limit is after the current upper limit', () => {
                const newLowerLimit: Date = moment().add(2, 'day').toDate();
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                    id: 'some-date-picker',
                    isRange: true,
                    lowerLimit: new Date(),
                    inputLowerLimit: new Date(),
                    upperLimit: moment().add(1, 'day').toDate(),
                    inputUpperLimit: moment().add(1, 'day').toDate(),
                });
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeLowerLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: newLowerLimit,
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(newLowerLimit);
                expect(newDatePicker.inputLowerLimit).toBe(newLowerLimit);
                expect(newDatePicker.upperLimit).toBeNull();
                expect(newDatePicker.inputUpperLimit).toBeNull();
                expect(newDatePicker.selected).toBe(DateLimits.upper);
            });

        it('should return the state with the lower limit selected when the date picker is simple and the action is "CHANGE_LOWER_LIMIT"', () => {
            const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                id: 'some-date-picker',
                simple: true,
            });
            const action: IReduxAction<IChangeDatePickerPayload> = {
                type: DatePickerActions.changeLowerLimit,
                payload: {
                    id: 'some-date-picker',
                    date: new Date(),
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.selected).toBe(DateLimits.lower);
        });

        it('should return the date picker with the new lower limit if the action is "CHANGE_UPPER_LIMIT" and the id is ' +
            'the one specified', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IChangeDatePickerPayload> = {
                    type: DatePickerActions.changeUpperLimit,
                    payload: {
                        id: 'some-date-picker',
                        date: new Date(new Date().setHours(3, 3, 3, 3)),
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.upperLimit).toBe(action.payload.date);
            });

        it('should return the date picker as is if the action is "RESET_DATE_PICKERS" and the id does not start with the ' +
            'one from the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.reset,
                    payload: {
                        id: 'date-picker',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(oldDatePicker.lowerLimit);
                expect(newDatePicker.upperLimit).toBe(oldDatePicker.upperLimit);
            });

        it('should return the date picker with the limits replaced by the applied ones if the action is ' +
            '"RESET_DATE_PICKERS" and the id starts with the one from the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.reset,
                    payload: {
                        id: 'some-date',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(oldDatePicker.appliedLowerLimit);
                expect(newDatePicker.lowerLimit).not.toBe(oldDatePicker.lowerLimit);
                expect(newDatePicker.upperLimit).toBe(oldDatePicker.appliedUpperLimit);
                expect(newDatePicker.upperLimit).not.toBe(oldDatePicker.upperLimit);
            });

        it('should return the date picker as is if the action is "APPLY_DATE" and the id does not start with the one ' +
            'from the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.apply,
                    payload: {
                        id: 'date-picker',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.appliedLowerLimit);
                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.appliedUpperLimit);
            });

        it('should return the date picker with the applied limits replaced by the current ones value if the action is ' +
            '"APPLY_DATE" and the id starts with the one from the action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.apply,
                    payload: {
                        id: 'some-date',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).not.toBe(oldDatePicker.appliedLowerLimit);
                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.lowerLimit);
                expect(newDatePicker.appliedUpperLimit).not.toBe(oldDatePicker.appliedUpperLimit);
                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.upperLimit);
            });

        it('should apply the lower limit to the upper limit if the upper limit it lower than the lower when the action ' +
            'is "APPLY_DATE"', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                    upperLimit: new Date(new Date().setHours(0, 0, 1, 1)),
                });
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.apply,
                    payload: {
                        id: 'some-date',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).not.toBe(oldDatePicker.appliedLowerLimit);
                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.lowerLimit);
                expect(newDatePicker.appliedUpperLimit).not.toBe(oldDatePicker.appliedUpperLimit);
                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.lowerLimit);
            });

        it('should apply the input limit if the new limits are not valid', () => {
            const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                upperLimit: undefined,
                lowerLimit: undefined,
                inputUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
                inputLowerLimit: new Date(new Date().setHours(0, 0, 1, 1)),
            });
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.apply,
                payload: {
                    id: 'some-date',
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.inputLowerLimit);
            expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.inputUpperLimit);
        });

        it('should apply the already applied limit if the new limits are not valid and neither are the input limits ' +
            ' and the datepicker is not clearable', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                    upperLimit: undefined,
                    lowerLimit: undefined,
                    inputUpperLimit: undefined,
                    inputLowerLimit: undefined,
                    appliedUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
                    appliedLowerLimit: new Date(new Date().setHours(0, 0, 1, 1)),
                });
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.apply,
                    payload: {
                        id: 'some-date',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.appliedLowerLimit);
                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.appliedUpperLimit);
            });

        it('should allows to apply null limits when the datepicker is clearable', () => {
            const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                isClearable: true,
                upperLimit: null,
                lowerLimit: null,
                appliedUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
                appliedLowerLimit: new Date(new Date().setHours(0, 0, 1, 1)),
            });
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.apply,
                payload: {
                    id: 'some-date-picker',
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.appliedLowerLimit).toBeNull();
            expect(newDatePicker.appliedUpperLimit).toBeNull();
        });

        it('should return the original state if the action is "SELECT_DATE" and the id is not the one specified in the' +
            'action', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<ISelectDatePickerPayload> = {
                    type: DatePickerActions.select,
                    payload: {
                        id: 'some-date-picker5',
                        limit: DateLimits.upper,
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.selected).toBe(oldDatePicker.selected);
                expect(newDatePicker.upperLimit).toBeDefined();
            });

        it('should return the date picker with the new selected limit and the limit date unchanged if the action is' +
            '"SELECT_DATE" and the id is the one specified', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
                const action: IReduxAction<ISelectDatePickerPayload> = {
                    type: DatePickerActions.select,
                    payload: {
                        id: 'some-date-picker',
                        limit: DateLimits.upper,
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.selected).toBe(action.payload.limit);
                expect(newDatePicker.upperLimit).toBe(oldDatePicker.upperLimit);
            });

        it('should set the limits to null and select the lower limit when the action is "CLEAR_SELECTION', () => {
            const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                isClearable: true,
            });
            const action: IReduxAction<IDatePickerPayload> = {
                type: DatePickerActions.clear,
                payload: {
                    id: 'some-date',
                },
            };
            const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

            expect(newDatePicker.selected).toBe(DateLimits.lower);
            expect(newDatePicker.lowerLimit).toBeNull();
            expect(newDatePicker.upperLimit).toBeNull();
            expect(newDatePicker.inputLowerLimit).toBeNull();
            expect(newDatePicker.inputUpperLimit).toBeNull();
        });

        it('should return the oldState when the action is "CLEAR_SELECTION and the datepicker id does not contain ' +
            'the payload id', () => {
                const oldDatePicker: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
                    isClearable: true,
                });
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.clear,
                    payload: {
                        id: 'some-other-date-picker',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker).toBe(oldDatePicker);
            });

        it('should return the oldState when the action is "CLEAR_SELECTION and the datepicker ' +
            'is not clearable', () => {
                const action: IReduxAction<IDatePickerPayload> = {
                    type: DatePickerActions.clear,
                    payload: {
                        id: 'some-date-picker',
                    },
                };
                const newDatePicker: IDatePickerState = datePickerReducer(BASE_DATE_PICKER_STATE, action);

                expect(newDatePicker).toBe(BASE_DATE_PICKER_STATE);
            });

        it('should not change the original state', () => {
            const expectedState = _.extend({}, datePickerInitialState);
            const action: IReduxAction<IChangeDatePickerPayload> = {
                type: DatePickerActions.changeUpperLimit,
                payload: {
                    id: 'some-date-picker',
                    date: new Date(new Date().setHours(3, 3, 3, 3)),
                },
            };
            datePickerReducer(datePickerInitialState, action);

            expect(expectedState).toEqual(datePickerInitialState);
        });

        describe('reducer for the action "APPLY_DATE"', () => {

            let action: IReduxAction<IDatePickerPayload>;
            let oldDatePicker: IDatePickerState;
            let newDatePicker: IDatePickerState;

            beforeEach(() => {
                action = {
                    type: DatePickerActions.apply,
                    payload: {
                        id: 'some-date-picker',
                    },
                };
            });

            it('should return the inputLowerLimit if the lowerLimit is not defined and the datepicker is not clearable', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    lowerLimit: undefined,
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.inputLowerLimit);
            });

            it('should return the appliedLowerLimit if the lowerLimit and inputLowerLimits are not defined', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    lowerLimit: undefined,
                    inputLowerLimit: undefined,
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedLowerLimit).toBe(oldDatePicker.appliedLowerLimit);
            });

            it('should return the lowerLimit if the lowerLimit is defined', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE);
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.lowerLimit).toBe(oldDatePicker.lowerLimit);
            });

            it('should return the inputUpperLimit if the upperLimit is not defined', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    upperLimit: undefined,
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.inputUpperLimit);
            });

            it('should return the appliedUpperLimit if the upperLimit and inputUpperLimit are not defined', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    upperLimit: undefined,
                    inputUpperLimit: undefined,
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.appliedUpperLimit);
            });

            it('should return the upperLimit if its greater than the lowerLimit', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE);
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.upperLimit);
            });

            it('should return the lowerLimit if the upperLimit is smaller than the lowerLimit', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    lowerLimit: new Date().setHours(2, 1, 2, 1),
                    upperLimit: new Date().setHours(1, 1, 2, 1),
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.lowerLimit);
            });

            it('should return the lowerLimit if the upperLimit is equal than the lowerLimit', () => {
                oldDatePicker = _.extend({}, BASE_DATE_PICKER_STATE, {
                    lowerLimit: new Date().setHours(1, 1, 2, 1),
                    upperLimit: new Date().setHours(1, 1, 2, 1),
                });
                newDatePicker = datePickerReducer(oldDatePicker, action);

                expect(newDatePicker.appliedUpperLimit).toBe(oldDatePicker.lowerLimit);
            });
        });
    });
});
