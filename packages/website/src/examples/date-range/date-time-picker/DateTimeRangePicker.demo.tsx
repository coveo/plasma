import {DateTimeRangePicker} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const Demo = () => (
    <DateTimeRangePicker
        presets={{
            lastHour: {
                label: 'Last hour',
                range: [dayjs().startOf('hour').toISOString(), dayjs().endOf('hour').toISOString()],
            },
            year2k: {
                label: 'Year 2000',
                range: [new Date(2000, 0, 1, 0, 0, 0).toISOString(), new Date(2000, 11, 31, 23, 59, 59).toISOString()],
            },
            currentMonth: {
                label: 'Month',
                range: [dayjs().startOf('month').toISOString(), dayjs().endOf('month').toISOString()],
            },
        }}
    />
);
export default Demo;
