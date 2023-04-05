import {FlatSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import FlatSelectDemo from '@examples/legacy/form/FlatSelect/FlatSelect.demo?demo';
import FlatSelectAppendPrependDemo from '@examples/legacy/form/FlatSelect/FlatSelectAppendPrepend.demo?demo';
import FlatSelectDisabledDemo from '@examples/legacy/form/FlatSelect/FlatSelectDisabled.demo?demo';
import FlatSelectGroupDemo from '@examples/legacy/form/FlatSelect/FlatSelectGroup.demo?demo';
import FlatSelectIconOnlyDemo from '@examples/legacy/form/FlatSelect/FlatSelectIconsOnly.demo?demo';
import FlatSelectOptionPickerDemo from '@examples/legacy/form/FlatSelect/FlatSelectOptionPicker.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const FlatSelectDemoPage = () => (
    <PageLayout
        id="FlatSelectConnected"
        title="Flat Select"
        section="Form"
        description="A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options."
        sourcePath="/packages/react/src/components/flatSelect/FlatSelect.tsx"
        demo={<FlatSelectDemo center />}
        propsMetadata={FlatSelectConnectedMetadata}
        examples={{
            disabled: <FlatSelectDisabledDemo center title="Disabled" />,
            group: <FlatSelectGroupDemo center title="Grouped" />,
            optionPicker: <FlatSelectOptionPickerDemo center title="Option Picker" />,
            appendPrepend: <FlatSelectAppendPrependDemo center title="Append and prepend" />,
            iconOnly: <FlatSelectIconOnlyDemo center title="Icon only" />,
        }}
    />
);

export default FlatSelectDemoPage;
