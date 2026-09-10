// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7-49794
// component=Button.Primary

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Primary') {
    const leftSection = figma.selectedInstance.getBoolean('Left Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('Right Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });

    template = {
        id: 'Button.Primary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.Primary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.Primary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Secondary') {
    const leftSection = figma.selectedInstance.getBoolean('Left Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('Right Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });

    template = {
        id: 'Button.Secondary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.Secondary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.Secondary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Tertiary') {
    const leftSection = figma.selectedInstance.getBoolean('Left Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('Right Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });

    template = {
        id: 'Button.Tertiary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.Tertiary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.Tertiary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Quaternary') {
    const leftSection = figma.selectedInstance.getBoolean('Left Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('Right Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });

    template = {
        id: 'Button.Quaternary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.Quaternary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.Quaternary>`,
        metadata: {nestable: true},
    };
} else {
    const leftSection = figma.selectedInstance.getBoolean('Left Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('Right Section', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });

    template = {
        id: 'Button.Primary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.Primary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.Primary>`,
        metadata: {nestable: true},
    };
}

export default template;
