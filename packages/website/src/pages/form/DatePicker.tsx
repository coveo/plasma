const code = `
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
`;

const singleDate = `
    import {
        CalendarSelectionRuleType,
        DatePickerDropdownConnected,
        IDatesSelectionBox,
        ICalendarSelectionRule,
    } from '@coveord/plasma-react';
    import moment from 'moment';

    export default () => (
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
`;

const readOnly = `
    import { DatePickerDropdownConnected } from '@coveord/plasma-react';

    export default () => (
        <DatePickerDropdownConnected
            id="readonly-date-picker"
            datesSelectionBoxes={[{
                title: 'Select a date',
                isRange: true,
                withTime: true,
            }]}
            readonly
        />
    );
`;

export default () => (
    <PageLayout
        id="DatePickerDropdownConnected"
        title="Date Picker"
        section="Form"
        description="A date picker is a calendar interface that allows users to select a single date or a date range."
        componentSourcePath="/datePicker/DatePickerDropdown.tsx"
        code={code}
        examples={{
            singleDate: {code: singleDate, title: 'Single Date'},
            readOnly: {code: readOnly, title: 'Disabled'},
        }}
    />
);
