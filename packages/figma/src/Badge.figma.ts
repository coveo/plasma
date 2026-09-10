// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components-Library?node-id=7%3A50600
// component=Badge.Primary

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Type') === 'Primary') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Primary',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Primary${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Primary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Secondary') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Secondary',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Secondary${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Secondary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Success') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Success',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Success${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Success>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Warning') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Warning',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Warning${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Warning>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Critical') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Critical',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Critical${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Critical>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Type') === 'Disabled') {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Disabled',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Disabled${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Disabled>`,
        metadata: {nestable: true},
    };
} else {
    const size = figma.selectedInstance.getEnum('Size', {
        Small: 'small',
        Large: 'large',
    });
    const leftSection = figma.selectedInstance.getBoolean('LeftSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Left')?.executeTemplate().example,
    });
    const rightSection = figma.selectedInstance.getBoolean('RightSection', {
        true: figma.selectedInstance.getInstanceSwap('Swap Right')?.executeTemplate().example,
    });
    const placeholder = figma.selectedInstance.getString('Placeholder');

    template = {
        id: 'Badge.Primary',
        imports: ["import { Badge } from '@coveord/plasma-mantine';"],
        example: figma.code`<Badge.Primary${figma.helpers.react.renderProp(
            'size',
            size,
        )}${figma.helpers.react.renderProp(
            'leftSection',
            leftSection,
        )}${figma.helpers.react.renderProp('rightSection', rightSection)}>
                ${figma.helpers.react.renderChildren(placeholder)}
            </Badge.Primary>`,
        metadata: {nestable: true},
    };
}

export default template;
