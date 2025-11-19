import {DateRangePickerMetadata} from '@coveord/plasma-components-props-analyzer';
import DateRangePickerDemo from '@examples/date-range/date-range-picker/DateRangePicker.demo?demo';
import DateRangePickerConfigurationDemo from '@examples/date-range/date-range-picker/DateRangePickerConfiguration.demo?demo';
import DateRangePickerControlledDemo from '@examples/date-range/date-range-picker/DateRangePickerControlled.demo?demo';
import DateRangePickerFormDemo from '@examples/date-range/date-range-picker/DateRangePickerForm.demo?demo';
import DateRangePickerUncontrolledDemo from '@examples/date-range/date-range-picker/DateRangePickerUncontrolled.demo?demo';
import DateRangePickerURLSyncDemo from '@examples/date-range/date-range-picker/DateRangePickerURLSync.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Date range"
        title="Date Range Picker"
        propsMetadata={DateRangePickerMetadata}
        description="A date range picker with presets, in a popover."
        id="DateRangePicker"
        demo={<DateRangePickerDemo layout="vertical" center />}
        examples={{
            controlled: <DateRangePickerControlledDemo center title="Controlled opened and value state" />,
            uncontrolled: <DateRangePickerUncontrolledDemo center title="Uncontrolled" />,
            form: <DateRangePickerFormDemo center title="Form integration" />,
            urlSync: <DateRangePickerURLSyncDemo center title="Sync value with URL" />,
            configuration: (
                <DateRangePickerConfigurationDemo
                    center
                    title="Configure placeholder, date format and various calendar options"
                />
            ),
        }}
    />
);

export default Page;
