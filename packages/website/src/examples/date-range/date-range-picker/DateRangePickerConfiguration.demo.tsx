import {DateRangePicker} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const Demo = () => (
    <DateRangePicker
        placeholder="Custom placeholder"
        formatter={(time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')}
        rangeCalendarProps={{minDate: dayjs().subtract(2, 'month').toDate(), maxDate: dayjs().endOf('day').toDate()}}
        presets={{
            lastHour: {
                label: 'Last hour',
                range: [
                    dayjs().startOf('hour').toISOString(),
                    dayjs().endOf('hour').second(0).millisecond(0).toISOString(),
                ],
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
