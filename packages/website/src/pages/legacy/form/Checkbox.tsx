import {CheckboxMetadata} from '@coveord/plasma-components-props-analyzer';
import CheckboxExample from '@examples/legacy/form/Checkbox/Checkbox.example.tsx';
import CheckboxConnectedExample from '@examples/legacy/form/Checkbox/CheckboxConnected.example.tsx';
import CheckboxDisabledExample from '@examples/legacy/form/Checkbox/CheckboxDisabled.example.tsx';
import GroupableCheckboxExample from '@examples/legacy/form/Checkbox/GroupableCheckbox.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const CheckboxExamples = () => (
    <PageLayout
        id="Checkbox"
        title="Checkbox"
        section="Form"
        description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
        componentSourcePath="/checkbox/Checkbox.tsx"
        code={CheckboxExample}
        examples={{
            connected: {code: CheckboxConnectedExample, title: 'Connected to the PlasmaState'},
            disabled: {code: CheckboxDisabledExample, title: 'Disabled'},
            group: {code: GroupableCheckboxExample, title: 'A group of checkboxes'},
        }}
        propsMetadata={CheckboxMetadata}
    />
);

export default CheckboxExamples;
