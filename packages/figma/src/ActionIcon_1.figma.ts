// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2911-3649
// component=ActionIcon.DestructivePrimary

import figma from 'figma';

// Branch per variant; no default, else first.

let template;
if (figma.selectedInstance.getPropertyValue('Variant') === 'Primary') {
    const children = (function () {
        const nestedLayer87 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer87.type !== 'ERROR'
                    ? nestedLayer87.getInstanceSwap('Icon')?.executeTemplate().example
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
        id: 'ActionIcon.DestructivePrimary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.DestructivePrimary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.DestructivePrimary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Secondary') {
    const children = (function () {
        const nestedLayer88 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer88.type !== 'ERROR'
                    ? nestedLayer88.getInstanceSwap('Icon')?.executeTemplate().example
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
        id: 'ActionIcon.DestructiveSecondary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.DestructiveSecondary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.DestructiveSecondary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Tertiary') {
    const children = (function () {
        const nestedLayer89 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer89.type !== 'ERROR'
                    ? nestedLayer89.getInstanceSwap('Icon')?.executeTemplate().example
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
        id: 'ActionIcon.DestructiveTertiary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.DestructiveTertiary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.DestructiveTertiary>`,
        metadata: {nestable: true},
    };
} else if (figma.selectedInstance.getPropertyValue('Variant') === 'Quaternary') {
    const children = (function () {
        const nestedLayer90 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer90.type !== 'ERROR'
                    ? nestedLayer90.getInstanceSwap('Icon')?.executeTemplate().example
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
        id: 'ActionIcon.DestructiveQuaternary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.DestructiveQuaternary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.DestructiveQuaternary>`,
        metadata: {nestable: true},
    };
} else {
    const children = (function () {
        const nestedLayer90 = figma.selectedInstance.findInstance('Icons');
        return {
            icon:
                nestedLayer90.type !== 'ERROR'
                    ? nestedLayer90.getInstanceSwap('Icon')?.executeTemplate().example
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
        id: 'ActionIcon.DestructiveQuaternary',
        imports: ["import { ActionIcon } from '@coveord/plasma-mantine';"],
        example: figma.code`<ActionIcon.DestructiveQuaternary${figma.helpers.react.renderProp(
            'disabled',
            disabled,
        )}${figma.helpers.react.renderProp('size', size)}>
                ${figma.helpers.react.renderChildren(children.icon)}
            </ActionIcon.DestructiveQuaternary>`,
        metadata: {nestable: true},
    };
}

export default template;
