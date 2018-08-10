
import * as moment from 'moment';
import * as React from 'react';
import { CalendarSelectionRuleType, ICalendarSelectionRule } from '../../calendar/Calendar';
import { DatePickerColors } from '../../datePicker/DatePicker';
import { IDatesSelectionBox } from '../../datePicker/DatePickerBox';
import { DatePickerDropdownConnected } from '../../datePicker/DatePickerDropdownConnected';

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
        quickOptions: [ // TODO Hide yesterday option if we select a range
            {
                label: 'Yesterday',
                value: () => moment().subtract(1, 'day').toDate().toString(),
            },
        ],
        isRange: false, // TODO If operator from.. to.. is selected set to 'true'
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
            <span>
                <DatePickerDropdownConnected
                    id={`${this.props.expressionEditorId}-${valueSelectDateId}`}
                    datesSelectionBoxes={SELECTION_BOX}
                    selectionRules={CALENDAR_SELECTION_RULES_SINGLE_DATE}
                    isLinkedToDateRange={true}
                />
            </span>
        );
    }
}
