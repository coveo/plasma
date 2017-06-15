import { DATES_SEPARATOR } from '../../../utils/DateUtils';
import { DatePickerColors } from '../DatePicker';
import { IDatesSelectionBox } from '../DatePickerBox';
import { ICalendarSelectionRule, CalendarSelectionRuleType } from '../../calendar/Calendar';
import * as moment from 'moment';

export const SELECTION_BOXES: IDatesSelectionBox[] = [
  {
    title: 'Date range',
    quickOptions: [
      {
        label: 'Last 10 seconds',
        value: () => moment().subtract(10, 'seconds').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      },
      {
        label: 'Last minute',
        value: () => moment().subtract(1, 'minute').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      },
      {
        label: 'Last 5 minutes',
        value: () => moment().subtract(5, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      },
      {
        label: 'Last 30 minutes',
        value: () => moment().subtract(30, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      },
      {
        label: 'Last hour',
        value: () => moment().subtract(1, 'hour').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      },
      {
        label: 'Last day',
        value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString()
      }
    ],
    isRange: true,
    withTime: true,
    hasSetToNowButton: true,
    color: DatePickerColors.blue
  }
];

export const CALENDAR_SELECTION_RULES: ICalendarSelectionRule[] = [
  {
    test: (date: Date) => date >= moment().startOf('day').toDate(), // You cannot select a date in the past
    isFor: CalendarSelectionRuleType.all
  },
  {
    test: (date: Date) => date.getDay() !== 6, // You cannot start your selection on a Saturday
    isFor: CalendarSelectionRuleType.lower
  },
  {
    test: (date: Date) => date.getDay() !== 0, // You cannot end your selection on a Sunday
    isFor: CalendarSelectionRuleType.upper
  },
  {
    test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end of your selection cannot be before the start of your selection
    isFor: CalendarSelectionRuleType.range
  },
  {
    test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7, // You cannot select more than 7 days at a time
    isFor: CalendarSelectionRuleType.range
  }
];
