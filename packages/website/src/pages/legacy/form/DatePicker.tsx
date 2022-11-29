import {DatePickerDropdownConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import DatePickerExample from '@examples/legacy/form/DatePicker/DatePicker.example.tsx';
import DatePickerReadonlyExample from '@examples/legacy/form/DatePicker/DatePickerReadonly.example.tsx';
import SingleDatePickerExample from '@examples/legacy/form/DatePicker/SingleDatePicker.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="DatePickerDropdownConnected"
        title="Date Picker"
        section="Form"
        description="A date picker is a calendar interface that allows users to select a single date or a date range."
        componentSourcePath="/datePicker/DatePickerDropdown.tsx"
        code={DatePickerExample}
        propsMetadata={DatePickerDropdownConnectedMetadata}
        examples={{
            singleDate: {code: SingleDatePickerExample, title: 'Single Date'},
            readOnly: {code: DatePickerReadonlyExample, title: 'Disabled'},
        }}
    />
);
