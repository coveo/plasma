// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7-49737
// component=Button.DestructivePrimary

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
        id: 'Button.DestructivePrimary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.DestructivePrimary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.DestructivePrimary>`,
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
        id: 'Button.DestructiveSecondary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.DestructiveSecondary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.DestructiveSecondary>`,
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
        id: 'Button.DestructiveTertiary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.DestructiveTertiary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.DestructiveTertiary>`,
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
        id: 'Button.DestructiveQuaternary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.DestructiveQuaternary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.DestructiveQuaternary>`,
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
        id: 'Button.DestructiveQuaternary',
        imports: ["import { Button } from '@coveord/plasma-mantine';"],
        example: figma.code`<Button.DestructiveQuaternary${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp(
            'rightSection',
            rightSection,
        )}${figma.helpers.react.renderProp('disabled', disabled)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Button.DestructiveQuaternary>`,
        metadata: {nestable: true},
    };
}

export default template;
