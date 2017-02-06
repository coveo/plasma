import * as React from 'react';
import { DateUtils, DATES_SEPARATOR } from '../../../utils/DateUtils';
import { DatePickerDropdownConnected } from '../DatePickerDropdownConnected';

export class DatePickerDropdownConnectedExamples extends React.Component<any, any> {

  render() {
    let selectionBoxes = [
      {
        title: 'Date range',
        quickOptions: [
          {
            label: 'Last 10 seconds',
            value: () => DateUtils.getRelativeDate(new Date(), { seconds: -10 }).toString() + DATES_SEPARATOR + new Date().toString()
          },
          {
            label: 'Last minute',
            value: () => DateUtils.getRelativeDate(new Date(), { minutes: -1 }).toString() + DATES_SEPARATOR + new Date().toString()
          },
          {
            label: 'Last 5 minutes',
            value: () => DateUtils.getRelativeDate(new Date(), { minutes: -5 }).toString() + DATES_SEPARATOR + new Date().toString()
          },
          {
            label: 'Last 30 minutes',
            value: () => DateUtils.getRelativeDate(new Date(), { minutes: -30 }).toString() + DATES_SEPARATOR + new Date().toString()
          },
          {
            label: 'Last hour',
            value: () => DateUtils.getRelativeDate(new Date(), { hours: -1 }).toString() + DATES_SEPARATOR + new Date().toString()
          },
          {
            label: 'Last day',
            value: () => DateUtils.getRelativeDate(new Date(), { date: -1 }).toString() + DATES_SEPARATOR + new Date().toString()
          }
        ],
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: 'blue'
      }
    ];

    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Date picker dropdown with Redux state</label>
          <DatePickerDropdownConnected id='date-picker-dropdown' datesSelectionBoxes={selectionBoxes} />
        </div>
      </div>
    );
  };
}
