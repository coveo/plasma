import {DateRangePickerPopoverCalendarMetadata} from '@coveord/plasma-components-props-analyzer';
import DateRangePickerDemo from '@examples/date-range/popover/DateRangePickerPopoverCalendar.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Date range"
        title="Date Range Picker Popover Calendar"
        propsMetadata={DateRangePickerPopoverCalendarMetadata}
        description="."
        id="DateRangePickerPopoverCalendar"
        demo={<DateRangePickerDemo layout="vertical" center />}
    />
);

export default Page;
