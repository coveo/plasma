// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=2250-5136
// component=Switch

import figma from 'figma';

const checked = figma.selectedInstance.getBoolean('Checked');
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-Only': true,
});
const labelProps = (function () {
    const nestedLayer20 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        required: nestedLayer20.type !== 'ERROR' ? nestedLayer20.getBoolean('Asterisk') : undefined,
        label: nestedLayer20.type !== 'ERROR' ? nestedLayer20.getString('Label') : undefined,
    };
})();
const descriptionProps = figma.selectedInstance.getBoolean('Description', {
    true: (function () {
        const nestedLayer21 = figma.selectedInstance.findInstance('.Input.Description');
        return {
            description: nestedLayer21.type !== 'ERROR' ? nestedLayer21.getString('Description') : undefined,
        };
    })(),
    false: figma.helpers.react.object({}),
});
const errorProps = figma.selectedInstance.getBoolean('Error', {
    true: (function () {
        const nestedLayer22 = figma.selectedInstance.findInstance('.Input.Error');
        return {
            error: nestedLayer22.type !== 'ERROR' ? nestedLayer22.getString('Error') : undefined,
        };
    })(),
    false: figma.helpers.react.object({}),
});

export default {
    id: 'Switch',
    imports: ["import { Switch } from '@coveord/plasma-mantine';"],
    example: figma.code`<Switch${figma.helpers.react.renderProp('checked', checked)}${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('description', descriptionProps?.description)}${figma.helpers.react.renderProp(
        'disabled',
        disabled,
    )}${figma.helpers.react.renderProp('readOnly', readOnly)}${figma.helpers.react.renderProp(
        'required',
        labelProps.required,
    )}${figma.helpers.react.renderProp('error', errorProps?.error)}/>`,
    metadata: {nestable: true},
};
