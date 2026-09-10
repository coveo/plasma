// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2246-3811
// component=Checkbox.Group

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Align') === 'Horizontal') {
    template = {
        id: 'Checkbox.Group',
        imports: ["import { Checkbox, Group } from '@coveord/plasma-mantine';"],
        example: figma.code`<Group>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
            </Group>`,
    };
} else if (figma.selectedInstance.getPropertyValue('Align') === 'Vertical') {
    template = {
        id: 'Checkbox.Group',
        imports: ["import { Checkbox, Stack } from '@coveord/plasma-mantine';"],
        example: figma.code`<Stack>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
            </Stack>`,
    };
} else {
    template = {
        id: 'Checkbox.Group',
        imports: ["import { Checkbox, Stack } from '@coveord/plasma-mantine';"],
        example: figma.code`<Stack>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
                <Checkbox label="Label"/>
            </Stack>`,
    };
}

export default template;
