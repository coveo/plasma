import * as React from 'react';

import {DateUtils} from '../../../utils/DateUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {addDatePicker} from '../DatePickerActions';
import {DatePickerBox} from '../DatePickerBox';
import {DatePickerDropdownConnected} from '../DatePickerDropdownConnected';
import {CALENDAR_SELECTION_RULES_SINGLE_DATE, SELECTION_BOX} from './DatePickerExamplesCommon';

interface DatePickerDropdownConnectedSingleDateExamplesProps {
    onRender?: () => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: IDispatch): DatePickerDropdownConnectedSingleDateExamplesProps => {
    return {
        onRender: () => dispatch(addDatePicker(
            'simple-date-picker-dropdown-single-date',
            false,
            undefined,
            undefined,
            DatePickerBox.getCalendarId('simple-date-picker-dropdown-single-date'),
            false,
            false,
            true,
        )),
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class DatePickerDropdownConnectedSingleDateExamples extends React.Component<DatePickerDropdownConnectedSingleDateExamplesProps> {

    componentWillMount() {
        this.props.onRender();
    }

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

                <div className='form-group'>
                    <label className='form-control-label'>Simple date picker dropdown with single date, no time, and Redux state</label>
                    <DatePickerDropdownConnected
                        id='simple-date-picker-dropdown-single-date'
                        datesSelectionBoxes={[]}
                        selectionRules={CALENDAR_SELECTION_RULES_SINGLE_DATE}
                        simple
                    />
                </div>
            </div>
        );
    }
}
