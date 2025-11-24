import {DateTimeRangePicker} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const Demo = () => (
    <DateTimeRangePicker
        presets={{
            lastHour: {
                label: 'Last hour',
                range: [
                    dayjs().startOf('hour').toISOString(),
                    dayjs().endOf('hour').second(0).millisecond(0).toISOString(),
                ],
            },
            year2k: {
                label: 'Year 2000',
                range: [new Date(2000, 0, 1, 0, 0, 0).toISOString(), new Date(2000, 11, 31, 23, 59, 0).toISOString()],
            },
            currentMonth: {
                label: 'Month',
                range: [
                    dayjs().startOf('month').toISOString(),
                    dayjs().endOf('month').second(0).millisecond(0).toISOString(),
                ],
            },
        }}
    />
);
export default Demo;
