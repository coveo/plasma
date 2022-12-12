import {DatePickerDropdownConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import DatePickerDemo from '@examples/legacy/form/DatePicker/DatePicker.demo.tsx';
import DatePickerReadonlyDemo from '@examples/legacy/form/DatePicker/DatePickerReadonly.demo.tsx';
import SingleDatePickerDemo from '@examples/legacy/form/DatePicker/SingleDatePicker.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="DatePickerDropdownConnected"
        title="Date Picker"
        section="Form"
        description="A date picker is a calendar interface that allows users to select a single date or a date range."
        sourcePath="/packages/react/src/components/datePicker/DatePickerDropdown.tsx"
        demo={<DatePickerDemo />}
        propsMetadata={DatePickerDropdownConnectedMetadata}
        examples={{
            singleDate: <SingleDatePickerDemo title="Single Date" />,
            readOnly: <DatePickerReadonlyDemo title="Disabled" />,
        }}
    />
);

export default Page;
