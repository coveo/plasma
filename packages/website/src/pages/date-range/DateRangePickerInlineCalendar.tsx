import {DateRangePickerInlineCalendarMetadata} from '@coveord/plasma-components-props-analyzer';
import DateRangePickerInlineDemo from '@examples/date-range/inline/DateRangePickerInlineCalendar.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Date range"
        title="Date Range Picker Inline Calendar"
        propsMetadata={DateRangePickerInlineCalendarMetadata}
        description="."
        id="DateRangePickerInlineCalendar"
        demo={<DateRangePickerInlineDemo layout="vertical" center />}
    />
);

export default Page;
