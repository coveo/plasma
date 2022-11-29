import {DatePickerDropdownConnected} from '@coveord/plasma-react';

export default () => (
    <DatePickerDropdownConnected
        id="readonly-date-picker"
        datesSelectionBoxes={[
            {
                title: 'Select a date',
                isRange: true,
                withTime: true,
            },
        ]}
        readonly
    />
);
