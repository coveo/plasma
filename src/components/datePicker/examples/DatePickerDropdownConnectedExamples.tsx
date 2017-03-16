import { DatePickerDropdownConnected } from '../DatePickerDropdownConnected';
import { SELECTION_BOXES, CALENDAR_SELECTION_RULES } from './DatePickerExamplesCommon';
import * as React from 'react';

export class DatePickerDropdownConnectedExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Date picker dropdown with Redux state</label>
          <DatePickerDropdownConnected
            id='date-picker-dropdown'
            datesSelectionBoxes={SELECTION_BOXES}
            selectionRules={CALENDAR_SELECTION_RULES} />
        </div>
      </div>
    );
  };
}
