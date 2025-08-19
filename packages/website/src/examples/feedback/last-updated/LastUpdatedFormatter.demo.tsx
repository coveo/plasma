import {LastUpdated} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

const Demo = () => <LastUpdated formatter={(time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')} />;

export default Demo;
