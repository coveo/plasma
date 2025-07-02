import {DateTimeRangePickerMetadata} from '@coveord/plasma-components-props-analyzer';
import DateTimeRangePickerDemo from '@examples/date-range/date-time-picker/DateTimeRangePicker.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Date range"
        title="Date Time Range Picker"
        propsMetadata={DateTimeRangePickerMetadata}
        description="A date and time range picker with the ability to add presets"
        id="DateTimeRangePicker"
        demo={<DateTimeRangePickerDemo layout="vertical" center />}
    />
);

export default Page;
