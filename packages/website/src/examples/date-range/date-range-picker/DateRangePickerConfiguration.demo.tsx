import {DateRangePicker} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const MIN_DATE = dayjs().subtract(2, 'month').toDate();
const MAX_DATE = dayjs().endOf('day').toDate();

const DATE_BOUNDARIES = {
    minDate: MIN_DATE,
    maxDate: MAX_DATE,
};

const Demo = () => (
    <DateRangePicker
        placeholder="Custom placeholder"
        formatter={(time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')}
        rangeCalendarProps={DATE_BOUNDARIES}
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
        startProps={DATE_BOUNDARIES}
        endProps={DATE_BOUNDARIES}
    />
);

export default Demo;
