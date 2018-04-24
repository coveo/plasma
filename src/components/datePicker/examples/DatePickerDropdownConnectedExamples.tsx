import * as React from 'react';
import * as _ from 'underscore';
import {DatePickerDropdownConnected} from '../DatePickerDropdownConnected';
import {CALENDAR_SELECTION_RULES, FOUR_SELECTION_BOXES, SELECTION_BOXES} from './DatePickerExamplesCommon';

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
                <div className='form-group'>
                    <label className='form-control-label'>Date picker dropdown with a range limit of 3 days Redux state</label>
                    <DatePickerDropdownConnected
                        id='date-picker-dropdown-1'
                        datesSelectionBoxes={[_.extend({}, SELECTION_BOXES[0], {rangeLimit: {days: 3, message: 'Date limit exceeded'}})]}
                        selectionRules={CALENDAR_SELECTION_RULES} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Clearable date picker dropdown initially unselected with Redux state</label>
                    <DatePickerDropdownConnected
                        id='date-picker-dropdown-2'
                        datesSelectionBoxes={FOUR_SELECTION_BOXES}
                        selectionRules={[]}
                        isClearable
                        initiallyUnselected />
                </div>
            </div>
        );
    }
}
