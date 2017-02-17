

import { DATES_SEPARATOR } from '../../../utils/DateUtils';
import { DatePickerColors } from '../DatePicker';
import * as moment from 'moment';

export const SELECTION_BOXES = [
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
