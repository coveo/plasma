
import * as React from 'react';
import {CalendarSelectionRuleType, ICalendarSelectionRule} from '../../calendar/Calendar';
import {DatePickerColors} from '../../datePicker/DatePicker';
import {IDatesSelectionBox} from '../../datePicker/DatePickerBox';
import {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';
import * as styles from './ValueSelectDate.scss';

// TODO DATE SELECTION:
// The selection of a date range has not been implemented yet
// The selection of yesterday has not been implemented yet
// The places that will need some adjusments are tagged with 'TODO DATE SELECTION:'

export const valueSelectDateId: string = 'value-select-date';

export const CALENDAR_SELECTION_RULES_SINGLE_DATE: ICalendarSelectionRule[] = [
    {
        test: (date: Date) => date.getFullYear() > 1700 || date.getFullYear() < 4000,
        isFor: CalendarSelectionRuleType.all,
    },
];

export const SELECTION_BOX: IDatesSelectionBox[] = [
    {
        title: 'Select date',
        // TODO DATE SELECTION: Hide yesterday option if we select a range.
        // TODO DATE SELECTION: add the logic to parse correctly the yesterday selection
        // quickOptions: [
        //     {
        //         label: 'Yesterday',
        //         value: () => moment().subtract(1, 'day').toDate().toString(),
        //     },
        // ],
        // TODO DATE SELECTION:  If operator from.. to.. is selected set to 'true'
        isRange: false,
        withTime: false,
        color: DatePickerColors.blue,
    },
];

export interface IValueSelectDateProps {
    expressionEditorId: string;
}

export interface IValueSelectDateState {
}

export class ValueSelectDate extends React.Component<IValueSelectDateProps, IValueSelectDateState> {
    constructor(props: IValueSelectDateProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DatePickerDropdownConnected
                id={`${this.props.expressionEditorId}-${valueSelectDateId}`}
                datesSelectionBoxes={SELECTION_BOX}
                selectionRules={CALENDAR_SELECTION_RULES_SINGLE_DATE}
                isLinkedToDateRange={true}
                extraDropdownToggleClasses={[styles.selectValueWidth]}
            />
        );
    }
}
