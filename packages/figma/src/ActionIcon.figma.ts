// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-49884
// component=ActionIcon.Primary

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Primary') {
    const children = (function () {
        const nestedLayer83 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer83.type !== 'ERROR'
                    ? nestedLayer83.getInstanceSwap('Icon')?.executeTemplate().example
                    : undefined,
        };
    })();
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });
    const size = figma.selectedInstance.getEnum('Size', {
        sm: 'sm',
    });

    template = {
        id: 'ActionIcon.Primary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.Primary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.Primary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Secondary') {
    const children = (function () {
        const nestedLayer84 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer84.type !== 'ERROR'
                    ? nestedLayer84.getInstanceSwap('Icon')?.executeTemplate().example
                    : undefined,
        };
    })();
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });
    const size = figma.selectedInstance.getEnum('Size', {
        sm: 'sm',
    });

    template = {
        id: 'ActionIcon.Secondary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.Secondary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.Secondary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Tertiary') {
    const children = (function () {
        const nestedLayer85 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer85.type !== 'ERROR'
                    ? nestedLayer85.getInstanceSwap('Icon')?.executeTemplate().example
                    : undefined,
        };
    })();
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });
    const size = figma.selectedInstance.getEnum('Size', {
        sm: 'sm',
    });

    template = {
        id: 'ActionIcon.Tertiary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.Tertiary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.Tertiary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Quaternary') {
    const children = (function () {
        const nestedLayer86 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer86.type !== 'ERROR'
                    ? nestedLayer86.getInstanceSwap('Icon')?.executeTemplate().example
                    : undefined,
        };
    })();
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });
    const size = figma.selectedInstance.getEnum('Size', {
        sm: 'sm',
    });

    template = {
        id: 'ActionIcon.Quaternary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.Quaternary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.Quaternary>`,
        metadata: {nestable: true},
    };
} else {
    const children = (function () {
        const nestedLayer86 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer86.type !== 'ERROR'
                    ? nestedLayer86.getInstanceSwap('Icon')?.executeTemplate().example
                    : undefined,
        };
    })();
    const disabled = figma.selectedInstance.getEnum('State', {
        Disabled: true,
    });
    const size = figma.selectedInstance.getEnum('Size', {
        sm: 'sm',
    });

    template = {
        id: 'ActionIcon.Quaternary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.Quaternary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.Quaternary>`,
        metadata: {nestable: true},
    };
}

export default template;
