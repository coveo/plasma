// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-47863
// component=Radio.Group

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Type') === 'Card') {
    template = {
        id: 'Radio.Group',
        imports: ["import { RadioCard, Stack } from '@coveord/plasma-mantine';"],
        example: figma.code`<Stack>
                <RadioCard label="Label" description="Description"/>
                <RadioCard label="Label" description="Description"/>
                <RadioCard label="Label" description="Description"/>
                <RadioCard label="Label" description="Description"/>
            </Stack>`,
    };
} else if (figma.selectedInstance.getPropertyValue('Align') === 'Default') {
    template = {
        id: 'Radio.Group',
        imports: ["import { Group, Radio } from '@coveord/plasma-mantine';"],
        example: figma.code`<Group>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
            </Group>`,
    };
} else if (figma.selectedInstance.getPropertyValue('Align') === 'Vertical') {
    template = {
        id: 'Radio.Group',
        imports: ["import { Radio, Stack } from '@coveord/plasma-mantine';"],
        example: figma.code`<Stack>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
            </Stack>`,
    };
} else {
    template = {
        id: 'Radio.Group',
        imports: ["import { Radio, Stack } from '@coveord/plasma-mantine';"],
        example: figma.code`<Stack>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
                <Radio label="Label"/>
            </Stack>`,
    };
}

export default template;
