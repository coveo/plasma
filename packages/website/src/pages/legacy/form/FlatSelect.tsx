import {FlatSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/FlatSelect/FlatSelect.demo.tsx';
import appendPrepend from '@examples/legacy/form/FlatSelect/FlatSelectAppendPrepend.demo.tsx';
import disabled from '@examples/legacy/form/FlatSelect/FlatSelectDisabled.demo.tsx';
import group from '@examples/legacy/form/FlatSelect/FlatSelectGroup.demo.tsx';
import iconOnly from '@examples/legacy/form/FlatSelect/FlatSelectIconsOnly.demo.tsx';
import optionPicker from '@examples/legacy/form/FlatSelect/FlatSelectOptionPicker.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="FlatSelectConnected"
        title="Flat Select"
        section="Form"
        description="A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options."
        componentSourcePath="/flatSelect/FlatSelect.tsx"
        code={code}
        propsMetadata={FlatSelectConnectedMetadata}
        examples={{
            disabled: {code: disabled, title: 'Disabled'},
            group: {code: group, title: 'Grouped'},
            optionPicker: {code: optionPicker, title: 'Option Picker'},
            appendPrepend: {code: appendPrepend, title: 'Append and prepend'},
            iconOnly: {code: iconOnly, title: 'Icon only'},
        }}
    />
);
