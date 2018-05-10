import * as React from 'react';
import {DateUtils} from '../../../utils/DateUtils';
import {DatePickerDropdownConnected} from '../DatePickerDropdownConnected';
import {CALENDAR_SELECTION_RULES_SINGLE_DATE, SELECTION_BOX} from './DatePickerExamplesCommon';

export class DatePickerDropdownConnectedSingleDateExamples extends React.Component<any, any> {

    render() {
        const currentYear = (new Date()).getFullYear();
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Date picker dropdown with single date, no time, and Redux state</label>
                    <DatePickerDropdownConnected
                        id='date-picker-dropdown-single-date'
                        setToNowTooltip='Set to today'
                        years={[
                            ...DateUtils.getPreviousYears(currentYear - 1700),
                            DateUtils.currentYear.toString(),
                            ...DateUtils.getNextYears(4000 - currentYear),
                        ]}
                        datesSelectionBoxes={SELECTION_BOX}
                        isLinkedToDateRange={false}
                        selectionRules={CALENDAR_SELECTION_RULES_SINGLE_DATE} />
                </div>
            </div>
        );
    }
}
