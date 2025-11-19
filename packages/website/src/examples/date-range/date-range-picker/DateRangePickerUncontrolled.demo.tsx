import {DateRangePicker, DatesRangeValue} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const INITIAL_DATE_RANGE: DatesRangeValue<string> = [
    dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    dayjs().format('YYYY-MM-DD'),
];

const Demo = () => (
    <DateRangePicker defaultValue={INITIAL_DATE_RANGE} onChange={(range) => alert(`New range: ${range}`)} />
);

export default Demo;
