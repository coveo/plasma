import {DateRangePickerPopoverCalendar} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const Demo = () => (
    <DateRangePickerPopoverCalendar
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
export default Demo;
