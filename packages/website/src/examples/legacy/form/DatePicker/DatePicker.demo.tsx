import {
    CalendarSelectionRuleType,
    DATES_SEPARATOR,
    DatePickerDropdownConnected,
    IDatesSelectionBox,
    ICalendarSelectionRule,
} from '@coveord/plasma-react';
import moment from 'moment';

export default () => (
    <DatePickerDropdownConnected
        id="range-date-picker"
        datesSelectionBoxes={selectionOptions}
        selectionRules={rules}
        initiallyUnselected
        isClearable
        label="Select a date range"
    />
);

const selectionOptions: IDatesSelectionBox[] = [
    {
        title: 'Select a date range',
        quickOptions: [
            {
                label: 'Last Week',
                value: () => moment().subtract(1, 'week').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last day',
                value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
        ],
        isRange: true,
        withTime: false,
        hasSetToNowButton: true,
    },
];

const rules: ICalendarSelectionRule[] = [
    {
        test: (date: Date) => date <= new Date() && date >= moment().subtract(2, 'weeks').toDate(), // the date is within the last two weeks
        isFor: CalendarSelectionRuleType.all,
    },
    {
        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end date cannot be before the start date
        isFor: CalendarSelectionRuleType.upper,
    },
];
