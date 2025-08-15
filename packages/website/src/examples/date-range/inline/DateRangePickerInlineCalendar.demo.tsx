import {DateRangePickerInlineCalendar, type DatesRangeValue} from '@coveord/plasma-mantine';
import {type DateStringValue} from '@mantine/dates';
import dayjs from 'dayjs';
import {useState} from 'react';

const Demo = () => {
    const [range, setRange] = useState<DatesRangeValue<DateStringValue | null>>([null, null]);
    const onCancel = () => console.log('Cancel');

    return (
        <DateRangePickerInlineCalendar
            initialRange={range}
            onApply={setRange}
            onCancel={onCancel}
            presets={{
                year2k: {
                    label: 'Year 2K',
                    range: [new Date('2000/01/01').toISOString(), new Date('2000/12/31').toISOString()],
                },
                currentMonth: {
                    label: 'Month',
                    range: [dayjs().startOf('month').toISOString(), dayjs().endOf('month').toISOString()],
                },
            }}
        />
    );
};
export default Demo;
