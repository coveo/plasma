import {CheckboxMetadata} from '@coveord/plasma-components-props-analyzer';
import CheckboxDemo from '@examples/legacy/form/Checkbox/Checkbox.demo.tsx';
import CheckboxConnectedDemo from '@examples/legacy/form/Checkbox/CheckboxConnected.demo.tsx';
import CheckboxDisabledDemo from '@examples/legacy/form/Checkbox/CheckboxDisabled.demo.tsx';
import GroupableCheckboxDemo from '@examples/legacy/form/Checkbox/GroupableCheckbox.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const CheckboxDemos = () => (
    <PageLayout
        id="Checkbox"
        title="Checkbox"
        section="Form"
        description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
        sourcePath="/packages/react/src/components/checkbox/Checkbox.tsx"
        demo={<CheckboxDemo center />}
        examples={{
            connected: <CheckboxConnectedDemo center title="Connected to the PlasmaState" />,
            disabled: <CheckboxDisabledDemo center title="Disabled" />,
            group: <GroupableCheckboxDemo center title="A group of checkboxes" />,
        }}
        propsMetadata={CheckboxMetadata}
    />
);

export default CheckboxDemos;
