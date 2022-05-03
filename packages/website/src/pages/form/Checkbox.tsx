import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Checkbox, Label} from '@coveord/plasma-react';

    export default () => {
        const [checked, setChecked] = React.useState(false);
        return (
            <Checkbox checked={checked} onClick={() => setChecked(!checked)}>
                <Label>Label</Label>
            </Checkbox>
        );
    };
`;

const connected = `
    import {CheckboxConnected, Label} from '@coveord/plasma-react';

    export default () => (
        <CheckboxConnected>
            <Label>Label</Label>
        </CheckboxConnected>
    );
`;

const disabled = `
    import {Checkbox, Label} from '@coveord/plasma-react';

    export default () => (
        <Checkbox disabled>
            <Label>Label</Label>
        </Checkbox>
    );
`;

const group = `
    import {GroupableCheckboxConnected, Label} from '@coveord/plasma-react';

    export default () => (
        <>
            <GroupableCheckboxConnected id="parent-id" isParent clearSides classes="mb1">
                <Label>Parent</Label>
            </GroupableCheckboxConnected>
            <GroupableCheckboxConnected id="child-1-id" parentId="parent-id">
                <Label>Child 1</Label>
            </GroupableCheckboxConnected>
            <GroupableCheckboxConnected id="child-2-id" parentId="parent-id">
                <Label>Child 2</Label>
            </GroupableCheckboxConnected>
            <GroupableCheckboxConnected id="child-3-id" parentId="parent-id">
                <Label>Child 3</Label>
            </GroupableCheckboxConnected>
        </>
    )
`;

const CheckboxExamples = () => (
    <PageLayout
        id="Checkbox"
        title="Checkbox"
        section="Form"
        description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
        componentSourcePath="/checkbox/Checkbox.tsx"
        code={code}
        examples={{
            connected: {code: connected, title: 'Connected to the PlasmaState'},
            disabled: {code: disabled, title: 'Disabled'},
            group: {code: group, title: 'A group of checkboxes'},
        }}
    />
);

export default CheckboxExamples;
