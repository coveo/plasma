import code from '@examples/FlatSelect/FlatSelect.example.tsx';
import group from '@examples/FlatSelect/FlatSelectGroup.example.tsx';
import disabled from '@examples/FlatSelect/FlatSelectDisabled.example.tsx';
import optionPicker from '@examples/FlatSelect/FlatSelectOptionPicker.example.tsx';
import appendPrepend from '@examples/FlatSelect/FlatSelectAppendPrepend.example.tsx';
import iconOnly from '@examples/FlatSelect/FlatSelectIconsOnly.example.tsx';

export default () => (
    <PageLayout
        id="FlatSelectConnected"
        title="Flat Select"
        section="Form"
        description="A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options."
        componentSourcePath="/flatSelect/FlatSelect.tsx"
        code={code}
        examples={{
            disabled: {code: disabled, title: 'Disabled'},
            group: {code: group, title: 'Grouped'},
            optionPicker: {code: optionPicker, title: 'Option Picker'},
            appendPrepend: {code: appendPrepend, title: 'Append and prepend'},
            iconOnly: {code: iconOnly, title: 'Icon only'},
        }}
    />
);
