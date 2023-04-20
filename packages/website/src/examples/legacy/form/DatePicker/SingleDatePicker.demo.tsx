import {
    CalendarSelectionRuleType,
    DatePickerDropdownConnected,
    IDatesSelectionBox,
    ICalendarSelectionRule,
} from '@coveord/plasma-react';
import moment from 'moment';

const Demo = () => (
    <DatePickerDropdownConnected
        id="single-date-picker"
        datesSelectionBoxes={selectionOptions}
        selectionRules={rules}
        initiallyUnselected
        isClearable
        label="Select a date"
        isLinkedToDateRange={false}
    />
);
export default Demo;

const selectionOptions: IDatesSelectionBox[] = [
    {
        title: 'Select a date',
        isRange: false,
        withTime: false,
        hasSetToNowButton: true,
    },
];

const rules: ICalendarSelectionRule[] = [
    {
        test: (date: Date) => moment(date).day() > 0 && moment(date).day() < 6, // the date is not a week-end day
        isFor: CalendarSelectionRuleType.all,
    },
];
