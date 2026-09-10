// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-50839
// component=RadioCard

import figma from 'figma';

const labelProps = (function () {
    const nestedLayer34 = figma.selectedInstance.findInstance('.Input.Label');
    return {
        label: nestedLayer34.type !== 'ERROR' ? nestedLayer34.getString('Label') : undefined,
        required: nestedLayer34.type !== 'ERROR' ? nestedLayer34.getBoolean('Asterisk') : undefined,
    };
})();
const descriptionProps = (function () {
    const nestedLayer35 = figma.selectedInstance.findInstance('.Input.Description');
    return {
        description: nestedLayer35.type !== 'ERROR' ? nestedLayer35.getString('Description') : undefined,
    };
})();
const disabled = figma.selectedInstance.getEnum('State', {
    Disabled: true,
});
const readOnly = figma.selectedInstance.getEnum('State', {
    'Read-only': true,
});
const checked = figma.selectedInstance.getEnum('Checked', {
    True: true,
});

export default {
    id: 'RadioCard',
    imports: ["import { RadioCard } from '@coveord/plasma-mantine';"],
    example: figma.code`<RadioCard${figma.helpers.react.renderProp('checked', checked)}${figma.helpers.react.renderProp(
        'label',
        labelProps.label,
    )}${figma.helpers.react.renderProp('description', descriptionProps?.description)}${figma.helpers.react.renderProp(
        'disabled',
        disabled,
    )}${figma.helpers.react.renderProp('readOnly', readOnly)}/>`,
    metadata: {nestable: true},
};
