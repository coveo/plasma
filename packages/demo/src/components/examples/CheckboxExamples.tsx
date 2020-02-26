import * as React from 'react';
import {
    Button,
    Checkbox,
    CheckboxConnected,
    GroupableCheckboxConnected,
    Label,
    LabeledInput,
    Section,
    toggleDisabledAllGroupedCheckbox,
} from 'react-vapor';

import {Store} from '../../Store';
import {ExampleComponent} from '../ComponentsInterface';

export const CheckboxExamples: ExampleComponent = () => (
    <Section>
        <Checkboxset />
        <GroupableCheckboxConnectedExamples />
    </Section>
);

CheckboxExamples.description = 'Checkboxes allow users to select multiple options from a set.';

// start-print

const Checkboxset: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Section title="Checkbox set">
            <Section level={2} title="Checkboxes with labels">
                <LabeledInput label="The label of the checkbox set">
                    <CheckboxConnected id="checkbox1" clearSides>
                        <Label>An unchecked checkbox</Label>
                    </CheckboxConnected>
                    <CheckboxConnected id="checkbox2" defaultChecked={true} clearSides>
                        <Label>A checked checkbox</Label>
                    </CheckboxConnected>
                    <CheckboxConnected id="checkbox3" disabled={true} clearSides>
                        <Label>A force disabled checkbox</Label>
                    </CheckboxConnected>
                    <CheckboxConnected id="checkbox4" indeterminate={true} clearSides>
                        <Label>A force checked and indeterminate (partially selected) checkbox</Label>
                    </CheckboxConnected>
                    <Checkbox id="checkbox5" checked={checked} onClick={() => setChecked(!checked)}>
                        <Label>A checkbox with local state</Label>
                    </Checkbox>
                </LabeledInput>
            </Section>
            <Section level={2}>
                <LabeledInput label="A checkbox with no label">
                    <CheckboxConnected id="checkbox-nolabel" />
                </LabeledInput>
            </Section>
        </Section>
    );
};

const GroupableCheckboxConnectedExamples: React.FunctionComponent = () => {
    const toggleDisabledAllCheckboxes = (id: string, disabled?: boolean) => {
        Store.dispatch(toggleDisabledAllGroupedCheckbox(id, undefined, disabled));
    };
    const parentId1 = 'parentId1';
    const parentId2 = 'parentId2';

    return (
        <Section level={2} title="Groupable Checkboxes">
            <Section>
                <LabeledInput label="A groupable checkbox with some child checkboxes selected by default">
                    <GroupableCheckboxConnected id={parentId1} isParent clearSides>
                        <Label>A parent checkbox connected</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected id={parentId1 + 1} parentId={parentId1} defaultChecked={true}>
                        <Label>Checkbox child 1</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected id={parentId1 + 2} parentId={parentId1} defaultChecked={false}>
                        <Label>Checkbox child 2</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected id={parentId1 + 3} parentId={parentId1} defaultChecked={true}>
                        <Label>Checkbox child 3</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected id={parentId1 + 4} parentId={parentId1} defaultChecked={false}>
                        <Label>Checkbox child 4</Label>
                    </GroupableCheckboxConnected>
                </LabeledInput>
                <br />
            </Section>
            <Section>
                <LabeledInput label="A groupable checkbox with all checkboxes disabled or enabled">
                    <div>
                        <Button
                            name={'Toggle checkboxes'}
                            enabled
                            onClick={() => toggleDisabledAllCheckboxes(parentId2)}
                        />
                    </div>
                    <GroupableCheckboxConnected id={parentId2} isParent defaultDisabled clearSides>
                        <Label>A parent checkbox connected</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected
                        id={parentId2 + 1}
                        parentId={parentId2}
                        defaultChecked={true}
                        defaultDisabled
                    >
                        <Label>Checkbox child 1</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected
                        id={parentId2 + 2}
                        parentId={parentId2}
                        defaultChecked={false}
                        defaultDisabled
                    >
                        <Label>Checkbox child 2</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected
                        id={parentId2 + 3}
                        parentId={parentId2}
                        defaultChecked={true}
                        defaultDisabled
                    >
                        <Label>Checkbox child 3</Label>
                    </GroupableCheckboxConnected>
                    <GroupableCheckboxConnected
                        id={parentId2 + 4}
                        parentId={parentId2}
                        defaultChecked={false}
                        defaultDisabled
                    >
                        <Label>Checkbox child 4</Label>
                    </GroupableCheckboxConnected>
                </LabeledInput>
            </Section>
        </Section>
    );
};
