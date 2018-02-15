import { IReduxAction } from '../../../utils/ReduxUtils';
import {
  IDatePickerPayload,
  IAddDatePickerPayload,
  DatePickerActions,
  IChangeDatePickerPayload,
  DateLimits,
  ISelectDatePickerPayload
} from '../DatePickerActions';
import {
  IDatePickerState,
  datePickersReducer,
  datePickersInitialState,
  datePickerInitialState,
  datePickerReducer
} from '../DatePickerReducers';
import * as _ from 'underscore';
import * as moment from 'moment';
import { IRangeLimit } from '../DatesSelection';

describe('Date picker', () => {

  const GENERIC_ACTION: IReduxAction<IDatePickerPayload> = {
    type: 'DO_SOMETHING',
    payload: {
      id: 'some-date-picker'
    }
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
  };

  describe('datePickersReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IDatePickerState[] = undefined;
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, GENERIC_ACTION);

      expect(datePickersState).toBe(datePickersInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IDatePickerState[] = [_.extend({}, BASE_DATE_PICKER_STATE)];
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, GENERIC_ACTION);

      expect(datePickersState).toBe(oldState);
    });

    it('should return the old state with one more IOptionPickerState when the action is "ADD_DATE_PICKER"', () => {
      let oldState: IDatePickerState[] = datePickersInitialState;
      let action: IReduxAction<IAddDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: 'some-date-picker',
          isRange: true,
          calendarId: 'calendar-321',
          color: 'magenta'
        }
      };
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

      expect(datePickersState.length).toBe(oldState.length + 1);
      expect(datePickersState.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
        .toBe(1);

      oldState = datePickersState;
      action.payload.id = 'some-date-picker2';
      datePickersState = datePickersReducer(oldState, action);

      expect(datePickersState.length).toBe(oldState.length + 1);
      expect(datePickersState.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
        .toBe(1);
    });

    it('should return the old state without the IDatePickerState when the action is "REMOVE_DATE_PICKER', () => {
      let oldState: IDatePickerState[] = [
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
        _.extend({}, BASE_DATE_PICKER_STATE),
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker3' })
      ];
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.remove,
        payload: {
          id: 'some-date-picker'
        }
      };
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

      expect(datePickersState.length).toBe(oldState.length - 1);
      expect(datePickersState.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
        .toBe(0);

      oldState = datePickersState;
      action.payload.id = 'some-date-picker2';
      datePickersState = datePickersReducer(oldState, action);

      expect(datePickersState.length).toBe(oldState.length - 1);
      expect(datePickersState.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
        .toBe(0);
    });

    it('should return the old state when the action is "REMOVE_DATE_PICKER" and the options cycle id does not exist',
      () => {
        let oldState: IDatePickerState[] = [
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
          _.extend({}, BASE_DATE_PICKER_STATE),
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker3' })
        ];
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.remove,
          payload: {
            id: 'some-date-picker4'
          }
        };
        let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

        expect(datePickersState.length).toBe(oldState.length);
        expect(datePickersState.filter((datePicker: IDatePickerState) => datePicker.id === action.payload.id).length)
          .toBe(0);
      });

    it('should reset all date pickers starting with the action id if the action is "RESET_DATE_PICKERS"', () => {
      let oldState: IDatePickerState[] = [
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
        _.extend({}, BASE_DATE_PICKER_STATE),
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'other-id' })
      ];
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.reset,
        payload: {
          id: 'some-date-picker'
        }
      };
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

      let datePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker' });
      expect(datePicker.lowerLimit).toBe(datePicker.appliedLowerLimit);
      expect(datePicker.upperLimit).toBe(datePicker.appliedUpperLimit);

      let datePicker2: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker2' });
      expect(datePicker2.lowerLimit).toBe(datePicker2.appliedLowerLimit);
      expect(datePicker2.upperLimit).toBe(datePicker2.appliedUpperLimit);

      let otherDatePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'other-id' });
      expect(otherDatePicker.lowerLimit).not.toBe(otherDatePicker.appliedLowerLimit);
      expect(otherDatePicker.upperLimit).not.toBe(otherDatePicker.appliedUpperLimit);
    });

    it('should apply all date pickers starting with the action id if the action is "APPLY_DATE"', () => {
      let oldState: IDatePickerState[] = [
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
        _.extend({}, BASE_DATE_PICKER_STATE),
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'other-id' })
      ];
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.reset,
        payload: {
          id: 'some-date-picker'
        }
      };
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

      let datePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker' });
      expect(datePicker.appliedLowerLimit).toBe(datePicker.lowerLimit);
      expect(datePicker.appliedUpperLimit).toBe(datePicker.upperLimit);

      let datePicker2: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker2' });
      expect(datePicker2.appliedLowerLimit).toBe(datePicker2.lowerLimit);
      expect(datePicker2.appliedUpperLimit).toBe(datePicker2.upperLimit);

      let otherDatePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'other-id' });
      expect(otherDatePicker.appliedLowerLimit).not.toBe(otherDatePicker.lowerLimit);
      expect(otherDatePicker.appliedUpperLimit).not.toBe(otherDatePicker.upperLimit);
    });

    it('should clear all clearable date pickers starting with the action id if the action is "CLEAR_SELECTION"', () => {
      let oldState: IDatePickerState[] = [
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2', isClearable: true }),
        _.extend({}, BASE_DATE_PICKER_STATE),
        _.extend({}, BASE_DATE_PICKER_STATE, { id: 'other-id' })
      ];
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.clear,
        payload: {
          id: 'some-date-picker'
        }
      };
      let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);

      let datePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker' });
      expect(datePicker).toBe(_.findWhere(oldState, { id: 'some-date-picker' }));

      let datePicker2: IDatePickerState = _.findWhere(datePickersState, { id: 'some-date-picker2' });
      expect(datePicker2.selected).toBe(DateLimits.lower);
      expect(datePicker2.lowerLimit).toBeNull();
      expect(datePicker2.upperLimit).toBeNull();
      expect(datePicker2.inputLowerLimit).toBeNull();
      expect(datePicker2.inputUpperLimit).toBeNull();

      let otherDatePicker: IDatePickerState = _.findWhere(datePickersState, { id: 'other-id' });
      expect(otherDatePicker).toBe(_.findWhere(oldState, { id: 'other-id' }));
    });

    it('should return the state with the new upper limit and selected to empty for the date picker with the action id when the action is ' +
      '"CHANGE_UPPER_LIMIT"', () => {
        let oldState: IDatePickerState[] = [
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
          _.extend({}, BASE_DATE_PICKER_STATE),
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker3' })
        ];
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeUpperLimit,
          payload: {
            id: 'some-date-picker',
            date: new Date(new Date().setHours(4, 4, 4, 4))
          }
        };
        const datePickerState: IDatePickerState = _.findWhere(datePickersReducer(oldState, action), { id: action.payload.id });
        expect(datePickerState.upperLimit).toBe(action.payload.date);
        expect(datePickerState.selected).toBe('');
      });

    it('should not change the original state', () => {
      let expectedState = datePickersInitialState.slice(0);
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: 'some-date-picker'
        }
      };
      datePickersReducer(datePickersInitialState, action);

      expect(expectedState).toEqual(datePickersInitialState);
    });
  });

  describe('datePickerReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IDatePickerState = undefined;
      let datePickerState: IDatePickerState = datePickerReducer(oldState, GENERIC_ACTION);

      expect(datePickerState).toBe(datePickerInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
      let datePickerState: IDatePickerState = datePickerReducer(oldState, GENERIC_ACTION);

      expect(datePickerState).toBe(oldState);
    });

    it('should return a new date picker with the specified id when the action is "ADD_DATE_PICKER"', () => {
      let oldState: IDatePickerState = datePickerInitialState;
      let action: IReduxAction<IAddDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: 'some-date-picker',
          isRange: true,
          color: 'rainbow',
          calendarId: 'radnelac'
        }
      };
      let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

      expect(datePickerState.id).toBe(action.payload.id);
      expect(datePickerState.isRange).toBe(action.payload.isRange);
      expect(datePickerState.color).toBe(action.payload.color);
      expect(datePickerState.calendarId).toBe(action.payload.calendarId);
    });

    it('should return a new datepicker state that is unselected when the actions is "ADD_DATE_PICKER" ' +
      'and the payload contains initiallyUnselected true', () => {
        let oldState: IDatePickerState = datePickerInitialState;
        let action: IReduxAction<IAddDatePickerPayload> = {
          type: DatePickerActions.add,
          payload: {
            id: 'some-date-picker',
            isRange: true,
            calendarId: 'calendar-321',
            color: 'green',
            initiallyUnselected: true,
          }
        };
        let newState: IDatePickerState = datePickerReducer(oldState, action);

        expect(newState.lowerLimit).toBeNull();
        expect(newState.upperLimit).toBeNull();
        expect(newState.appliedLowerLimit).toBeNull();
        expect(newState.appliedUpperLimit).toBeNull();
        expect(newState.inputLowerLimit).toBeNull();
        expect(newState.inputUpperLimit).toBeNull();
      });

    it('should return a new date picker with the rangeLimit when the action is "ADD_DATE_PICKER"', () => {
      let oldState: IDatePickerState = datePickerInitialState;
      const rangeLimit: IRangeLimit = {
        weeks: 1,
        days: 1,
        hours: 1,
        message: 'test',
      };
      let action: IReduxAction<IAddDatePickerPayload> = {
        type: DatePickerActions.add,
        payload: {
          id: 'some-date-picker',
          isRange: true,
          rangeLimit,
          color: 'rainbow',
          calendarId: 'radnelac'
        }
      };
      let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

      expect(datePickerState.rangeLimit).toBe(rangeLimit);
    });

    it('should return the original state if the action is "CHANGE_LOWER_LIMIT" and the id is not the one specified ' +
      'in the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeLowerLimit,
          payload: {
            id: 'some-date-picker5',
            date: new Date(new Date().setHours(3, 3, 3, 3))
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(oldState.lowerLimit);
      });

    it('should return the original state if the action is "CHANGE_UPPER_LIMIT" and the id is not the one specified ' +
      'in the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeUpperLimit,
          payload: {
            id: 'some-date-picker5',
            date: new Date(new Date().setHours(3, 3, 3, 3))
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.upperLimit).toBe(oldState.upperLimit);
      });

    it('should return the date picker with the new lower limit if the action is "CHANGE_LOWER_LIMIT" and the id is ' +
      'the one specified', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeLowerLimit,
          payload: {
            id: 'some-date-picker',
            date: new Date(new Date().setHours(3, 3, 3, 3))
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(action.payload.date);
      });

    it('should return the state with the new lower limit for the date picker with the action id when the action is ' +
      '"CHANGE_LOWER_LIMIT"', () => {
        let oldState: IDatePickerState[] = [
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
          _.extend({}, BASE_DATE_PICKER_STATE),
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker3' })
        ];
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeLowerLimit,
          payload: {
            id: 'some-date-picker',
            date: new Date(new Date().setHours(4, 4, 4, 4))
          }
        };
        const datePickerState: IDatePickerState = _.findWhere(datePickersReducer(oldState, action), { id: action.payload.id });
        expect(datePickerState.lowerLimit).toBe(action.payload.date);
        expect(datePickerState.selected).toBe('');
      });

    it('should return the state with the upper limit selected when the datepicker state isRange ' +
      'and the action is "CHANGE_LOWER_LIMIT"', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
          id: 'some-date-picker',
          isRange: true,
        });
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeLowerLimit,
          payload: {
            id: 'some-date-picker',
            date: new Date(),
          }
        };
        let newState: IDatePickerState = datePickerReducer(oldState, action);

        expect(newState.selected).toBe(DateLimits.upper);
      });

    it('should return the state with a null upper limit when the datepicker state isRange, ' +
      'the action is "CHANGE_LOWER_LIMIT" and the new lower limit is after the current upper limit', () => {
        const newLowerLimit: Date = moment().add(2, 'day').toDate();
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
          id: 'some-date-picker',
          isRange: true,
          lowerLimit: new Date(),
          inputLowerLimit: new Date(),
          upperLimit: moment().add(1, 'day').toDate(),
          inputUpperLimit: moment().add(1, 'day').toDate(),
        });
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeLowerLimit,
          payload: {
            id: 'some-date-picker',
            date: newLowerLimit,
          }
        };
        let newState: IDatePickerState = datePickerReducer(oldState, action);

        expect(newState.lowerLimit).toBe(newLowerLimit);
        expect(newState.inputLowerLimit).toBe(newLowerLimit);
        expect(newState.upperLimit).toBeNull();
        expect(newState.inputUpperLimit).toBeNull();
        expect(newState.selected).toBe(DateLimits.upper);
      });

    it('should return the date picker with the new lower limit if the action is "CHANGE_UPPER_LIMIT" and the id is ' +
      'the one specified', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IChangeDatePickerPayload> = {
          type: DatePickerActions.changeUpperLimit,
          payload: {
            id: 'some-date-picker',
            date: new Date(new Date().setHours(3, 3, 3, 3))
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.upperLimit).toBe(action.payload.date);
      });

    it('should return the date picker as is if the action is "RESET_DATE_PICKERS" and the id does not start with the ' +
      'one from the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.reset,
          payload: {
            id: 'date-picker'
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(oldState.lowerLimit);
        expect(datePickerState.upperLimit).toBe(oldState.upperLimit);
      });

    it('should return the date picker with the limits replaced by the applied ones if the action is ' +
      '"RESET_DATE_PICKERS" and the id starts with the one from the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.reset,
          payload: {
            id: 'some-date'
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(oldState.appliedLowerLimit);
        expect(datePickerState.lowerLimit).not.toBe(oldState.lowerLimit);
        expect(datePickerState.upperLimit).toBe(oldState.appliedUpperLimit);
        expect(datePickerState.upperLimit).not.toBe(oldState.upperLimit);
      });

    it('should return the date picker as is if the action is "APPLY_DATE" and the id does not start with the one ' +
      'from the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.apply,
          payload: {
            id: 'date-picker'
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).toBe(oldState.appliedLowerLimit);
        expect(datePickerState.appliedUpperLimit).toBe(oldState.appliedUpperLimit);
      });

    it('should return the date picker with the applied limits replaced by the current ones value if the action is ' +
      '"APPLY_DATE" and the id starts with the one from the action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.apply,
          payload: {
            id: 'some-date'
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).not.toBe(oldState.appliedLowerLimit);
        expect(datePickerState.appliedLowerLimit).toBe(oldState.lowerLimit);
        expect(datePickerState.appliedUpperLimit).not.toBe(oldState.appliedUpperLimit);
        expect(datePickerState.appliedUpperLimit).toBe(oldState.upperLimit);
      });

    it('should apply the lower limit to the upper limit if the upper limit it lower than the lower when the action ' +
      'is "APPLY_DATE"', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE,
          { upperLimit: new Date(new Date().setHours(0, 0, 1, 1)) });
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.apply,
          payload: {
            id: 'some-date'
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).not.toBe(oldState.appliedLowerLimit);
        expect(datePickerState.appliedLowerLimit).toBe(oldState.lowerLimit);
        expect(datePickerState.appliedUpperLimit).not.toBe(oldState.appliedUpperLimit);
        expect(datePickerState.appliedUpperLimit).toBe(oldState.lowerLimit);
      });

    it('should apply the input limit if the new limits are not valid', () => {
      const oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE,
        {
          upperLimit: undefined,
          lowerLimit: undefined,
          inputUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
          inputLowerLimit: new Date(new Date().setHours(0, 0, 1, 1))
        });
      const action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.apply,
        payload: {
          id: 'some-date'
        }
      };
      const datePickerState: IDatePickerState = datePickerReducer(oldState, action);

      expect(datePickerState.appliedLowerLimit).toBe(oldState.inputLowerLimit);
      expect(datePickerState.appliedUpperLimit).toBe(oldState.inputUpperLimit);
    });

    it('should apply the already applied limit if the new limits are not valid and neither are the input limits ' +
      ' and the datepicker is not clearable', () => {
        const oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE,
          {
            upperLimit: undefined,
            lowerLimit: undefined,
            inputUpperLimit: undefined,
            inputLowerLimit: undefined,
            appliedUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
            appliedLowerLimit: new Date(new Date().setHours(0, 0, 1, 1))
          });
        const action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.apply,
          payload: {
            id: 'some-date'
          }
        };
        const datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).toBe(oldState.appliedLowerLimit);
        expect(datePickerState.appliedUpperLimit).toBe(oldState.appliedUpperLimit);
      });

    it('should allows to apply null limits when the datepicker is clearable', () => {
      const oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
        isClearable: true,
        upperLimit: null,
        lowerLimit: null,
        appliedUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
        appliedLowerLimit: new Date(new Date().setHours(0, 0, 1, 1)),
      });
      const action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.apply,
        payload: {
          id: 'some-date-picker'
        }
      };
      const newState: IDatePickerState = datePickerReducer(oldState, action);

      expect(newState.appliedLowerLimit).toBeNull();
      expect(newState.appliedUpperLimit).toBeNull();
    });

    it('should return the original state if the action is "SELECT_DATE" and the id is not the one specified in the' +
      'action', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<ISelectDatePickerPayload> = {
          type: DatePickerActions.select,
          payload: {
            id: 'some-date-picker5',
            limit: DateLimits.upper
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.selected).toBe(oldState.selected);
        expect(datePickerState.upperLimit).toBeDefined();
      });

    it('should return the date picker with the new selected limit and the limit date unchanged if the action is' +
      '"SELECT_DATE" and the id is the one specified', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE);
        let action: IReduxAction<ISelectDatePickerPayload> = {
          type: DatePickerActions.select,
          payload: {
            id: 'some-date-picker',
            limit: DateLimits.upper
          }
        };
        let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.selected).toBe(action.payload.limit);
        expect(datePickerState.upperLimit).toBe(oldState.upperLimit);
      });

    it('should set the limits to null and select the lower limit when the action is "CLEAR_SELECTION', () => {
      let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
        isClearable: true,
      });
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.clear,
        payload: {
          id: 'some-date',
        },
      };
      let newState: IDatePickerState = datePickerReducer(oldState, action);

      expect(newState.selected).toBe(DateLimits.lower);
      expect(newState.lowerLimit).toBeNull();
      expect(newState.upperLimit).toBeNull();
      expect(newState.inputLowerLimit).toBeNull();
      expect(newState.inputUpperLimit).toBeNull();
    });

    it('should return the oldState when the action is "CLEAR_SELECTION and the datepicker id does not contain ' +
      'the payload id', () => {
        let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
          isClearable: true,
        });
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.clear,
          payload: {
            id: 'some-other-date-picker',
          },
        };
        let newState: IDatePickerState = datePickerReducer(oldState, action);

        expect(newState).toBe(oldState);
      });

    it('should return the oldState when the action is "CLEAR_SELECTION and the datepicker ' +
      'is not clearable', () => {
        let oldState: IDatePickerState = BASE_DATE_PICKER_STATE;
        let action: IReduxAction<IDatePickerPayload> = {
          type: DatePickerActions.clear,
          payload: {
            id: 'some-date-picker',
          },
        };
        let newState: IDatePickerState = datePickerReducer(oldState, action);

        expect(newState).toBe(oldState);
      });

    it('should not change the original state', () => {
      let expectedState = _.extend({}, datePickerInitialState);
      let action: IReduxAction<IChangeDatePickerPayload> = {
        type: DatePickerActions.changeUpperLimit,
        payload: {
          id: 'some-date-picker',
          date: new Date(new Date().setHours(3, 3, 3, 3))
        }
      };
      datePickerReducer(datePickerInitialState, action);

      expect(expectedState).toEqual(datePickerInitialState);
    });

    describe('reducer for the action "APPLY_DATE"', () => {

      let action: IReduxAction<IDatePickerPayload>;
      let oldState: IDatePickerState;
      let datePickerState: IDatePickerState;

      beforeEach(() => {
        action = {
          type: DatePickerActions.apply,
          payload: {
            id: 'some-date-picker',
          },
        };
      });

      it('should return the inputLowerLimit if the lowerLimit is not defined and the datepicker is not clearable', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          lowerLimit: undefined,
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).toBe(oldState.inputLowerLimit);
      });

      it('should return the appliedLowerLimit if the lowerLimit and inputLowerLimits are not defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          lowerLimit: undefined,
          inputLowerLimit: undefined,
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedLowerLimit).toBe(oldState.appliedLowerLimit);
      });

      it('should return the lowerLimit if the lowerLimit is defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE);
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(oldState.lowerLimit);
      });

      it('should return the inputUpperLimit if the upperLimit is not defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          upperLimit: undefined,
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedUpperLimit).toBe(oldState.inputUpperLimit);
      });

      it('should return the appliedUpperLimit if the upperLimit and inputUpperLimit are not defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          upperLimit: undefined,
          inputUpperLimit: undefined,
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedUpperLimit).toBe(oldState.appliedUpperLimit);
      });

      it('should return the upperLimit if its greater than the lowerLimit', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE);
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedUpperLimit).toBe(oldState.upperLimit);
      });

      it('should return the lowerLimit if the upperLimit is smaller than the lowerLimit', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          lowerLimit: new Date().setHours(2, 1, 2, 1),
          upperLimit: new Date().setHours(1, 1, 2, 1),
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedUpperLimit).toBe(oldState.lowerLimit);
      });

      it('should return the lowerLimit if the upperLimit is equal than the lowerLimit', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          lowerLimit: new Date().setHours(1, 1, 2, 1),
          upperLimit: new Date().setHours(1, 1, 2, 1),
        });
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.appliedUpperLimit).toBe(oldState.lowerLimit);
      });
    });
  });
});
