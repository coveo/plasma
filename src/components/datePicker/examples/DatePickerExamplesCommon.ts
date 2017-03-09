import { DATES_SEPARATOR } from '../../../utils/DateUtils';
import { DatePickerColors } from '../DatePicker';
import { IDatesSelectionBox } from '../DatePickerBox';
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
    color: DatePickerColors.blue,
    datePickerValidation: [
      {
        rule: (date: Date) => date >= new Date(),
        errorMessage: 'You cannot select a date in the past',
        forLowerLimit: true,
        forUpperLimit: true
      },
      {
        rule: (date: Date) => date.getDay() !== 6,
        errorMessage: 'You cannot start your selection on a Saturday',
        forLowerLimit: true
      },
      {
        rule: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0,
        errorMessage: 'The end of your selection cannot be before the start of your selection',
        forRange: true
      },
      {
        rule: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7,
        errorMessage: 'You cannot select more than 7 days at a time',
        forRange: true
      }
    ]
  }
];
