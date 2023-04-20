import {DatePickerDropdownConnected} from '@coveord/plasma-react';

const Demo = () => (
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
export default Demo;
