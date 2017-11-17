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
    appliedUpperLimit: new Date(new Date().setHours(23, 59, 59, 999))
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
        let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);
        expect(_.findWhere(datePickersState, { id: action.payload.id }).lowerLimit).toBe(action.payload.date);
      });

    it('should return the state with the new lower limit for the date picker with the action id when the action is ' +
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
        let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);
        expect(_.findWhere(datePickersState, { id: action.payload.id }).upperLimit).toBe(action.payload.date);
      });

    it('should return the state with the new selected limit and the limit date set to undefined for the date picker ' +
      'with the action id when the action is "SELECT_DATE"', () => {
        let oldState: IDatePickerState[] = [
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker2' }),
          _.extend({}, BASE_DATE_PICKER_STATE),
          _.extend({}, BASE_DATE_PICKER_STATE, { id: 'some-date-picker3' })
        ];
        let action: IReduxAction<ISelectDatePickerPayload> = {
          type: DatePickerActions.select,
          payload: {
            id: 'some-date-picker',
            limit: DateLimits.upper
          }
        };
        let datePickersState: IDatePickerState[] = datePickersReducer(oldState, action);
        expect(_.findWhere(datePickersState, { id: action.payload.id }).selected).toBe(action.payload.limit);
        expect(_.findWhere(datePickersState, { id: action.payload.id }).upperLimit).toBeUndefined();
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

    it('should apply the already applied limit if the new limits are not valid', () => {
      let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE,
        {
          upperLimit: undefined,
          lowerLimit: undefined,
          appliedUpperLimit: new Date(new Date().setHours(2, 0, 1, 1)),
          appliedLowerLimit: new Date(new Date().setHours(0, 0, 1, 1))
        });
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.apply,
        payload: {
          id: 'some-date'
        }
      };
      let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

      expect(datePickerState.appliedLowerLimit).toBe(oldState.appliedLowerLimit);
      expect(datePickerState.appliedUpperLimit).toBe(oldState.appliedUpperLimit);
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

    it('should return the date picker with the new selected limit and the limit date undefined if the action is' +
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
        expect(datePickerState.upperLimit).toBeUndefined();
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

    it('should return the appliedLowerLimit if the lowerLimit is not defined', () => {
      let oldState: IDatePickerState = _.extend({}, BASE_DATE_PICKER_STATE, {
        lowerLimit: undefined,
      });
      let action: IReduxAction<IDatePickerPayload> = {
        type: DatePickerActions.apply,
        payload: {
          id: 'some-date-picker',
        },
      };
      let datePickerState: IDatePickerState = datePickerReducer(oldState, action);

      expect(datePickerState.appliedLowerLimit).toBe(oldState.appliedLowerLimit);
    });

    describe('reducers for the action "APPLY_DATE"', () => {

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

      it('should return the lowerLimit if the lowerLimit is defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE);
        datePickerState = datePickerReducer(oldState, action);

        expect(datePickerState.lowerLimit).toBe(oldState.lowerLimit);
      });

      it('should return the appliedUpperLimit if the upperLimit and the lowerLimit are not defined', () => {
        oldState = _.extend({}, BASE_DATE_PICKER_STATE, {
          upperLimit: undefined,
          lowerLimit: undefined,
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
